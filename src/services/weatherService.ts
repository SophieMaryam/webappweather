// import axios from "axios";
// // import { API_KEY } from "@/common/constant";

// export function getWeatherApi(payload: { countrySelected: string; city: string }) {
//   const { countrySelected, city } = payload;
//   const CURRENT_WEATHER = `https://api.weatherbit.io/v2.0/forecast/daily/current?city=${city},${countrySelected}&key=c9d0f8edb16446578c9047b2eda26642&days=7`;
//   return axios
//     .get(CURRENT_WEATHER)
//     .then(response => {
//       return response.data;
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }
