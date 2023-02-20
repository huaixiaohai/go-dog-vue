import request from "@/utils/request";

export const captchaImage = () => {
  return request.get("/api/captchaImage");
};

export const login = () => {
  console.log("api login");
  return request.post("/api/v1/login");
};
