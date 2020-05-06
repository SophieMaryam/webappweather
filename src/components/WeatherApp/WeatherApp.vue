<template>
  <div class="centered">
    <WeatherInput />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import WeatherInput from "../WeatherInput/WeatherInput.vue";

export default Vue.extend({
  name: "WeatherApp",
  components: {
    WeatherInput
  }
});
</script>

<style scoped src="./WeatherApp.css"></style>
