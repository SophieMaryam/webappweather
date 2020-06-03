import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import WeatherApp from "../WeatherApp.vue";
import CountryWeatherForecast from "../../CountryWeatherForecast/CountryWeatherForecast.vue";
import WeatherInput from "../../WeatherInput/WeatherInput.vue";
import "@testing-library/jest-dom";

const localVue = createLocalVue();

localVue.use(Vuex);

let wrapper: any;
let state: any;
let getters: any;
let store: any;

describe("WeatherApp on mount", () => {
  beforeEach(() => {
    state = {
      startLoading: false
    };
    getters = {
      startLoading: (state: { startLoading: boolean }) => state.startLoading,
    };
    store = new Vuex.Store({
      state,
      getters
    });
    wrapper = shallowMount(WeatherApp, {
      store,
      localVue,
      computed: {
        isMobile: () => false
      }
    });
  });

  it("assigns `width` class", () => {
    expect(wrapper.classes()).toContain("width");
  });

  it("renders `store.getters.isLoading` as false", async () => {
    expect(wrapper.vm.isLoading).toBe(false);
  });

  it("shows only WeatherInput component on mobile screen", () => {
    expect(wrapper.vm.isLoading).toBe(false);
    expect(wrapper.vm.isMobile).toBe(false);
    expect(wrapper.findComponent(WeatherInput).element).toBeVisible();
  });

  it("does not show CountryWeatherForecast component", () => {
    expect(wrapper.vm.isLoading).toBe(false);
    expect(
      wrapper.findComponent(CountryWeatherForecast).element
    ).not.toBeVisible();
  });
});

describe("WeatherApp", () => {
  beforeEach(() => {
    state = {
      startLoading: true
    };
    getters = {
      startLoading: (state: { startLoading: boolean }) => state.startLoading,
    };
    store = new Vuex.Store({
      state,
      getters
    });

    wrapper = shallowMount(WeatherApp, {
      store,
      localVue,
      computed: {
        isMobile: () => false
      }
    });
  });

  it("assigns only `centered` class", () => {
    expect(wrapper.classes()).toContain("centered");
  });

  it("renders `store.getters.isLoading` as false", async () => {
    expect(wrapper.vm.isLoading).toBe(true);
  });

  it("shows Weather Input and CountryWeatherForecast on mobile screens", () => {
    expect(wrapper.vm.isLoading).toBe(true);
    expect(wrapper.vm.isMobile).toBe(false);
    expect(wrapper.findComponent(WeatherInput).element).toBeVisible();
    expect(
      wrapper.findComponent(CountryWeatherForecast).element
    ).toBeVisible();
  });

  it("shows only CountryWeatherForecast component on desktop", () => {
    wrapper.vm._computedWatchers.isMobile.value = true
    expect(wrapper.vm.isLoading).toBe(true);
    expect(wrapper.vm.isMobile).toBe(true);
    expect(
      wrapper.findComponent(WeatherInput).element
    ).not.toBeVisible();
    expect(
      wrapper.findComponent(CountryWeatherForecast).element
    ).toBeVisible();
  });
});