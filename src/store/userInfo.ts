import { defineStore } from "pinia";

const useUserInfoStore = defineStore("userInfo", () => {
  const userInfo = {
    id: "",
    name: "",
  };

  return { userInfo };
});
