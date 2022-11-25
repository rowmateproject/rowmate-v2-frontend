<script setup>
import { computed, ref, reactive, onMounted, defineEmits } from "vue";
import { useMainStore } from "@/stores/main";
import CardBox from "@/components/CardBox.vue";
import { mdiEye, mdiTrashCan, mdiText } from "@mdi/js";
import CardBoxModal from "@/components/CardBoxModal.vue";
import TableCheckboxCell from "@/components/TableCheckboxCell.vue";
import BaseLevel from "@/components/BaseLevel.vue";
import FormCheckRadioGroup from "@/components/FormCheckRadioGroup.vue";
import FormFilePicker from "@/components/FormFilePicker.vue";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
import BaseDivider from "@/components/BaseDivider.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import UserAvatar from "@/components/UserAvatar.vue";
import axios from "axios";

const mainStore = useMainStore();
const emit = defineEmits(["reload"]);

const boatForm = reactive({
  name: "",
  cox: false,
  people: 1,
  category: "racing"
});

axios.defaults.baseURL = mainStore.api;
axios.defaults.headers.common['Authorization'] = mainStore.access_token;

const addBoat = (name, category, total, cox) => {
  axios.post("/boats/add", { name: name, category: category, total: total, cox: cox }).then(res => {
    console.log("Boat added with id " + res.data.id)
    emit('reload');
  })

}
const selectOptions = ["racing", "cgig", "other"]
</script>




<template>
  <CardBox form @submit.prevent="submit">
    <FormField label="Name">
      <FormControl v-model="boatForm.name" :icon="mdiText" />
    </FormField>
    <FormField>
      <FormField label="Name">
        <FormControl v-model="boatForm.category" :options="selectOptions" />
      </FormField>
      <FormField label="Coxed">
        <FormCheckRadioGroup v-model="boatForm.cox" name="sample-switch" type="switch" :options="{ cox: 'Coxed' }" />
      </FormField>
      <FormField label="People">
        <FormControl v-model="boatForm.people" type="number" min="1" max="100" />
      </FormField>
    </FormField>
    <template #footer>
      <BaseButtons>
        <BaseButton type="submit" color="info" label="Add Boat"
          @click="addBoat(boatForm.name, boatForm.category, boatForm.people, boatForm.cox)" />
      </BaseButtons>
    </template>
  </CardBox>
</template>
