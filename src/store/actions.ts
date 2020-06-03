import { getWeatherApi } from '@/services/weatherService';
import axios from 'axios';
export const actions = {
  async updateWeather(
    context: { commit: (arg0: string, arg1: string) => void },
    payload: { countrySelected: string; city: string }
  ) {
    const { countrySelected, city } = payload;
    const CURRENT_WEATHER = `https://api.weatherbit.io/v2.0/forecast/daily/current?city=${city},${countrySelected}&key=c9d0f8edb16446578c9047b2eda26642&days=7`;
    await axios.get(CURRENT_WEATHER)
    // await getWeatherApi(payload)
      .then((response) => {
        context.commit("UPDATE_WEATHER", response.data);
        context.commit("UPDATE_TEMPERATURE", response.data);
        context.commit("UPDATE_CITY_NAME", response.data.city_name);
      })
      .catch((error) => {
        console.log(error);
        throw Error("API Error occurred.")
      });
  },
};
