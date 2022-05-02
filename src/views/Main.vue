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
import Card from "../components/Card.vue";
import CardWrapper from "../components/CardWrapper.vue";

import { onMounted, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const list = computed(() => store.getters.getList);

onMounted(() => {
  store.dispatch("initNews", {
    category: "world",
  });

  document.title=`OpenNews - Home`;

  console.log(list.value);
});
</script>
