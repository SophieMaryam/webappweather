export const mutations = {
  UPDATE_WEATHER(
    state: {
      weather: object;
      temperature: string | undefined;
      cityName: string;
      dataReceived: boolean;
      startLoading: boolean;
    },
    payload: { data: { temp: string }[]; city_name: string }
  ) {
    state.weather = payload.data;
    state.temperature = payload.data[0].temp;
    state.cityName = payload.city_name;
    state.dataReceived = true;
    state.startLoading = true;
  }
};
