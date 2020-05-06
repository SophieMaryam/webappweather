<template>
  <div class="weather-forecast text-center justify-content-center col-md-12">
    <div v-if="!checkDataReceived" class="loader"></div>
    <div v-else>
      <p class="text-uppercase font-weight-bold">{{ reformatTodaysDate }}</p>
      <h1 class="text-white display-1 font-weight-bold mt-5 mb-5">
        {{ this.$store.state.weather[0].temp }}&deg;C
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CountryWeatherForecast", 
  computed: {
    // getWeatherForecast(): object {
    //   return this.$store.state.weather;
    // },
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
  },
});
</script>

<style scoped src="./CountryWeatherForecast.css"></style>
