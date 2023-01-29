<script setup>
import { computed } from "vue";
import {
  mdiCashMinus,
  mdiCashPlus,
  mdiReceipt,
  mdiCreditCardOutline,
} from "@mdi/js";
import CardBox from "@/components/CardBox.vue";
import BaseLevel from "@/components/BaseLevel.vue";
import PillTag from "@/components/PillTag.vue";
import UserAvatar from "@/components/UserAvatar.vue";

const props = defineProps({
  advert: {
    type: Object,
    required: true,
  }
});

const icon = computed(() => {
  if (props.type === "withdrawal") {
    return {
      icon: mdiCashMinus,
      type: "danger",
    };
  } else if (props.type === "deposit") {
    return {
      icon: mdiCashPlus,
      type: "success",
    };
  } else if (props.type === "invoice") {
    return {
      icon: mdiReceipt,
      type: "warning",
    };
  }

  return {
    icon: mdiCreditCardOutline,
    type: "info",
  };
});
</script>

<template>
  <CardBox class="mb-6 last:mb-0" is-hoverable>
    <BaseLevel>
      <BaseLevel type="justify-start">
        <UserAvatar :avatar="advert.owner.avatar" class="w-1/3" />
        <div class="text-center space-y-1 md:text-left md:mr-0">
          <h4 class="text-xl">{{ advert.time }}</h4>
          <p class="text-gray-500 dark:text-slate-400">
            <b>{{ advert.owner.firstname }} {{ advert.owner.lastname }}</b>
          </p>
        </div>
      </BaseLevel>
      <div class="text-center md:text-right space-y-2">
        <p class="text-sm text-gray-500">
          {{ name }}
        </p>
        <div>
          <PillTag :color="icon.type" :label="type" small />
        </div>
      </div>
    </BaseLevel>
  </CardBox>
</template>
