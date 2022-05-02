import axios from "axios";
import { ref } from "vue";

export default {
  state: {
    status: undefined,
    list: {},
  },

  getters: {
    getStatus(state) {
      return state.status;
    },

    getList(state) {
      return state.list;
    },
  },

  mutations: {
    UPDATE_STATUS(state, newStatus: boolean) {
      state.status = newStatus;
    },

    ADD_LIST(state, newList: []): void {
      state.list = newList;
    },
  },

  actions: {
    async initNews({ commit }, fields: object) {
      const convert = new Promise((resolve) => {
        const converted = ref("");

        for (let [key, value] of Object.entries(fields)) {
          converted.value += `${key}=${value}&`;
        }

        resolve(converted.value.substring(0, converted.value.length - 1));
      });
      const result = await convert;

      await axios
        .get(
          `https://newsdata.io/api/1/news?apikey=pub_69775c4f96bfdb95fa522484c079910d9c1d&${result}`
        )
        .then((response) => {
          commit("ADD_LIST", response.data.results);
        })
        .catch((error) => {
          commit("UPDATE_STATUS", error.response.status);
        });
    },
  },
};
