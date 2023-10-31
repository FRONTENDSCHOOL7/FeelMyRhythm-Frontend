import { atom } from 'recoil';

export const atomMyInfo = atom({ key: 'atomMyInfo', default: null });

export const atomYoutubeWrite = atom({ key: 'atomyoutubewrite', default: '' });

export const atomYoutubeSearchKeyword = atom({ key: 'atomyoutubesearchkeyword', default: '' });
export const atomYoutubeSearchCount = atom({ key: 'atomyoutubesearchcount', default: 0 });
