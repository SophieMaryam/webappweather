export const getters = {
  weather: (state: { weather: object }) => state.weather,
  dataReceived: (state: { dataReceived: boolean }) => state.dataReceived,
  startLoading: (state: { startLoading: boolean }) => state.startLoading,
  cityName: (state: { cityName: string }) => state.cityName,
  temperature: (state: { temperature: string | undefined }) => state.temperature
};
