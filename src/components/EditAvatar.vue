<script setup>
import { mdiClose } from "@mdi/js";
import BaseButton from "@/components/BaseButton.vue";
import CardBox from "@/components/CardBox.vue";
import OverlayLayer from "@/components/OverlayLayer.vue";
import CardBoxComponentTitle from "@/components/CardBoxComponentTitle.vue";
import { computed, ref, reactive, onMounted, defineEmits } from "vue";
import { useMainStore } from "@/stores/main";
import { mdiEye, mdiTrashCan, mdiText } from "@mdi/js";
import CardBoxModal from "@/components/CardBoxModal.vue";
import TableCheckboxCell from "@/components/TableCheckboxCell.vue";
import BaseLevel from "@/components/BaseLevel.vue";
import FormCheckRadioGroup from "@/components/FormCheckRadioGroup.vue";
import FormFilePicker from "@/components/FormFilePicker.vue";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
import BaseDivider from "@/components/BaseDivider.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import UserAvatar from "@/components/UserAvatar.vue";

const mainStore = useMainStore();



const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  button: {
    type: String,
    default: "info",
  },
  buttonLabel: {
    type: String,
    default: "Close",
  },
  avatar: {
    type: Object
  },
  hasCancel: Boolean,
  modelValue: {
    type: [String, Number, Boolean],
    default: null,
  },
});

const emit = defineEmits(["update:modelValue", "close"]);

const value = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const confirmClose = (mode) => {
  value.value = false;
  emit(mode);
};

const close = () => confirmClose("close");

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && value.value) {
    close();
  }
});

</script>

<template>
  <OverlayLayer v-show="value" @overlay-click="cancel">
    <CardBox v-show="value" class="shadow-lg max-h-modal w-11/12 md:w-3/5 lg:w-2/5 xl:w-4/12 z-50 overflow-scroll"
      is-modal>
      <CardBoxComponentTitle :title="title">
        <BaseButton v-if="hasCancel" :icon="mdiClose" color="whiteDark" small rounded-full @click.prevent="cancel" />
      </CardBoxComponentTitle>
      <div class="flex items-center justify-center w-full">

        <UserAvatar :avatar="avatar" />


      </div>
      <CardBox form @submit.prevent="submit">
        <FormField>
          <FormField :label="$t('avatar.clothes')">
            <FormControl v-model="avatar.clotheType" :options="mainStore.config.avatarConfig.clothes" />
          </FormField>
          <FormField :label="$t('avatar.clotheColor')">
            <FormControl v-model="avatar.clotheColor" :options="mainStore.config.avatarConfig.topColor" />
          </FormField>
        </FormField>

        <FormField>
          <FormField :label="$t('avatar.top')">
            <FormControl v-model="avatar.topType" :options="mainStore.config.avatarConfig.top" />
          </FormField>
          <FormField :label="$t('avatar.topColor')">
            <FormControl v-model="avatar.topColor" :options="mainStore.config.avatarConfig.topColor" />
          </FormField>
        </FormField>

        <FormField>
          <FormField :label="$t('avatar.accessories')">
            <FormControl v-model="avatar.accessoriesType" :options="mainStore.config.avatarConfig.accessories" />
          </FormField>
          <FormField :label="$t('avatar.hairColor')">
            <FormControl v-model="avatar.hairColor" :options="mainStore.config.avatarConfig.hairColor" />
          </FormField>
        </FormField>

        <FormField>
          <FormField :label="$t('avatar.facialHair')">
            <FormControl v-model="avatar.facialHairType" :options="mainStore.config.avatarConfig.facialHair" />
          </FormField>
          <FormField :label="$t('avatar.facialHairColor')">
            <FormControl v-model="avatar.facialHairColor" :options="mainStore.config.avatarConfig.hairColor" />
          </FormField>
        </FormField>

        <FormField>
          <FormField :label="$t('avatar.eyebrows')">
            <FormControl v-model="avatar.eyebrowType" :options="mainStore.config.avatarConfig.eyebrows" />
          </FormField>
          <FormField :label="$t('avatar.eyes')">
            <FormControl v-model="avatar.eyeType" :options="mainStore.config.avatarConfig.eyes" />
          </FormField>
        </FormField>
        <FormField>

          <FormField :label="$t('avatar.mouths')">
            <FormControl v-model="avatar.mouthType" :options="mainStore.config.avatarConfig.mouths" />
          </FormField>
        </FormField>
        <FormField>
          <FormField :label="$t('avatar.skins')">
            <FormControl v-model="avatar.skinColor" :options="mainStore.config.avatarConfig.skins" />
          </FormField>
          <FormField :label="$t('avatar.graphic')">
            <FormControl v-model="avatar.graphicType" :options="mainStore.config.avatarConfig.graphic" />
          </FormField>
        </FormField>
        <template #footer>

        </template>
      </CardBox>

      <template #footer>
        <BaseButtons>
          <BaseButton :label="buttonLabel" :color="button" @click="close" />
          <BaseButton v-if="hasCancel" label="Cancel" :color="button" outline @click="cancel" />
        </BaseButtons>
      </template>
    </CardBox>
  </OverlayLayer>
</template>
