<template>
  <div class="searchbar-container">
    <b-form
      @submit.prevent="onSubmit(countrySelected, city)"
      class="mx-auto"
      inline
    >
      <div class="form-row form-content col-md-12">
        <div class="form-group weather-icon col-md-1">
          <font-awesome-icon icon="cloud-sun" size="2x" />
        </div>
        <div class="form-group col-md-1 mr-4">
          <b-form-select v-model="countrySelected">
            <b-form-select-option value="AF">AF</b-form-select-option>
            <b-form-select-option
              v-for="country in countries"
              :key="country.code"
              :value="country.code"
              select-size="10"
              required
            >
              {{ country.code }}</b-form-select-option
            >
          </b-form-select>
        </div>
        <div class="form-group row col-md-9">
          <b-input-group>
            <b-input
              class="country-input"
              placeholder="Please enter your location here..."
              v-model="city"
              required
            />
            <b-input-group-append @click="onSubmit(countrySelected, city)">
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
    this.sorted();
  },
  methods: {
    onSubmit(country: string, city: string) {
      this.$store.dispatch("updateWeather", { country, city });
    },
    sorted(): void {
      this.countries.sort((a: { code: string }, b: { code: string }) => {
        return a.code > b.code ? 1 : b.code > a.code ? -1 : 0;
      });
    },
  },
});
</script>

<style scoped src="./WeatherInput.css"></style>
