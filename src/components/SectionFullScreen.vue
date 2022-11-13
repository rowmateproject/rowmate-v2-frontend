<script setup>
import { computed } from "vue";
import { useStyleStore } from "@/stores/style";
import {
  gradientBgPurplePink,
  gradientBgDark,
  gradientBgPinkRed,
} from "@/colors";

const props = defineProps({
  bg: {
    type: String,
    default: "purplePink",
    validator: (value) => ["purplePink", "pinkRed"].includes(value),
  },
  bgimage: {
    type: Boolean,
    default: true
  }
});

const bgClass = computed(() => {
  if (props.bgimage) {
    return "bg-[url('/img/backgrounds/1.jpg')]"
  } else {
    if (useStyleStore().darkMode) {
      return gradientBgDark;
    }
    switch (props.bg) {
      case "purplePink":
        return gradientBgPurplePink;
      case "pinkRed":
        return gradientBgPinkRed;
    }
  }

  return "";
});
</script>

<template>
  <div class="flex min-h-screen items-center justify-center" :class="bgClass" style="background-size: cover;">
    <slot card-class="w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl" />
  </div>
</template>
