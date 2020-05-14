import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import WeatherApp from "../WeatherApp.vue";
import CountryWeatherForecast from "../../CountryWeatherForecast/CountryWeatherForecast.vue";
import WeatherInput from "../../WeatherInput/WeatherInput.vue";
import "@testing-library/jest-dom";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("WeatherApp on mount", () => {
  let state: any;
  let getters: any;
  let store: any;
  let wrapper: any;
  let mutations: any;
  let actions: any;

  beforeEach(() => {
    state = {
      startLoading: false
    };
    getters = {
      startLoading: (state: { startLoading: boolean }) => state.startLoading,
    };
    store = new Vuex.Store({
      state,
      getters,
      mutations,
      actions
    });
    wrapper = shallowMount(WeatherApp, {
      store,
      localVue
    });
  });

  it("assigns `width` class", () => {
    expect(wrapper.classes()).toContain("width");
  });

  it("renders `store.getters.isLoading` as false", async () => {
    expect(wrapper.vm.isLoading).toBe(false);
  });

  it("shows WeatherIput components", () => {
    expect(wrapper.vm.isLoading).toBe(false);
    expect(wrapper.findComponent(WeatherInput).element).toBeVisible();
  });

  it("does not show CountryWeatherForecast component", () => {
    expect(
      wrapper.findComponent(CountryWeatherForecast).element
    ).not.toBeVisible();
  });



  // it("renders `store.getters.isLoading` as true", () => {
  //   // const cmp = shallowMount(WeatherApp, {
  //   //   computed: {
  //   //     isLoading: () => true
  //   //   }
  //   // })
  //   expect(mutations.UPDATE_WEATHER).toHaveBeenCalled();
  //   // expect(
  //   //   wrapper.findComponent(CountryWeatherForecast).element
  //   // ).toBeVisible();
  // });
});
