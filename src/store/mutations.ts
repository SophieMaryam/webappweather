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
  UPDATE_TEMPERATURE(state: { temperature: any }, payload: string) {
    state.temperature = payload;
  },
  UPDATE_CITY_NAME(state: { cityName: string }, payload: string) {
    state.cityName = payload;
  }
};
