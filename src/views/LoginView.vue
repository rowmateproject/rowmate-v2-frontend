<script setup>
import { reactive } from "vue";
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
import axios from "axios";

const mainStore = useMainStore();

const form = reactive({
  login: "",
  pass: "",
  remember: true,
});

const errors = reactive({
  errors: []
})
const router = useRouter();

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
        <FormField label="E-Mail" help="Please enter your E-Mail-Address">
          <FormControl v-model="form.login" :icon="mdiAccount" name="login" autocomplete="username" />
        </FormField>

        <FormField label="Password" help="Please enter your password">
          <FormControl v-model="form.pass" :icon="mdiAsterisk" type="password" name="password" :class="''"
            autocomplete="current-password" />
        </FormField>

        <FormCheckRadio v-model="form.remember" name="remember" label="Remember" :input-value="true" />

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
