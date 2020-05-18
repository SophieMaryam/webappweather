export const mutations = {
    UPDATE_WEATHER(state: { weather: any; temperature: any; cityName: string; dataReceived: boolean; startLoading: boolean; }, payload: { data: { temp: any; }[]; city_name: any; }) {
        state.weather = payload.data;
        state.temperature = payload.data[0].temp;
        state.cityName = payload.city_name;
        state.dataReceived = true;
        state.startLoading = true;
      }
}