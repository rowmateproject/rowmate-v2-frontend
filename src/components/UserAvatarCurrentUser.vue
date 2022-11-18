<script setup>
import { computed, ref } from "vue";
import { useMainStore } from "@/stores/main";
import UserAvatar from "@/components/UserAvatar.vue";

const mainStore = useMainStore();
const user = computed(() => mainStore.user);

</script>

<template>
  <UserAvatar v-if="user" :username="user.firstname" :avatar="user.avatar">
    <slot />
  </UserAvatar>
</template>
