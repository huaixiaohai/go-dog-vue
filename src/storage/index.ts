export const Local = {
  set(key: string, val: any) {
    window.localStorage.setItem(key, JSON.stringify(val));
  },
  get(key: string) {
    const json: any = window.localStorage.getItem(key);
    return json.parse(json);
  },
  remove(key: string) {
    window.localStorage.removeItem(key);
  },
  clear() {
    window.localStorage.clear();
  },
};

export const Session = {
  // 设置临时缓存
  set(key: string, val: any) {
    window.sessionStorage.setItem(key, JSON.stringify(val));
  },
  // 获取临时缓存
  get(key: string) {
    const json: any = window.sessionStorage.getItem(key);
    return JSON.parse(json);
  },
  // 移除临时缓存
  remove(key: string) {
    window.sessionStorage.removeItem(key);
  },
  // 移除全部临时缓存
  clear() {
    window.sessionStorage.clear();
  },
};
