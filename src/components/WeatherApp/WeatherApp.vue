<template>
  <div id="centered" :class="[this.$store.state.startLoading ? '' : 'width']">
    <WeatherInput v-show="!this.$store.state.startLoading" />
    <CountryWeatherForecast
      class="work"
      v-show="this.$store.state.startLoading"
    />
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
  },
});
</script>

<style scoped src="./WeatherApp.css"></style>
