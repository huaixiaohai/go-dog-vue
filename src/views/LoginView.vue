<template>
  <div class="login-page">
    <a-avatar
      :size="80"
      src="https://img.qq22.com.cn/uploads/16/3470607325/21960282789253.jpg?14581971"
    >
    </a-avatar>
    <p style="font-size: 20px; margin-top: 30px">Sign in to GODOG</p>
    <div style="background: #eff1f3; border-radius: 5%">
      <!--      <form @submit.prevent="submitForm">-->
      <!--        <div>-->
      <!--          <label for="username">Username:</label>-->
      <!--          <input id="username" v-model="username" required type="text" />-->
      <!--        </div>-->
      <!--        <div>-->
      <!--          <label for="password">Password:</label>-->
      <!--          <input id="password" v-model="password" required type="password" />-->
      <!--        </div>-->
      <!--        <button type="submit">Login</button>-->
      <!--      </form>-->
      <!--    </div>-->
      <a-form
        :model="userInfo"
        name="basic"
        style="
          margin-top: 30px;
          margin-left: 10px;
          margin-right: 10px;
          width: 300px;
        "
        @submit="onSubmit"
      >
        <a-form-item
          :rules="[{ required: true, message: 'Please input your username!' }]"
          name="name"
          style="width: 300px"
        >
          <a-input v-model:value="userInfo.name" placeholder="Username">
            <template #prefix>
              <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
          :rules="[{ required: true, message: 'Please input your password!' }]"
          name="password"
          style="width: 300px"
        >
          <a-input
            v-model:value="userInfo.password"
            placeholder="Password"
            type="password"
          >
            <template #prefix>
              <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item style="width: 300px">
          <a-button
            :loading="signing"
            html-type="submit"
            style="
              display: block;
              margin: 0 auto;
              width: 300px;
              border-radius: 5%;
            "
            type="primary"
            >Sign In
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { login } from "@/api/login";
import { LockOutlined, UserOutlined } from "@ant-design/icons-vue";
import { reactive, ref } from "vue";
import { LocalStorage } from "@/storage";

interface UserInfo {
  name: string;
  password: string;
}

const userInfo = reactive<UserInfo>({
  name: "",
  password: "",
});

const signing = ref<boolean>(false);

const onSubmit = (e: Event) => {
  if (userInfo.name == "" || userInfo.password == "") {
    return;
  }
  signing.value = true;
  login({}).then((data) => {
    signing.value = false;
    LocalStorage.SetToken(data.data.token);
  });
};
</script>

<style scoped>
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  /*justify-content: center;*/
  height: 100vh;
  margin-top: 40px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  margin-bottom: 1rem;
}

button {
  margin-top: 1rem;
}
</style>
