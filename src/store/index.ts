import Vue from "vue";
import Vuex from "vuex";
import { getWeatherApi } from "../services/weatherService";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    weather: {},
    dataReceived: false,
    startLoading: false,
    temperature: "undefined",
    cityName: ""
  },
  mutations: {
    UPDATE_WEATHER(state, payload) {
      state.weather = payload.data;
      state.temperature = payload.data[0].temp;
      state.cityName = payload.city_name;
      state.dataReceived = true;
      state.startLoading = true;
    }
  },
  getters: {
    weather: state => state.weather,
    dataReceived: state => state.dataReceived,
    startLoading: state => state.startLoading,
    cityName: state => state.cityName,
    temperature: state => state.temperature
  },
  actions: {
    async updateWeather({commit}, payload: { country: string; city: string; }) {
      await getWeatherApi(payload)
        .then(response => {
          console.log(response.data)
          commit("UPDATE_WEATHER", response)
        })
        .catch(error => {
          console.log("Error", error);
        }); 
    }
  }
});
