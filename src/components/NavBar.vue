<template>
  <div class="search-window" v-if="searchWindow.isActive.value">
    <div class="search-window__shadow" @click="searchWindow.close()"></div>
    <input
      class="search-window__input"
      type="text"
      v-model="searchWindow.field.value"
      placeholder="Search News"
      @keypress.enter="searchWindow.goToSearchPage"
    />
  </div>
  <header class="main-header">
    <div class="container">
      <div class="inwrap">
        <nav>
          <a class="nav__logo" href="/">Topical.</a>

          <button
            class="nav__search-btn"
            type="button"
            @click="searchWindow.open"
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </nav>

        <div class="main">
          <div class="list">
            <router-link to="/">Home</router-link>
            <router-link to="/category/sports">Sports</router-link>
            <router-link to="/category/politics">Politics</router-link>
            <router-link to="/category/science">Science</router-link>
            <router-link to="/category/top">Top</router-link>
            <router-link to="/category/business">Business</router-link>
            <router-link to="/category/entertainment"
              >Entertainment</router-link
            >
            <router-link to="/category/environment">Environment</router-link>
            <router-link to="/category/food">Food</router-link>
            <router-link to="/category/health">Health</router-link>
            <router-link to="/category/technology">technology</router-link>
            <router-link to="/category/world">World</router-link>
          </div>
        </div>
      </div>
    </div>
  </header>

  <br />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

function search() {
  const isActive = ref(false);
  const field = ref("");

  return {
    open() {
      isActive.value = true;
    },

    close() {
      isActive.value = false;
      field.value = "";
    },

    goToSearchPage() {
      if (field.value) {
        router.push({
          path: "/search",
          query: {
            q: field.value,
          },
        });
        this.close();
      }
      console.log(field.value);
    },

    isActive,
    field,
  };
}

const searchWindow = search();
</script>

<style lang="scss" scoped>
body.light {
  .search-window {
    &__input {
      background: rgba(255, 255, 255, 0.9);
      border: 1px solid #ccc;
    }
  }

  .main-header {
    border-bottom: 1px solid #ccc;
    background: rgba(255, 255, 255, 0.9);

    nav {
      .nav__logo {
        color: #000;
      }

      .nav__search-btn {
        border: none;
        background: none;
      }
    }

    .main {
      a {
        color: #191919;
        background: #f7f7f7;

        &:hover {
          background: #000;
          color: #fff;
        }
      }
    }
  }
}

.search-window {
  position: fixed;
  z-index: 99;

  width: 100%;
  height: 100%;

  &__shadow {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 99;
    background: rgba(0, 0, 0, 0.1);
  }

  &__input {
    position: relative;
    backdrop-filter: blur(20px);
    z-index: 100;

    min-width: 100px;
    width: 80%;
    max-width: 600px;

    left: 50%;
    transform: translateX(-50%) translateY(5vh);

    padding: 12px;
    border-radius: 12px;
  }
}

.main-header {
  width: 100%;
  height: auto;
  padding: 12px;

  .container,
  .inwrap {
    height: 100%;
  }

  .inwrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    grid-gap: 12px;
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .nav__logo {
      font-weight: 900;
      text-decoration: none;
      font-size: 24px;
    }

    .nav__search-btn {
      width: 30px;
      height: 30px;
      cursor: pointer;

      i {
        transform: scale(1.2);
      }
    }
  }

  .main {
    overflow-x: scroll;
    width: 100%;

    .list {
      min-width: 412px;
      display: flex;
      flex-direction: row;
      align-items: center;
      grid-gap: 8px;

      a {
        border-radius: 20px;
        padding: 8px 18px;
        font-family: "Libre Baskerville", serif;
        font-size: 16px;
        text-decoration: none;
        transition: 300ms;

        &:hover {
          transition: 50ms;
        }
      }
    }
  }
}

.switch {
  position: relative;
  display: inline-block;
  width: 55px;
  height: 26px;

  input {
    display: none;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    transform: translateX(29px);
  }

  .slider {
    position: absolute;
    cursor: pointer;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;

    &.round {
      border-radius: 34px;

      &:before {
        border-radius: 50%;
      }
    }

    &:before {
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
      left: 3px;
      top: 3px;
      background-color: white;
      transition: 0.4s;
    }
  }
}
</style>
