<template>
  <div class="centered">
    <WeatherInput />
    <CountryWeatherForecast v-if="this.$store.state.startLoading" />
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
    CountryWeatherForecast
  }
});
</script>

<style scoped src="./WeatherApp.css"></style>
