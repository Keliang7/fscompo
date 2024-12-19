<script setup lang="ts">
// import { Button } from "../dist/fscompo.es.js";
</script>

<template>
  <div>
    <a
      href="https://vite.dev"
      target="_blank">
      <img
        src="/vite.svg"
        class="logo"
        alt="Vite logo" />
    </a>
    <a
      href="https://vuejs.org/"
      target="_blank">
      <img
        src="./assets/vue.svg"
        class="logo vue"
        alt="Vue logo" />
    </a>
  </div>
  <Button :primary="true"></Button>
  <div class="storybook-button">123</div>
</template>

<style scoped>
@import url("../dist/fscompo.css");
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
