<script setup>
import SectionFullScreen from "@/components/SectionFullScreen.vue";
import { reactive } from "vue";
import CardBox from "@/components/CardBox.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import LayoutGuest from "@/layouts/LayoutGuest.vue";
import { useRoute } from 'vue-router'
import axios from "axios";
import { useMainStore } from "@/stores/main";

const mainStore = useMainStore();
const route = useRoute()

const alert = reactive({
  "color": null,
  "title": null,
  "details": null
})
if (route.query.verification !== null) {
  axios.post(`${mainStore.api}/auth/verify`, { "token": route.query.verification }).then(res => {
    alert.color = "success"
    alert.title = "Email confirmed successfully"
    alert.details = `Dear ${res.data.firstname} ${res.data.lastname}, Your E-Mail-Address was confirmed successfully. You can now log-in to your account`

  }).catch(() => {
    alert.color = "danger"
    alert.title = "Verification failed"
    alert.details = "Your E-Mail-Address was not confirmed. You might need to request a new verification link."
  })
}

</script>

<template>
  <LayoutGuest>
    <SectionFullScreen v-slot="{ cardClass }" bg="pinkRed">
      <CardBox :class="cardClass" v-if="alert.color">
        <div class="space-y-3">
          <h1 class="text-2xl">{{ alert.title }}</h1>

          <p>{{ alert.details }}</p>
        </div>

        <template #footer>
          <BaseButtons>
            <BaseButton label="Done" to="/login" :color="alert.color" />
          </BaseButtons>
        </template>
      </CardBox>
      <CardBox :class="cardClass" v-else>
        <div class="space-y-3">
          <h1 class="text-2xl">Sending verification</h1>

          <p>Please wait</p>
        </div>
      </CardBox>
    </SectionFullScreen>
  </LayoutGuest>
</template>
