import { atom } from 'recoil';

export const inputLoginId = atom({
  key: 'inputLoginId',
  default: {
    userId: '',
  },
});

export const inputLoginPwd = atom({
  key: 'inputLoginPwd',
  default: {
    userPwd: '',
  },
});

export const loginData = atom({
  key: 'loginData',
  default: {
    userId: '',
    userPwd: '',
    message: 'FAILED',
  },
});
