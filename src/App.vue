<template>
  <div class="font" :style="{ backgroundImage: updateBgColor, height: height }">
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
      color1: "#000099",
      color2: "#cceeff",
      color3: "#ffa500",
      color4: "#FFFACD",
      color5: "#66b3ff",
      height: "100vh"
    };
  },
  components: {
    WeatherApp
  },
  computed: {
    updateBgColor(): string {
      const temp = this.$store.state.weather.temp;
      if (temp > 20) {
        return `linear-gradient(to bottom right, ${this.color4}, ${this.color3})`;
      } else if (temp <= 20 || temp >= 0) {
        return `linear-gradient(to bottom right, ${this.color2}, ${this.color3})`;
      } else if (temp <= 0 || temp >= -20) {
        return `linear-gradient(to bottom right, ${this.color5}, ${this.color2})`;
      } else if (temp > -20) {
        return `linear-gradient(to bottom right, ${this.color1}, ${this.color5})`;
      } else {
        return `linear-gradient(to bottom right, ${this.color2}, ${this.color4})`;
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
