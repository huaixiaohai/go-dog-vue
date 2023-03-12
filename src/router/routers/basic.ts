// 404 on a page
import type { RouteRecordRaw } from "vue-router";

import {
  EXCEPTION_COMPONENT,
  LAYOUT,
  PAGE_NOT_FOUND_NAME,
  REDIRECT_NAME,
} from "@/router/constant";

export const PAGE_NOT_FOUND_ROUTE: RouteRecordRaw = {
  path: "/:path(.*)*",
  name: PAGE_NOT_FOUND_NAME,
  component: LAYOUT,
  meta: {
    title: "ErrorPage",
    hideBreadcrumb: true,
    hideMenu: true,
  },
  children: [
    {
      path: "/:path(.*)*",
      name: PAGE_NOT_FOUND_NAME,
      component: EXCEPTION_COMPONENT,
      meta: {
        title: "ErrorPage",
        hideBreadcrumb: true,
        hideMenu: true,
      },
    },
  ],
};

export const REDIRECT_ROUTE: RouteRecordRaw = {
  path: "/redirect",
  component: LAYOUT,
  name: "RedirectTo",
  meta: {
    title: REDIRECT_NAME,
    hideBreadcrumb: true,
    hideMenu: true,
  },
  children: [
    {
      path: "/redirect/:path(.*)",
      name: REDIRECT_NAME,
      component: () => import("@/views/sys/redirect/index.vue"),
      meta: {
        title: REDIRECT_NAME,
        hideBreadcrumb: true,
      },
    },
  ],
};

export const ERROR_LOG_ROUTE: RouteRecordRaw = {
  path: "/error-log",
  name: "ErrorLog",
  component: LAYOUT,
  redirect: "/error-log/list",
  meta: {
    title: "ErrorLog",
    hideBreadcrumb: true,
    hideChildrenInMenu: true,
  },
  children: [
    {
      path: "list",
      name: "ErrorLogList",
      component: () => import("@/views/sys/error-log/index.vue"),
      meta: {
        title: t("routes.basic.errorLogList"),
        hideBreadcrumb: true,
        currentActiveMenu: "/error-log",
      },
    },
  ],
};
