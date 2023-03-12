import type { App } from "vue";
import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";

// 白名单应该包含基本静态路由
const WHITE_NAME_LIST: string[] = [];
const getRouterNames = (array: any[]) => {
  array.forEach((item) => {
    WHITE_NAME_LIST.push(item.name);
    getRouterNames(item.children || []);
  });
};
getRouterNames(basicRoutes);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: basicRoutes as unknown as RouteRecordRaw[],
  // 是否应该禁止尾部斜杠。默认为假
  // strict：true,
  // scrollBehavior: () => ({ left: 0, top: 0 }),
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}
