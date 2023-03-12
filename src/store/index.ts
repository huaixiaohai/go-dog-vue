import { createPinia } from "pinia";
// import pluginPersist from "pinia-plugin-persist";
import type { App } from "vue";

const store = createPinia();

export function setupStore(app: App<Element>) {
  app.use(store);
}

export default store;
