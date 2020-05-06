<template>
  <div class="searchbar-container">
    <b-form @submit.prevent="onSubmit(city)" class="mx-auto" inline>
      <div class="form-row form-content col-md-12">
        <div class="form-group row col-md-9">
          <b-input-group>
            <b-input
              class="country-input"
              placeholder="Please enter your location here..."
              v-model="city"
              required
            />
            <b-input-group-append @click="onSubmit(city)">
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

export default Vue.extend({
  name: "WeatherInput",
  data() {
    return {
      city: ""
    };
  },
  methods: {
    onSubmit(city: string) {
      console.log(city)
    },
  },
});
</script>

<style scoped src="./WeatherInput.css"></style>
