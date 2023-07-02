export const authStorage = {
  get: () => {
    return window.localStorage.getItem('token');
  },
  set: (token: string) => {
    window.localStorage.setItem('token', token);
  },
  remove: () => {
    window.localStorage.removeItem('token');
  },
};
