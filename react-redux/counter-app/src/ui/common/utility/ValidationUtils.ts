export const isValidEmail = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const isValidPhone = (phone: string): boolean => /^\+?[\d\s\-()]{7,15}$/.test(phone);

export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const isValidPassword = (password: string): boolean =>
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

export const isAlphanumeric = (str: string): boolean => /^[a-z0-9]+$/i.test(str);

export const hasMinLength = (str: string, min: number): boolean => str.length >= min;

export const hasMaxLength = (str: string, max: number): boolean => str.length <= max;
