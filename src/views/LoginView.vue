<template>
  <div class="login-page">
    <h1>Login Page</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { login } from "@/api/login";
// import { router } from "@/router/index";

const username = ref("");
const password = ref("");

const submitForm = () => {
  console.log("登录中，用户名，密码", username, password);

  login().then((res) => {
    console.log(res);
    // setLocalStorage("LH_TOKEN", res.token);
    // router.push("/");
  });
};
</script>

<style scoped>
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
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
