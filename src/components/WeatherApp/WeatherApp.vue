<template>
  <div id="centered" :class="[isLoading ? '' : 'width']">
    <WeatherInput v-show="!isLoading || !isMobile" />
    <CountryWeatherForecast class="work" v-show="isLoading" />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import WeatherInput from "../WeatherInput/WeatherInput.vue";
import CountryWeatherForecast from "../CountryWeatherForecast/CountryWeatherForecast.vue";

export default Vue.extend({
  name: "WeatherApp",
  components: {
    WeatherInput,
    CountryWeatherForecast,
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

<style scoped src="./WeatherApp.css"></style>
