<template>
  <a-row type="flex">
    <a-col :flex="1">
      <a-avatar
        :size="55"
        src="https://img.qq22.com.cn/uploads/16/3470607325/21960282789253.jpg?14581971"
      >
      </a-avatar>
    </a-col>
    <a-col :flex="1"><h1 style="color: #f2f2f2">GODOG</h1></a-col>
    <a-col :flex="25">
      <a-menu
        v-model:selectedKeys="selectedKeys"
        :style="{ lineHeight: '64px' }"
        mode="horizontal"
        theme="dark"
      >
        <!--        <a-menu-item key="1">About us</a-menu-item>-->
        <!--        <a-menu-item key="2">nav 2</a-menu-item>-->
        <!--        <a-menu-item key="3">nav 3</a-menu-item>-->
      </a-menu>
    </a-col>
    <a-col :flex="1">
      <a-button type="text"><h4 style="color: #f2f2f2">SIGN IN</h4></a-button>
    </a-col>
    >
    <a-col :flex="1">
      <a-button><h4>SIGN UP</h4></a-button>
    </a-col>
    >
  </a-row>
</template>
<script lang="ts" setup></script>
