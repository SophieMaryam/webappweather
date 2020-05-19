 import { mutations } from '../mutations'

describe('mutations', () => {
  it('UPDATE_TEMPERATURE sets state.temperature to data', () => {
    const data = [{ temp: "27" }];
    const state = {
        temperature: ""
    }
    mutations.UPDATE_TEMPERATURE(state, { data })
    expect(state.temperature).toBe(data[0].temp)
  })

  it('UPDATE_CITY_NAME sets state.cityName to city_name', () => {
    const city_name = "Cairo";
    const state = {
        cityName: ""
    }
    mutations.UPDATE_CITY_NAME(state, city_name)
    expect(state.cityName).toBe(city_name)
  })

  it('UPDATE_WEATHER sets state.weater to cityName', () => {
    const data = [{id:1}, {id:2}]
    const dataReceived = true;
    const startLoading = true;
    const state = {
        weather: {},
        dataReceived: false,
        startLoading: false
    }
    mutations.UPDATE_WEATHER(state, { data })
    expect(state.weather).toBe(data)
    expect(state.dataReceived).toBe(dataReceived)
    expect(state.startLoading).toBe(startLoading)
  })
});

// UPDATE_WEATHER(
//     state: {
//       weather: object;
//       dataReceived: boolean;
//       startLoading: boolean;
//     },
//     payload: { data: { temp: string }[] }
//   ) {
//     state.weather = payload.data;
//     state.dataReceived = true;
//     state.startLoading = true;
//   },
