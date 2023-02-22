<template>
  <a-layout class="ant-layout">
    <a-layout-header class="ant-layout-header">
      <NavigationComponent></NavigationComponent>
    </a-layout-header>
    <a-layout-content class="ant-layout-content">
      <div class="content-bg">
        <div class="content-panel">
          <div class="content-app-panel"></div>
        </div>
      </div>
    </a-layout-content>
    <a-layout-footer
      class="ant-layout-footer"
      style="background: #1a1a28"
    ></a-layout-footer>
  </a-layout>

  <!--  <RouterView />-->
</template>

<script lang="ts" setup>
import NavigationComponent from "@/views/component/NavigationComponent.vue";
</script>

<style>
.ant-layout {
  display: flex;
  flex-direction: column;
  /*height: 100%;*/
  /*align-items: center;*/
  position: absolute;
  width: 100%;
  height: 100%;
}

.ant-layout-header {
}

.ant-layout-content {
  flex: 1;
  display: flex;
  /*flex-direction: column;*/
  overflow-y: auto;
}

/*滑动条宽高*/
.ant-layout-content::-webkit-scrollbar {
  width: 0px;
  height: 4px;
  background-color: rgba(155, 62, 62, 0);
}

/*滚动条滑块*/
.ant-layout-content::-webkit-scrollbar-thumb {
  border-radius: 30px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(19, 17, 21, 1);
}

/*滑动条轨道*/
.ant-layout-content::-webkit-scrollbar-track {
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0) inset;
}

/*小边角*/
.ant-layout-content::-webkit-scrollbar-corner {
  background: transparent;
}

.ant-layout-footer {
  background: #1a1a28;
}

.content-bg {
  background: linear-gradient(
    71deg,
    rgb(229, 103, 81) 12%,
    rgb(169, 81, 116) 40%,
    rgb(72, 148, 231) 68%
  );
  margin: fill;
  width: 100%;
  height: fit-content;
  min-height: 100%;
  display: flex;
  justify-content: center;
}

.content-panel {
  width: 80%;
  height: 80%;
  min-height: 500px;
  background-color: rgba(256, 256, 256, 0.2);
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 20px;
  display: grid;
}

.content-app-panel {
  width: 300px;
  height: fit-content;
  min-height: 400px;
  margin-top: 30px;
  margin-left: 30px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
}
</style>
