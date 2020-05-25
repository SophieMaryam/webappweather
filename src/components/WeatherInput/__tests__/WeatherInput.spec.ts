import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import WeatherInput from "../WeatherInput.vue"
import BootstrapVue from 'bootstrap-vue';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { weatherInputMock } from './__mocks__/WeatherInput' 
const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(BootstrapVue)
localVue.component("font-awesome-icon", FontAwesomeIcon)
library.add(faSearch, faCloudSun);

describe("WeatherInput", () => {
  let store: any;
  // let actions: any;
  let wrapper: any;

  beforeEach(() => {
    // actions = {
    //   updateWeather: jest.fn(() => Promise.resolve())
    // };
    store = new Vuex.Store(weatherInputMock);
   
    wrapper = shallowMount(WeatherInput, {
      store,
      localVue,
      data() {
        return {
          city: "",
          countrySelected: ""
        }
      }
    });
  });

  it("sets city and countrySelected data", () => {
    wrapper.setData({city: "Utrecht", countrySelected: "NL"})
    expect(wrapper.vm.city).toBe("Utrecht")
    expect(wrapper.vm.countrySelected).toBe("NL")

  });

  it('form submit triggers the onSubmit method with city and country data', () => {
    const form = wrapper.find("#form");
    form.trigger('submit.prevent');
    const spyOnSubmit = jest.spyOn(wrapper.vm, 'onSubmit');
    wrapper.vm.onSubmit({city: "Amsterdam", countrySelected: "NL"});
    expect(spyOnSubmit).toBeCalledWith({ city: "Amsterdam", countrySelected: "NL"});
  });

  it('sets b-input as Amsterdam', () => {
    const cityInput = wrapper.find('.city')
    cityInput.value = "Amsterdam"
    expect(cityInput.value).toBe("Amsterdam")
  });

  it('sets b-form-select as NL', () => {
    const countrySelected = wrapper.find('.countrySelected')
    countrySelected.value = "NL"
    expect(countrySelected.value).toBe("NL")
  });

  it('expect sortCountryCodes method to be called on created', () => {
    const spyOnSortCountryCodes = jest.spyOn(wrapper.vm, 'sortCountryCodes');
    wrapper.vm.sortCountryCodes();
    expect(spyOnSortCountryCodes).toHaveBeenCalled();
  });

  it("dispatch an action when form is submitted", async () => {
    expect(weatherInputMock.actions.updateWeather).toHaveBeenCalled()
  })
});
