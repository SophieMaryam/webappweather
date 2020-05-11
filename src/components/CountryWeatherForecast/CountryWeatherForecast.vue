<template>
  <div class="weather-forecast text-center justify-content-center col-md-12">
    <div v-if="!checkDataReceived" class="loader"></div>
    <div v-else>
      <p class="text-uppercase font-weight-bold">{{ reformatTodaysDate }}</p>
      <h1 class="text-white display-1 font-weight-bold mt-5 mb-5">
        {{ temperature }}&deg;C
      </h1>
      <div class="row">
        <div class="weekdays">
          <ul>
            <li
              v-for="weather in getDailyTemperature"
              :key="weather.day"
              class="weekday text-black"
            >
              {{ weather.weekday }}
              <span class="text-white text-center" style="font-size: 40px;"
                >{{ weather.temp }}<span class="symbol">&deg;C</span></span
              >
            </li>
          </ul>
        </div>
      </div>
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
        Saturday: 6
      }
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
      const arr: Array<{ temp: number; weekday: string }> = [];
      const countryWeather = this.$store.state.weather;
      countryWeather.map((day: any) => {
        arr.push({
          temp: day.temp,
          weekday: this.reformatWeekdays(day.valid_date),
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
    }
  }
});
</script>

<style scoped src="./CountryWeatherForecast.css"></style>
