import { createApp } from "vue";

import App from "./App.vue";

// import "./assets/main.css";
import "./styles/element-variables.scss";
import { setupStore } from "@/store";

async function bootstrap() {
  const app = createApp(App);

  // 配置store
  setupStore(app);

  // 初始化内部系统配置
  // 注册全局组件
  // 多语言配置
  // 异步案例：语言文件可能从服务器端获取

  // 配置路由

  app.mount("#app");
}

bootstrap();

// const app = createApp(App);
//
// app.use(store);
// app.use(router);
// app.use(Element);
//
// app.mount("#app");
