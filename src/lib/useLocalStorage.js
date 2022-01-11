export const useLocalStorage = () => {
  // 取得 LocalStorage
  const get = name => {
    return localStorage.getItem(name);
  };
  // 設定LocalStorage
  const set = (name, value) => {
    localStorage.setItem(name, value);
  };

  return { get, set };
};
