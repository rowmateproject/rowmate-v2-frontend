<script setup>
import { reactive, watchEffect, watch } from "vue";
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
import SectionTitle from "@/components/SectionTitle.vue";

import axios from "axios";

const mainStore = useMainStore();
mainStore.fetchConfig()

const avatar = reactive({
  is_circle: true,
  topType: "NoHair",
  accessoriesType: "Blank",
  hairColor: "Black",
  facialHairType: "Blank",
  clotheType: "BlazerShirt",
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
  var loginData = new FormData();
  loginData.append("username", form.login)
  loginData.append("password", form.pass)

  axios.post(`${mainStore.api}/auth/jwt/login`, loginData).then(res => {
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
      <CardBox :class="cardClass" is-form @submit.prevent="submit">
        <NotificationBar v-for="error, id in errors.errors" v-on:deleted="errors.errors.splice(id, 1)"
          :key="errors.errors" :color="'danger'">{{
              error
          }}
        </NotificationBar>
        <h2 class="text-center text-3xl">Register</h2>
        <div class="flex items-center justify-center w-full">
          <UserAvatar :avatar="avatar" />

        </div>
        <div class="flex items-center justify-center w-full p-4">
          <BaseButton type="submit" color="info" label="Change Avatar" />
        </div>


        <BaseDivider />
        <FormField>
          <FormField label="Vorname" help="Please enter your first name">
            <FormControl v-model="form.firstname" :icon="mdiAccount" name="login" autocomplete="firstname" />
          </FormField>
          <FormField label="Nachname" help="Please enter your last name">
            <FormControl v-model="form.lastname" :icon="mdiAccount" name="login" autocomplete="lastname" />
          </FormField>
        </FormField>

        <FormField label="E-Mail" help="Please enter your E-Mail-Address">
          <FormControl v-model="form.email" :icon="mdiAccount" name="login" autocomplete="username" />
        </FormField>

        <FormField label="Password" help="Please enter your password">
          <FormControl v-model="form.password" :icon="mdiAsterisk" type="password" name="password" :class="''"
            autocomplete="current-password" />
        </FormField>

        <FormField label="Confirm Password" help="Please enter your password">
          <FormControl v-model="form.password2" :icon="mdiAsterisk" type="password" name="password" :class="''"
            autocomplete="current-password" />
        </FormField>


        <FormField>
          <FormField label="Year" help="Please enter your year of birth">
            <FormControl v-model="form.yob" :type="'number'" :icon="mdiAccount" name="login" autocomplete="username" />
          </FormField>
          <FormField label="Language">
            <FormControl v-model="form.lang" :options="mainStore.config.langs" />
          </FormField>
        </FormField>

        <template #footer>
          <BaseButtons>
            <BaseButton type="submit" color="info" label="Login" />
            <BaseButton to="/dashboard" color="info" outline label="Back" />
          </BaseButtons>
        </template>
      </CardBox>

    </SectionFullScreen>
  </LayoutGuest>
</template>
