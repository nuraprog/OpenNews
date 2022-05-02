<template>
  <nav>
    <div class="container">
      <div class="inwrap">
        <router-link tag="a" to="/"
          ><i class="fa-solid fa-chevron-left"></i> Back to main</router-link
        >
        <input
          type="text"
          placeholder="Search News"
          v-model="searchInput.field.value"
          @keypress.enter="searchInput.search"
        />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

function search() {
  const field = ref("");

  return {
    search() {
      if (field.value) {
        router.push({
          path: "/search",
          query: {
            q: field.value,
          },
        });
      }
    },
    field,
  };
}

const searchInput = search();
</script>

<style lang="scss" scoped>
body.light {
  nav {
    background: rgba(255, 255, 255, 0.8);
    border-bottom: 1px solid #ccc;

    a {
      text-decoration: none;
      color: #000;

      &:hover {
        text-decoration: underline;
      }
    }

    input {
      border: 1px solid #ccc;
      background: #fff;

      &::placeholder {
        color: #777;
      }

      color: #000;

      &:hover {
        border: 1px solid #666;
        background: #f8f8f8;
      }

      &:focus {
        background: #f8f8f8;
      }
    }
  }
}

nav {
  width: 100%;
  position: fixed;
  padding: 12px 0px;
  backdrop-filter: blur(20px);

  .inwrap {
    display: grid;
    grid-template-columns: auto 60%;
    justify-content: space-between;
    align-items: center;

    input {
      width: 100%;
      padding: 8px;
      transition: 300ms;
      border-radius: 24px;
      outline: none;
    }
  }
}
</style>
