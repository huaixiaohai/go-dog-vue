<template>
  <ConfigProvider>
    <AppProvider>
      <RouterView />
    </AppProvider>
  </ConfigProvider>
</template>

<script lang="ts" setup>
import { ConfigProvider } from "ant-design-vue";
</script>
