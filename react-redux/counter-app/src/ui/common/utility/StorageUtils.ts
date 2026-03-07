export const setLocalStorage = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error("LocalStorage set error:", e);
  }
};

export const getLocalStorage = <T>(key: string, fallback?: T): T | undefined => {
  try {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : fallback;
  } catch (e) {
    console.error("LocalStorage get error:", e);
    return fallback;
  }
};

export const removeLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};

export const clearLocalStorage = (): void => {
  localStorage.clear();
};

export const setSessionStorage = <T>(key: string, value: T): void => {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error("SessionStorage set error:", e);
  }
};

export const getSessionStorage = <T>(key: string, fallback?: T): T | undefined => {
  try {
    const item = sessionStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : fallback;
  } catch (e) {
    console.error("SessionStorage get error:", e);
    return fallback;
  }
};

export const removeSessionStorage = (key: string): void => {
  sessionStorage.removeItem(key);
};
