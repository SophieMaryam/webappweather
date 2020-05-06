<template>
  <div class="font">
    <WeatherApp />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import WeatherApp from "./components/WeatherApp/WeatherApp.vue";

export default Vue.extend({
  name: "App",
  components: {
    WeatherApp
  }
});
</script>
<style>
.font {
  font-family: "Roboto", sans-serif;
}
</style>
