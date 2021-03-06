<template>
  <div class="weather-forecast">
    <div v-if="!dataReceived" class="loader"></div>
    <div v-else class="weather-data">
      <h3 class="cityName">{{ cityName }}</h3>
      <p class="reformatted-date text-uppercase font-weight-bold">
        {{ reformatTodaysDate }}
      </p>
      <h1 class="current-temp text-white font-weight-bold mt-4 mb-5">
        {{ temperature }}<sup class="font-size">&deg;C</sup>
      </h1>
      <ul class="weekdays">
        <li
          v-for="weather in getDailyTemperature"
          :key="weather.day"
          class="weekday text-black"
        >
          {{ weather.weekDay }}
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
import { mapGetters } from "vuex";

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
    ...mapGetters(["temperature", "dataReceived", "cityName", "weather"]),
    reformatTodaysDate(): string {
      const date = new Date(this.weather.data[0].valid_date);
      const month = date.toLocaleString("default", { month: "long" });
      const day = date.getDate();
      const year = date.getFullYear();
      return month + " " + day + " " + year;
    },
    getDailyTemperature() {
      const arr: Array<{
        temp: number;
        weekDay: string;
        icon: string;
      }> = [];
      this.weather.data.map((day: any) => {
        arr.push({
          temp: day.temp,
          weekDay: this.reformatWeekdays(day.valid_date),
          icon: day.weather.icon
        });
      });
      this.orderWeekdays(arr);
      return arr;
    }
  },
  methods: {
    reformatWeekdays(date: string): string {
      const reformatedDate = new Date(date);
      const keys = Object.keys(this.days);
      const dayName: string = keys[reformatedDate.getDay()];
      return dayName;
    },
    orderWeekdays(arr: Array<{ weekDay: string }>) {
      const days: any = this.days;
      arr.sort((a: any, b: any) => {
        return days[a.weekDay] - days[b.weekDay];
      });
    }
  }
});
</script>

<style scoped src="./CountryWeatherForecast.css"></style>
