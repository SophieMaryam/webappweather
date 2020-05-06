import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    weather: {},
    dataReceived: false,
    startLoading: false,
  },
  mutations: {
  },
  getters: {
    weather: state => state.weather,
    dataReceived: state => state.dataReceived,
    startLoading: state => state.startLoading
    
  },
  actions: {
  }
});
