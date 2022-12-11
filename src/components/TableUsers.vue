<script setup>
import { computed, reactive, onMounted, watch, ref } from "vue";
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
  users: [],
  delete: {
    _id: "",
    name: ""
  }
});

axios.defaults.baseURL = mainStore.api;
axios.defaults.headers.common['Authorization'] = mainStore.access_token;

const loadUsers = async () => { state.users = await axios.get("/users/").then((res) => res.data) }


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
  loadUsers();
})

watch(rld, (newValue, oldValue) => {
  loadUsers()
}, {
  deep: true,
})






const isModalActive = ref(false);

const isModalDangerActive = ref(false);

const perPage = ref(5);

const currentPage = ref(0);

const usersPaginated = computed(() =>
  state.users.slice(
    perPage.value * currentPage.value,
    perPage.value * (currentPage.value + 1)
  )
);

const numPages = computed(() => Math.ceil(state.users.length / perPage.value));

const currentPageHuman = computed(() => currentPage.value + 1);

const pagesList = computed(() => {
  const pagesList = [];

  for (let i = 0; i < numPages.value; i++) {
    pagesList.push(i);
  }

  return pagesList;
});

</script>

<template>
  <CardBoxModal v-model="isModalActive" title="Sample modal">
    <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
    <p>This is sample modal</p>
  </CardBoxModal>

  <CardBoxModal v-model="isModalDangerActive" title="Please confirm" button="danger" has-cancel>
    <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
    <p>This is sample modal</p>
  </CardBoxModal>

  <table>
    <thead>
      <tr>
        <th />
        <th>Name</th>
        <th>E-Mail</th>
        <th>E-Mail verified</th>
        <th>E-Mail accepted</th>
        <th>Active</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in usersPaginated" :key="user.id">
        <td class="border-b-0 lg:w-6 before:hidden">
          <UserAvatar :avatar="user.avatar" class="w-24 h-24 mx-auto lg:w-6 lg:h-6" />
        </td>
        <td data-label="Name">
          {{ user.firstname }} {{ user.lastname }}
        </td>
        <td data-label="E-Mail">
          {{ user.email }}
        </td>
        <td data-label="City">
          {{ user.is_email_verified }}
        </td>
        <td data-label="Created">
          <BaseButtons type="justify-start lg:justify-start" no-wrap>
            <BaseButton color="info" :icon="mdiEye" small @click="isModalActive = true" />
            <FormCheckRadio v-model="userSwitchVal" name="notifications-switch" type="switch" label="Notifications"
              :input-value="true" />
          </BaseButtons>
        </td>
        <td data-label="Active">
          <BaseButtons type="justify-start lg:justify-start" no-wrap>
            <BaseButton color="info" :icon="mdiEye" small @click="isModalActive = true" />
          </BaseButtons>
        </td>
        <td data-label="Delete">
          <BaseButton color="danger" :icon="mdiTrashCan" small @click="isModalDangerActive = true" />
        </td>
      </tr>
    </tbody>
  </table>
  <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
    <BaseLevel>
      <BaseButtons>
        <BaseButton v-for="page in pagesList" :key="page" :active="page === currentPage" :label="page + 1"
          :color="page === currentPage ? 'lightDark' : 'whiteDark'" small @click="currentPage = page" />
      </BaseButtons>
      <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
    </BaseLevel>
  </div>
</template>
