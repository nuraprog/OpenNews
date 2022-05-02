<template>
  <search-nav />

  <div class="holder">
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
  </div>
</template>

<script setup lang="ts">
import CardWrapper from "../../components/CardWrapper.vue";
import Card from "../../components/Card.vue";

import { computed, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import SearchNav from "./SearchNav.vue";
import { useStore } from "vuex";

const router = useRouter();
const route = useRoute();
const store = useStore();

const list = computed(() => store.getters.getList);

function checkRouteQuery() {
  if (!route.query.q) {
    router.push({
      name: "Main",
    });
  }
}

onMounted(() => {
  checkRouteQuery();

  document.title = `Search - ${route.query.q}`;

  store.dispatch("initNews", {
    q: route.query.q,
  });

  console.log(list.value);

  watch(
    () => route.query.q,
    () => {
      document.title = `Search - ${route.query.q}`;
      checkRouteQuery();
      store.dispatch("initNews", {
        q: route.query.q,
      });
    }
  );
});
</script>

<style lang="scss" scoped>
.holder {
  padding: 100px 0px;
}
</style>
