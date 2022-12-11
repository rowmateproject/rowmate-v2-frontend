<script setup>
import { computed, ref, onMounted } from "vue";
import { useMainStore } from "@/stores/main";
import {
  mdiShipWheel,
} from "@mdi/js";
import SectionMain from "@/components/SectionMain.vue";
import CardBox from "@/components/CardBox.vue";
import TableUsers from "@/components/TableUsers.vue";
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
const reload = ref(0);

</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>

      <SectionTitleLineWithButton :icon="mdiShipWheel" title="Users" main />

      <CardBox has-table>
        <TableUsers :reload="reload" />

      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>
