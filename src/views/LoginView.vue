<template>
  <div class="login-page">
    <a-avatar
      :size="80"
      src="https://img.qq22.com.cn/uploads/16/3470607325/21960282789253.jpg?14581971"
    >
    </a-avatar>
    <p style="font-size: 20px; margin-top: 30px">Sign in to GODOG</p>
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">Username:</label>
        <input id="username" v-model="username" required type="text" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input id="password" v-model="password" required type="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { login } from "@/api/login";
import router from "@/router";

const username = ref("");
const password = ref("");

const submitForm = () => {
  console.log("登录中，用户名，密码", username, password);

  login().then((data) => {
    // setLocalStorage("LH_TOKEN", res.token);
    router.push("/");
  });
};
</script>

<style scoped>
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /*height: 100vh;*/
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
