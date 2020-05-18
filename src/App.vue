<template>
  <div
    class="font"
    :style="{ backgroundImage: updateBgColor }"
    style="height: 100vh;"
  >
    <WeatherApp />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import WeatherApp from "./components/WeatherApp/WeatherApp.vue";

export default Vue.extend({
  name: "App",
  data() {
    return {
      darkBlue: "#000099",
      lightBlue: "#cceeff",
      orange: "#ffa500",
      yellow: "#fffacd",
      mediumBlue: "#66b3ff"
    };
  },
  components: {
    WeatherApp
  },
  computed: {
    updateBgColor(): string {
      const temp = this.$store.state.temperature;
      if (temp >= 20) {
        return `linear-gradient(to bottom right, ${this.yellow}, ${this.orange})`;
      } else if (temp < 20 && temp > 0) {
        return `linear-gradient(to bottom right, ${this.lightBlue}, ${this.orange})`;
      } else if (temp <= 0 && temp > -20) {
        return `linear-gradient(to bottom right, ${this.mediumBlue}, ${this.lightBlue})`;
      } else if (temp <= -20) {
        return `linear-gradient(to bottom right, ${this.darkBlue}, ${this.mediumBlue})`;
      } else {
        return `linear-gradient(to bottom right, ${this.lightBlue}, ${this.yellow})`;
      }
    }
  }
});
</script>
<style>
.font {
  font-family: "Roboto", sans-serif;
}
</style>
