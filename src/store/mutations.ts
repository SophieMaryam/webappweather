export const mutations = {
  UPDATE_WEATHER(
    state: {
      weather: object;
      dataReceived: boolean;
      startLoading: boolean;
    },
    payload: object
  ) {
    state.weather = payload;
    state.dataReceived = true;
    state.startLoading = true;
  },
  UPDATE_TEMPERATURE(
    state: { temperature: string | undefined },
    payload: { data: { temp: string }[] }
  ) {
    state.temperature = payload.data[0].temp;
  },
  UPDATE_CITY_NAME(state: { cityName: string }, payload: string) {
    state.cityName = payload;
  },
};
