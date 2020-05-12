<template>
  <div class="weather-forecast">
    <div v-if="!checkDataReceived" class="loader"></div>
    <div v-else>
      <p class="text-uppercase font-weight-bold">{{ reformatTodaysDate }}</p>
      <h1 class="current-temp text-white font-weight-bold mt-4 mb-5">
        {{ temperature }}<sup class="font-size">&deg;C</sup>
      </h1>
      <ul class="weekdays">
        <li
          v-for="weather in getDailyTemperature"
          :key="weather.day"
          class="weekday text-black"
        >
          {{ weather.weekday }}
          <span class="text-white daily-temp"
            >{{ weather.temp }}<sup class="symbol">&deg;C</sup></span
          >
          <img
            class="image"
            :src="
              'https://www.weatherbit.io/static/img/icons/' +
                weather.icon +
                '.png'
            "
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CountryWeatherForecast",
  data() {
    return {
      days: {
        Sunday: 7,
        Monday: 1,
        Tuesday: 2,
        Wednesday: 3,
        Thursday: 4,
        Friday: 5,
        Saturday: 6,
      },
    };
  },
  computed: {
    temperature() {
      return this.$store.state.temperature;
    },
    checkDataReceived(): boolean {
      return this.$store.state.dataReceived;
    },
    reformatTodaysDate(): string {
      const date = new Date(this.$store.state.weather[0].valid_date);
      const month = date.toLocaleString("default", { month: "long" });
      const day = date.getDate();
      const year = date.getFullYear();
      return month + " " + day + " " + year;
    },
    getDailyTemperature() {
      const arr: Array<{ temp: number; weekday: string; icon: string }> = [];
      const countryWeather = this.$store.state.weather;
      countryWeather.map((day: any) => {
        arr.push({
          temp: day.temp,
          weekday: this.reformatWeekdays(day.valid_date),
          icon: day.weather.icon,
        });
      });
      this.orderWeekdays(arr);
      return arr;
    },
  },
  methods: {
    reformatWeekdays(date: string): string {
      const reformatedDate = new Date(date);
      const keys = Object.keys(this.days);
      const dayName: string = keys[reformatedDate.getDay()];
      return dayName;
    },
    orderWeekdays(arr: Array<{ temp: number; weekday: string }>) {
      const days: any = this.days;
      arr.sort((a: any, b: any) => {
        return days[a.weekday] - days[b.weekday];
      });
    },
  },
});
</script>

<style scoped src="./CountryWeatherForecast.css"></style>
