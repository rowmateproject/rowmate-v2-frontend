<script setup>
import { reactive, watchEffect, ref } from "vue";
import { useMainStore } from "@/stores/main";
import { useRouter } from "vue-router";
import { mdiAccount, mdiAsterisk, mdiAxisLock } from "@mdi/js";
import SectionFullScreen from "@/components/SectionFullScreen.vue";
import CardBox from "@/components/CardBox.vue";
import FormCheckRadio from "@/components/FormCheckRadio.vue";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import NotificationBar from "@/components/NotificationBar.vue";
import LayoutGuest from "@/layouts/LayoutGuest.vue";
import UserAvatar from "@/components/UserAvatar.vue";
import BaseDivider from "@/components/BaseDivider.vue";
import EditAvatar from "@/components/EditAvatar.vue";

import axios from "axios";

const mainStore = useMainStore();
mainStore.fetchConfig()

const isModalActive = ref(false);

const avatar = reactive({
  is_circle: true,
  topType: "NoHair",
  accessoriesType: "Blank",
  hairColor: "Black",
  facialHairType: "Blank",
  clotheType: "Hoodie",
  eyeType: "Default",
  eyebrowType: "Default",
  mouthType: "Default",
  skinColor: "Light",
  topColor: "Black",
  graphicType: "Deer",
  facialHairColor: "Black",
  clotheColor: "Black",
  circleColor: "6fb8e0"
})
const form = reactive({
  email: "",
  password: "",
  password2: "",
  firstname: "",
  lastname: "",
  yob: 1970,
  lang: mainStore.lang
});

const errors = reactive({
  errors: []
})
const router = useRouter();


watchEffect(() => {
  mainStore.$patch({ lang: form.lang })
})

const submit = () => {
  var registerData = {
    email: form.email,
    avatar: avatar,
    password: form.password,
    yob: form.yob,
    lang: form.lang,
    firstname: form.firstname,
    lastname: form.lastname,
    is_active: false,
    is_superuser: false,
    is_verified: false,
    is_accepted: false,
    is_email_verified: false,
    roles: [
      "User"
    ]
  }

  axios.post(`${mainStore.api}/auth/register`, registerData).then(res => {
    mainStore.setAccessToken("Bearer " + res.data.access_token);
    axios.defaults.baseURL = mainStore.api;
    axios.defaults.headers.common['Authorization'] = "Bearer " + res.data.access_token;
    axios.get(`/users/me`).then(user => {
      mainStore.setUser(user.data)
    }).then(function () {
      router.push("/dashboard");
    })
  }).catch(err => {
    if (err.response) {

      if (err.response.status == 422) {
        errors.errors.push("Field validation error")
      } else if (err.response.data.detail == "LOGIN_BAD_CREDENTIALS") {
        errors.errors.push("Wrong login")
      } else if (err.response.data.detail = "LOGIN_USER_NOT_VERIFIED") {
        errors.errors.push("User is not verified. Make sure that you have verified your E-Mail-Address and that the organisation has accepted your Account.")
      }
      errors.errors = errors.errors.slice(-3)
    }

  })

};
</script>

<template>
  <LayoutGuest>
    <SectionFullScreen v-slot="{ cardClass }" bg="purplePink">
      <EditAvatar v-model="isModalActive" title="Sample modal" :avatar="avatar" />

      <CardBox :class="cardClass" is-form @submit.prevent="submit">
        <NotificationBar v-for="error, id in errors.errors" v-on:deleted="errors.errors.splice(id, 1)"
          :key="errors.errors" :color="'danger'">{{
            error
          }}
        </NotificationBar>
        <h2 class="text-center text-3xl">{{ $t('account.register') }}</h2>
        <div class="flex items-center justify-center w-full">
          <UserAvatar :avatar="avatar" />

        </div>
        <div class="flex items-center justify-center w-full p-4">
          <BaseButton color="info" label="Change Avatar" @click="isModalActive = true"
            v-on:close="isModalActive = false" />
        </div>


        <BaseDivider />
        <FormField>
          <FormField :label="$t('account.firstName')" help="Please enter your first name">
            <FormControl v-model="form.firstname" :icon="mdiAccount" name="login" autocomplete="firstname" />
          </FormField>
          <FormField :label="$t('account.lastName')" help="Please enter your last name">
            <FormControl v-model="form.lastname" :icon="mdiAccount" name="login" autocomplete="lastname" />
          </FormField>
        </FormField>

        <FormField :label="$t('account.email')" help="Please enter your E-Mail-Address">
          <FormControl v-model="form.email" :icon="mdiAccount" name="login" autocomplete="username" />
        </FormField>

        <FormField :label="$t('account.password')" help="Please enter your password">
          <FormControl v-model="form.password" :icon="mdiAsterisk" type="password" name="password" :class="''"
            autocomplete="current-password" />
        </FormField>

        <FormField :label="$t('account.confirmPassword')" help="Please enter your password">
          <FormControl v-model="form.password2" :icon="mdiAsterisk" type="password" name="password" :class="''"
            autocomplete="current-password" />
        </FormField>


        <FormField>
          <FormField :label="$t('account.yob')" help="Please enter your year of birth">
            <FormControl v-model="form.yob" :type="'number'" :icon="mdiAccount" name="login" autocomplete="username" />
          </FormField>
          <FormField :label="$t('account.language')">
            <FormControl v-model="form.lang" :options="mainStore.config.langs" />
          </FormField>
        </FormField>

        <template #footer>
          <BaseButtons>
            <BaseButton type="submit" color="info" label="Register" />
            <BaseButton to="/dashboard" color="info" outline :label="$t('account.register')" />
          </BaseButtons>
        </template>
      </CardBox>

    </SectionFullScreen>
  </LayoutGuest>
</template>
