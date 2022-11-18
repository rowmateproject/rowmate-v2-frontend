<script setup>
import { useRouter } from "vue-router";
import { useStyleStore } from "@/stores/style.js";
import { useMainStore } from "@/stores/main.js";
import { gradientBgPurplePink } from "@/colors.js";
import SectionMain from "@/components/SectionMain.vue";
import CardBox from "@/components/CardBox.vue";
import LayoutGuest from "@/layouts/LayoutGuest.vue";
import axios from "axios";

const styleStore = useStyleStore();
const mainStore = useMainStore();
const router = useRouter();
axios.defaults.baseURL = mainStore.api;
axios.defaults.headers.common['Authorization'] = "Bearer " + mainStore.access_token;

if (mainStore.access_token != null) {
  axios.get('/users/me').then(res => {
    router.push("/dashboard");
  }).catch(error => {
    console.log(error.response.status)
    mainStore.access_token = null
    mainStore.user = null
    router.push("/login")
  })

} else {
  router.push("/login")
};
</script>

<template>
  <LayoutGuest>
    <div>
    </div>
  </LayoutGuest>
</template>
