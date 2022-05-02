<template>
  <card-wrapper>
    <Card
      v-for="(item, id) in list"
      :key="id"
      :title="item.title"
      :url-to-img="item.image_url"
      :description="item.description"
      :source="item.creator"
      :published="item.pubDate"
      :url="item.link"
    />
  </card-wrapper>
</template>

<script setup lang="ts">
import CardWrapper from "../components/CardWrapper.vue";
import Card from "../components/Card.vue";

import { computed, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const route = useRoute();
const store = useStore();

const list = computed(() => store.getters.getList);

const categories: Array<string> = [
  "sports",
  "politics",
  "science",
  "top",
  "business",
  "entertainment",
  "environment",
  "food",
  "health",
  "technology",
  "world",
];

function checkCategory() {
  if (categories.indexOf(route.params.id) === -1) {
    router.push({
      path: "/",
    });
  }
}

onMounted(() => {
  store.dispatch("initNews", {
    q: route.params.id,
  });

  document.title = `Category - ${route.query.q}`;

  checkCategory();

  watch(
    () => route.params.id,
    () => {
      checkCategory();
      document.title = `Search - ${route.query.q}`;
      store.dispatch("initNews", {
        category: route.params.id,
      });
    }
  );
});
</script>
