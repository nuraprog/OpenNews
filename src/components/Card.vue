<template>
  <div class="card">
    <div class="card__header">
      <img
        v-if="props.urlToImg"
        :src="props.urlToImg"
        alt=""
      />
    </div>
    <div class="card__body">
      <a :href="props.url"
        ><h5 class="card__title serif">
          {{ props.title }}
        </h5></a
      >
      <p class="card__description">
        {{ props.description }}
      </p>
    </div>
    <div class="card__footer">
      <small v-if="props.source">Creator: <strong>{{ props.source }}</strong></small
      >
      <small>Published: <strong>{{ props.published }}</strong></small>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: String,
  description?: String,
  urlToImg?: String,
  source?: String,
  published?: String,
  url: String
}>();
</script>

<style lang="scss" scoped>
body.light {
  .card {
    background: #fff;

    a {
      color: #000;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
    .card__title {
      color: #000;
    }
  }
}

.card {
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 6px;
  padding-bottom: 12px;

  &__header {
    padding: 12px;

    img {
      width: 100%;
    }
  }

  &__body,
  &__footer {
    padding: 6px 12px;
  }

  &__body {
    display: flex;
    flex-direction: column;
    grid-gap: 12px;

    a {
      cursor: pointer;
    }

    .card__title {
      text-decoration: none;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
