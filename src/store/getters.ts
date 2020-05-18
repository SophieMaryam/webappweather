export const getters = {
    weather: (state: { weather: any; }) => state.weather,
    dataReceived: (state: { dataReceived: boolean; }) => state.dataReceived,
    startLoading: (state: { startLoading: boolean; }) => state.startLoading,
    cityName: (state: { cityName: string; }) => state.cityName,
    temperature: (state: { temperature: any; }) => state.temperature
}