import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import CountryWeatherForecast from "../CountryWeatherForecast.vue";
import BootstrapVue from "bootstrap-vue";

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(BootstrapVue);


let wrapper: any;
let state: any;
let getters: any;
let store: any;

describe("WeatherApp on mount", () => {
  beforeEach(() => {
    state = {
      temperature: "10",
      dataReceived: true,
      cityName: "Amsterdam",
      weather: [],
    };
    getters = {
      temperature: (state: { temperature: string }) => state.temperature,
      dataReceived: (state: { dataReceived: boolean }) => state.dataReceived,
      cityName: (state: { cityName: string }) => state.cityName,
      weather: (state: { weather: object }) => state.weather,
    };
    store = new Vuex.Store({
      state,
      getters,
    });

    wrapper = shallowMount(CountryWeatherForecast, {
      store,
      localVue,
      computed: {
        getDailyTemperature: () => [],
        reformatTodaysDate: () => "Aug 21 2020"
      }
    });
  });
  it("renders temperature getter", () => {
    expect(wrapper.find(".current-temp").text()).toEqual("10°C");
  });
  it("renders cityName getter", () => {
    expect(wrapper.find(".cityName").text()).toEqual("Amsterdam");
  });

  it("expects reformatWeekdays to be called with a date", () => {
    const spyOnReformatWeekdays = jest.spyOn(wrapper.vm, "reformatWeekdays");
    wrapper.vm.reformatWeekdays("10/06/2020");
    expect(spyOnReformatWeekdays).toBeCalledWith("10/06/2020");
  });

  it("render reformatTodaysDate", () => {
    expect(wrapper.find(".reformatted-date").text()).toEqual("Aug 21 2020");
  });

  it("expects orderWeekdays to be called with an array of unordered weekdays", () => {
    const spyOnOrderWeekdays = jest.spyOn(wrapper.vm, "orderWeekdays");
    wrapper.vm.orderWeekdays(["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday"]);
    expect(spyOnOrderWeekdays).toBeCalledWith(["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday"]);
  });

  
  it("shows weather data and not loading screen when dataReceived is true", () => {
    expect(wrapper.vm.dataReceived).toBe(true);
    expect(wrapper.find(".loading").exists()).toBeFalsy()
    expect(wrapper.find(".weather-data").exists()).toBeTruthy();
  });
});
