import Vue from "vue";
import Vuex from "vuex";
import { getWeatherApi } from "../services/weatherService";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    weather: {},
    dataReceived: false,
    startLoading: false,
    temperature: "undefined"
  },
  mutations: {
    UPDATE_WEATHER(state, payload) {
      state.startLoading = true;
      getWeatherApi(payload)
        .then(response => {
          state.weather = response.data;
          state.dataReceived = true;
          state.temperature = response.data[0].temp
        })
        .catch(error => {
          state.startLoading = false;
          console.log("Error", error);
          state.dataReceived = false;
        });
    }
  },
  getters: {
    weather: state => state.weather,
    dataReceived: state => state.dataReceived,
    startLoading: state => state.startLoading
  },
  actions: {
    updateWeather(context, payload: object) {
      context.commit("UPDATE_WEATHER", payload);
    }
  }
});
