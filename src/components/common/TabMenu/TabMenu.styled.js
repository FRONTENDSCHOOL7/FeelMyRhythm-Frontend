import styled from 'styled-components';

import chat from '../../../assets/images/tabmenu/icon_chat.svg';
import chatFill from '../../../assets/images/tabmenu/icon_chat_fill.svg';
import emotion from '../../../assets/images/tabmenu/icon_emotion.svg';
import emotionFill from '../../../assets/images/tabmenu/icon_emotion_fill.svg';
import profile from '../../../assets/images/tabmenu/icon_profile.svg';
import profileFill from '../../../assets/images/tabmenu/icon_profile_fill.svg';
import write from '../../../assets/images/home/icon_write.svg';

import home from '../../../assets/images/tabmenu/icon_home.svg';
import homeFill from '../../../assets/images/tabmenu/icon_home_fill.svg';

export const FooterLayout = styled.div`
  position: relative;
  max-width: 767px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 14px;
  position: fixed;
  bottom: 0;
  z-index: 10;

  background-color: ${({ theme }) => theme.backgroundColor};
  border-top: 0.5px solid #dbdbdb;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 12px;
  padding-bottom: 6px;
  flex: 1 0 0;
  color: ${({ $isActive, theme }) => ($isActive !== 'none' ? theme.textColor : theme.subTextColor)};
  font-size: 10px;
  font-weight: 700;
  line-height: 14px;
  cursor: pointer;
`;

export const HomeBox = styled(ContentBox)`
  font-family: 'Orbit-Regular';
`;

export const ChatBox = styled(ContentBox)`
  font-family: 'Orbit-Regular';
`;

export const EmotionBox = styled(ContentBox)`
  font-family: 'Orbit-Regular';
`;

export const ProfileBox = styled(ContentBox)`
  font-family: 'Orbit-Regular';
`;

export const IconImg = styled.img`
  padding-bottom: 4px;
`;

export const HomeImg = styled(IconImg).attrs(({ $isActive }) => ({
  src: $isActive !== 'none' ? homeFill : home
}))``;

export const ChatImg = styled(IconImg).attrs(({ $isActive }) => ({
  src: $isActive !== 'none' ? chatFill : chat
}))``;

export const EmotionImg = styled(IconImg).attrs(({ $isActive }) => ({
  src: $isActive !== 'none' ? emotionFill : emotion
}))``;

export const ProfileImg = styled(IconImg).attrs(({ $isActive }) => ({
  src: $isActive !== 'none' ? profileFill : profile
}))``;

export const WriteImg = styled(IconImg).attrs(({ $isActive }) => ({
  src: write
}))``;

export const WriteBox = styled.div`
  position: absolute;
  right: 20px;
  bottom: 75px;
  height: 47px;
  cursor: pointer;
  border-radius: 50%;
`;
