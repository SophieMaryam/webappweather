export const weatherInputMock = Object.freeze({
  state: {},
  actions: {
    updateWeather: jest.fn().mockName("updateWeather"),
  }
});