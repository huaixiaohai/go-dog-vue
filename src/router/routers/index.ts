import { PageEnum } from "@/enums/pageEnum";
import type { RouteRecordRaw } from "vue-router";

export const RootRoute: RouteRecordRaw = {
  path: "/",
  name: "Root",
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: "Root",
  },
};

export const LoginRoute: RouteRecordRaw = {
  path: "/login",
  name: "login",
  component: () => import("@/views/sys/login/Login.vue"),
  meta: {
    title: "routes.basic.login",
  },
};

export const basicRoutes = [LoginRoute, RootRoute];
