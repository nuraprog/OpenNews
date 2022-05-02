<template>
  <div class="container">
    <div class="card-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 1024px) {
  .card-wrapper {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media screen and (max-width: 630px) {
  .card-wrapper {
  grid-template-columns: repeat(1, 1fr) !important;
  }
}

.card-wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4px;
}
</style>