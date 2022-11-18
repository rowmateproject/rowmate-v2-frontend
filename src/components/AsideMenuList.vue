<script setup>
import { computed } from "vue";
import AsideMenuItem from "@/components/AsideMenuItem.vue";
import { useMainStore } from "@/stores/main.js";

const props = defineProps({
  isDropdownList: Boolean,
  menu: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["menu-click"]);

const mainStore = useMainStore();
const menuClick = (event, item) => {
  emit("menu-click", event, item);
};

const roleMenu = computed(() => props.menu.filter(i => mainStore.user.roles.includes(i.role)))
</script>

<template>
  <ul>
    <AsideMenuItem v-for="(item, index) in roleMenu" :key="index" :item="item" :is-dropdown-list="isDropdownList"
      @menu-click="menuClick" />
  </ul>
</template>
