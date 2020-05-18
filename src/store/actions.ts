import { getWeatherApi } from "../services/weatherService";
export const actions = {
  async updateWeather(
    context: { commit: (arg0: string, arg1: string) => void },
    payload: { country: string; city: string }
  ) {
    await getWeatherApi(payload)
      .then(res => {
        console.log(res.data);
        context.commit("UPDATE_WEATHER", res);
      })
      .catch(error => {
        console.log("Error", error);
      });
  }
};
