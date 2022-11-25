<script setup>
import { computed, ref, reactive, onMounted, watch } from "vue";
import { useMainStore } from "@/stores/main";
import { mdiEye, mdiTrashCan } from "@mdi/js";
import CardBoxModal from "@/components/CardBoxModal.vue";
import TableCheckboxCell from "@/components/TableCheckboxCell.vue";
import BaseLevel from "@/components/BaseLevel.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import BaseButton from "@/components/BaseButton.vue";
import UserAvatar from "@/components/UserAvatar.vue";
import axios from "axios";

const mainStore = useMainStore();


const state = reactive({
  boats: [],
  delete: {
    _id: "",
    name: ""
  }
});

axios.defaults.baseURL = mainStore.api;
axios.defaults.headers.common['Authorization'] = mainStore.access_token;

const loadBoats = async () => { state.boats = await axios.get("/boats/").then((res) => res.data) }


const props = defineProps({
  checkable: Boolean,
  reload: {
    type: Number,
    default: 0,
  }
});
const rld = computed(() => { //  Watch() not working properly directly with prop
  return props.reload
})


onMounted(() => {
  loadBoats();
})

watch(rld, (newValue, oldValue) => {
  loadBoats()
}, {
  deep: true,
})

const boatDeletedModalState = ref(false);

const isModalDangerActive = ref(false);

const perPage = ref(10);

const currentPage = ref(0);

const checkedRows = ref([]);

const boatsPaginated = computed(() =>
  state.boats.slice(
    perPage.value * currentPage.value,
    perPage.value * (currentPage.value + 1)
  )
);

const numPages = computed(() => Math.ceil(state.boats.length / perPage.value));

const currentPageHuman = computed(() => currentPage.value + 1);

const pagesList = computed(() => {
  const pagesList = [];

  for (let i = 0; i < numPages.value; i++) {
    pagesList.push(i);
  }

  return pagesList;
});

const remove = (arr, cb) => {
  const newArr = [];

  arr.forEach((item) => {
    if (!cb(item)) {
      newArr.push(item);
    }
  });

  return newArr;
};

const checked = (isChecked, client) => {
  if (isChecked) {
    checkedRows.value.push(client);
  } else {
    checkedRows.value = remove(
      checkedRows.value,
      (row) => row.id === client.id
    );
  }
};


const deleteBoatModal = (boatid, name) => {
  state.delete._id = boatid
  state.delete.name = name
  isModalDangerActive.value = true
}


const deleteBoat = (boatid) => {
  axios.delete("/boats/" + boatid).then(() => {
    boatDeletedModalState.value = true
    loadBoats()
  })
}
</script>




<template>
  <CardBoxModal v-model="boatDeletedModalState" title="Boat deleted">
    <p>The boat was deleted</p>

  </CardBoxModal>

  <CardBoxModal v-model="isModalDangerActive" buttonLabel="Delete" title="Confirm deletion" button="danger" has-cancel
    @confirm="deleteBoat(state.delete._id)">
    <p>Do you want to delete the boat with the name {{ state.delete.name }} and the id {{ state.delete._id }}?</p>
  </CardBoxModal>

  <div v-if="checkedRows.length" class="p-3 bg-gray-100/50 dark:bg-slate-800">
    <span v-for="checkedRow in checkedRows" :key="checkedRow.id"
      class="inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-slate-700">
      {{ checkedRow.name }}
    </span>
  </div>


  <table :key="state.boats">
    <thead>
      <tr>
        <th v-if="checkable" />
        <th>Name</th>
        <th>Category</th>
        <th>People</th>
        <th>Cox</th>
        <th />
      </tr>
    </thead>
    <tbody :key="state.boats">
      <tr v-for="boat in boatsPaginated" :key="boat._id">
        <TableCheckboxCell v-if="checkable" @checked="checked($event, boat)" />
        <td data-label="Name">
          {{ boat.name }}
        </td>
        <td data-label="Category">
          {{ boat.category }}
        </td>
        <td data-label="Total">
          {{ boat.total }}
        </td>
        <td data-label="Cox">
          {{ boat.cox }}
        </td>
        <td class="before:hidden lg:w-1 whitespace-nowrap">
          <BaseButtons type="justify-start lg:justify-end" no-wrap>
            <BaseButton color="danger" :icon="mdiTrashCan" small @click="deleteBoatModal(boat._id, boat.name)" />
          </BaseButtons>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800" v-if="numPages !== 1">
    <BaseLevel>
      <BaseButtons>
        <BaseButton v-for="page in pagesList" :key="page" :active="page === currentPage" :label="page + 1"
          :color="page === currentPage ? 'lightDark' : 'whiteDark'" small @click="currentPage = page" />
      </BaseButtons>
      <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
    </BaseLevel>
  </div>
</template>
