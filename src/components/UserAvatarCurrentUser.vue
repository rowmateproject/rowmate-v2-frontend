<script setup>
import { computed, ref } from "vue";
import { useMainStore } from "@/stores/main";
import UserAvatar from "@/components/UserAvatar.vue";

const mainStore = useMainStore();
const firstName = computed(() => mainStore.user.firstname);
const avatar = computed(() => mainStore.user.avatar);

</script>

<template>
  <UserAvatar :username="firstName" :avatar="avatar">
    <slot />
  </UserAvatar>
</template>
