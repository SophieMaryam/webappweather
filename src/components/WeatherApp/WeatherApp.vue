<template>
  <div class="centered" :class="isLoading ? '' : 'width'">
    <WeatherInput v-show="!isLoading || !isMobile" />
    <CountryWeatherForecast v-show="isLoading" />
  </div>
</template>

<style scoped src="./WeatherApp.css"></style>
<script lang="ts">
import Vue from "vue";
import WeatherInput from "../WeatherInput/WeatherInput.vue";
import CountryWeatherForecast from "../CountryWeatherForecast/CountryWeatherForecast.vue";

export default Vue.extend({
  name: "WeatherApp",
  components: {
    WeatherInput,
    CountryWeatherForecast
  },
  computed: {
    isLoading() {
      return this.$store.state.startLoading;
    },
    isMobile() {
      return window.matchMedia("only screen and (max-width: 760px)").matches;
    }
  }
});
</script>
