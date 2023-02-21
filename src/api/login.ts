import request from "@/utils/request";

export const captchaImage = () => {
  return request.get("/api/captchaImage");
};

export interface LoginReq {}

export interface LoginResp {
  Token: string;
}

export const login = (req: LoginReq) => {
  console.log("api login");
  return request.post("/api/v1/login");
};
