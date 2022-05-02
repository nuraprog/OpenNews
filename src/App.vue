<template>
  <nav-bar v-if="route.path !== '/search'" />

  <router-view></router-view>
</template>

<script setup lang="ts">
import NavBar from "./components/NavBar.vue";

import { onBeforeMount, ref, watch } from "vue";

import { useRoute } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();

onBeforeMount(() => {
  store.dispatch("initTheme");
});
</script>

<style lang="scss">
@import "./assets/scss/index.scss";

#app {
  background: #f9f9f9;
}
</style>
