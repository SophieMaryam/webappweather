import axios from "axios";
import { API_KEY } from "@/common/constant";

export function getWeatherApi(payload: { country: string; city: string }) {
  const { country, city } = payload;
  const CURRENT_WEATHER = `https://api.weatherbit.io/v2.0/forecast/daily/current?city=${city},${country}&key=${API_KEY}&days=7`;
  return axios
    .get(CURRENT_WEATHER)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
}
