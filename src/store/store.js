import { atom } from 'recoil';

export const atomUserInfo = atom({
  key: 'atomUserInfo',
  default: { user: { email: '', password: '', username: '', accountname: '', intro: '' } }
});
