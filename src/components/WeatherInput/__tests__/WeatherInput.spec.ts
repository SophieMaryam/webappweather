import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import WeatherInput from "../WeatherInput.vue"
import BootstrapVue from 'bootstrap-vue';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(BootstrapVue)
localVue.component("font-awesome-icon", FontAwesomeIcon)
library.add(faSearch, faCloudSun);

describe("WeatherApp on mount", () => {
  let state: any;
  let store: any;
  let actions: any;
  let wrapper: any;

  beforeEach(() => {
    actions = {
      updateWeather: jest.fn()
    }
    state = {
      startLoading: false
    };
    store = new Vuex.Store({
      state,
      actions
    });
    wrapper = shallowMount(WeatherInput, {
      store,
      localVue,
      data() {
        return {
          city: '',
          countrySelected: 'AF'
        }
      }
    });
  });

  it("dispatches a actions when the form is submitted", async () => {
    wrapper.find(".form-content").trigger("submit")
    await wrapper.vm.$nextTick()    

    expect(actions.updateWeather).toHaveBeenCalledWith(
      {},
      { country: "NL", city: "Utrecht" }
    )
  })

  // it('renders a message and responds correctly to user input', () => {
  
  //   // see if the message renders
  //   expect(wrapper.find('.countrySelected').text()).toEqual('AF')
  // });


});
