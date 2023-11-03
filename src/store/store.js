import { atom } from 'recoil';

export const atomMyInfo = atom({ key: 'atomMyInfo', default: null });

export const atomYoutubeWrite = atom({ key: 'atomyoutubewrite', default: '' });

export const atomYoutubeSearchKeyword = atom({ key: 'atomyoutubesearchkeyword', default: '' });
export const atomYoutubeSearchCount = atom({ key: 'atomyoutubesearchcount', default: 0 });

export const atomPostContent = atom({
  key: 'atompostcontent',
  default: {
    post: {
      content: '',
      image: ''
    }
  }
});

export const atomEmotionState = atom({ key: 'atomemotionstate', default: '선택' });

export const atomPostUpdateContent = atom({
  key: 'atompostupdatecontent',
  default: {
    content: '',
    image: ''
  }
});
