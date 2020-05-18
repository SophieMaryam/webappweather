import { getWeatherApi } from "../services/weatherService";
export const actions = {
  async updateWeather(
    context: { commit: (arg0: string, arg1: any) => void; },
    payload: { country: string; city: string }
  ) {
    await getWeatherApi(payload)
      .then((response) => {
        console.log(response.data);
        context.commit("UPDATE_WEATHER", response);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  },
};
