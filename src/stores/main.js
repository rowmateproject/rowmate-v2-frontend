import { defineStore } from "pinia";
import axios from "axios";

export const useMainStore = defineStore("main", {
  state: () => ({
    api: "http://127.0.0.1:8000",
    access_token: null,
    lang: "de-CH",
    /* User */
    user: {
      firstname: "Loading",
      avatar: {}
    },

    /* Field focus with ctrl+k (to register only once) */
    isFieldFocusRegistered: false,

    config: {},
    clients: [],
    history: [],
  }),
  actions: {
    setUser(payload) {
      if (payload) {
        this.user = payload;
      }
    },
    fetchConfig() {
      axios
        .get(`${this.api}/config/`)
        .then((r) => {
          if (r.data) {
            this.config = r.data;
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    setAccessToken(token) {
      if (token) {
        this.access_token = token;
      }
    },
    fetch(sampleDataKey) {
      axios
        .get(`data-sources/${sampleDataKey}.json`)
        .then((r) => {
          if (r.data && r.data.data) {
            this[sampleDataKey] = r.data.data;
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  }, persist: true
});
