import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import WeatherInput from "../WeatherInput.vue";
import BootstrapVue from "bootstrap-vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { weatherInputMock } from "./__mocks__/WeatherInput";
const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(BootstrapVue);
localVue.component("font-awesome-icon", FontAwesomeIcon);
library.add(faSearch, faCloudSun);

describe("WeatherInput", () => {
  let store: any;
  let wrapper: any;


  beforeEach(() => {
    store = new Vuex.Store(weatherInputMock);

    wrapper = shallowMount(WeatherInput, {
      store,
      localVue,
      data() {
        return {
          city: "",
          countrySelected: "",
        };
      },
    });
  });

  it("sets city and countrySelected data properties", () => {
    wrapper.setData({ city: "Utrecht", countrySelected: "NL" });
    expect(wrapper.vm.city).toBe("Utrecht");
    expect(wrapper.vm.countrySelected).toBe("NL");
  });

  it("triggers the onSubmit method with args (city and countrySelected) when form is submitted", () => {
    wrapper.find("#form").trigger("submit.prevent");
    const spyOnSubmit = jest.spyOn(wrapper.vm, "onSubmit");
    wrapper.vm.onSubmit({ city: "Amsterdam", countrySelected: "NL" });
    expect(spyOnSubmit).toBeCalledWith({
      city: "Amsterdam",
      countrySelected: "NL",
    });
  });

  it("sets b-input as Amsterdam", () => {
    const city = wrapper.find(".city");
    city.value = "Amsterdam";
    expect(city.value).toBe("Amsterdam");
  });

  it("sets b-form-select as NL", () => {
    const countrySelected = wrapper.find(".countrySelected");
    countrySelected.value = "NL";
    expect(countrySelected.value).toBe("NL");
  });

  it("expects sortCountryCodes method to be called on created", () => {
    const spyOnSortCountryCodes = jest.spyOn(wrapper.vm, "sortCountryCodes");
    wrapper.vm.sortCountryCodes();
    expect(spyOnSortCountryCodes).toHaveBeenCalled();
  });

  it("calls store action 'updateWeather' when form is submitted", () => {
    wrapper.find("#form").trigger("submit.prevent");
    expect(weatherInputMock.actions.updateWeather).toHaveBeenCalled();
  });

  it("dispatches an action when a button is clicked", async () => {
    store.dispatch = jest.fn()
    jest.spyOn(wrapper.vm, "onSubmit");
    wrapper.vm.onSubmit({ city: "Amsterdam", countrySelected: "NL" });
    expect(store.dispatch).toBeCalled();
    // expect(store.dispatch).toHaveBeenCalledWith('updateWeather', {
    //   city: "Amsterdam",
    //   countrySelected: "NL"
    // });
  });
});
