import { createStore } from "vuex";

import theme from "./modules/theme";
import news from "./modules/news";

export default createStore({
  modules: {
    theme,
    news,
  },
});
