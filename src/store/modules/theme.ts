export default {
  state: {
    theme: "light",
  },

  getters: {
    getTheme: (state: any) => {
      return state.theme;
    },
  },

  mutations: {
    SET_THEME(state: any, theme: string) {
      state.theme = theme;
      localStorage.theme = theme;

      if (theme === "light") {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
      } else {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
      }
    },
  },

  actions: {
    initTheme({ commit }) {
      const cachedTheme = localStorage.theme ? localStorage.theme : false;
      const userPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      if (cachedTheme) commit("SET_THEME", cachedTheme);
      else if (userPrefersDark) commit("SET_THEME", "dark");
      else commit("SET_THEME", "light");
    },

    toggleTheme({ commit }) {
      switch (localStorage.theme) {
        case "light":
          commit("SET_THEME", "dark");
          break;

        default:
          commit("SET_THEME", "light");
          break;
      }
    },
  },
};
