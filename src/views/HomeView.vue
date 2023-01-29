<script setup>
import { computed, reactive, onMounted } from "vue";
import { useMainStore } from "@/stores/main";
import {
  mdiAccountMultiple,
  mdiCartOutline,
  mdiChartTimelineVariant,
  mdiMonitorCellphone,
  mdiReload,
  mdiGithub,
  mdiChartPie,
} from "@mdi/js";
import * as chartConfig from "@/components/Charts/chart.config.js";
import SectionMain from "@/components/SectionMain.vue";
import CardBox from "@/components/CardBox.vue";
import NotificationBar from "@/components/NotificationBar.vue";
import CardBoxAdvert from "@/components/CardBoxAdvert.vue";
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import axios from "axios";


const mainStore = useMainStore();


const state = reactive({
  adverts: []
});

axios.defaults.baseURL = mainStore.api;
axios.defaults.headers.common['Authorization'] = mainStore.access_token;

const loadAdverts = async () => { state.adverts = await axios.get("/adverts/").then((res) => res.data) }

onMounted(() => {
  loadAdverts();
});


const clientBarItems = computed(() => mainStore.clients.slice(0, 4));

const transactionBarItems = computed(() => mainStore.history);
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>

      <div class="grid grid-cols-1  gap-6 mb-6">
        <div class="flex flex-col justify-between">
          <CardBoxAdvert v-for="(advert, index) in state.adverts" :key="index" :advert="advert" />
        </div>
      </div>

      <SectionTitleLineWithButton :icon="mdiAccountMultiple" title="Clients" />

      <NotificationBar color="info" :icon="mdiMonitorCellphone">
        <b>Responsive table.</b> Collapses on mobile
      </NotificationBar>

      <CardBox has-table>

      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>
