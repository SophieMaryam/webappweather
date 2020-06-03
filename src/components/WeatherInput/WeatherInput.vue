<template>
  <div class="searchbar-container">
    <b-form
      @submit.prevent="onSubmit(countrySelected, city)"
      class="form-content"
      id="form"
    >
      <div class="form-row justify-content-center">
        <div class="form-group weather-icon col-md-auto">
          <font-awesome-icon icon="cloud-sun" size="2x" />
        </div>
        <div class="form-group col-4 col-md-auto">
          <b-form-select class="countrySelected" v-model="countrySelected">
            <b-form-select-option value="AF">AF</b-form-select-option>
            <b-form-select-option
              v-for="country in countries"
              :key="country.code"
              :value="country.code"
              required
            >
              {{ country.code }}</b-form-select-option
            >
          </b-form-select>
        </div>
        <div class="form-group col-12 col-md-7">
          <b-input-group>
            <b-input
              class="city"
              placeholder="Please enter your location here..."
              v-model="city"
              required
            />
            <b-input-group-append>
              <span class="input-group-text">
                <font-awesome-icon icon="search" />
              </span>
            </b-input-group-append>
          </b-input-group>
        </div>
      </div>
    </b-form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import countryCodes from "../../common/countries.json";

export default Vue.extend({
  name: "WeatherInput",
  data() {
    return {
      city: "",
      countries: countryCodes,
      countrySelected: "AF"
    };
  },
  created() {
    this.sortCountryCodes();
  },
  methods: {
    onSubmit(countrySelected: string, city: string) {
      this.$store.dispatch("updateWeather", { countrySelected, city });
    },
    sortCountryCodes(): void {
      this.countries.sort((a: { code: string }, b: { code: string }) => {
        return a.code > b.code ? 1 : b.code > a.code ? -1 : 0;
      });
    }
  }
});
</script>

<style scoped src="./WeatherInput.css"></style>
