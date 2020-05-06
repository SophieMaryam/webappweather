<template>
  <div class="text-center justify-content-center col-md-12">
    <div v-if="!checkDataReceived" class="loader"></div>
    <div v-else>
      <p>working</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CountryWeatherForecast",
  computed: {
    checkDataReceived(): boolean {
      return this.$store.state.dataReceived;
    }
  },
});
</script>

<style scoped src="./CountryWeatherForecast.css"></style>
