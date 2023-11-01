import styled from 'styled-components';
import home from '../../../assets/images/tabmenu/icon_home.svg';
import homeFill from '../../../assets/images/tabmenu/icon_home_fill.svg';
import chat from '../../../assets/images/tabmenu/icon_chat.svg';
import chatFill from '../../../assets/images/tabmenu/icon_chat_fill.svg';
import write from '../../../assets/images/tabmenu/icon_write.svg';
import writeFill from '../../../assets/images/tabmenu/icon_write_fill.svg';
import profile from '../../../assets/images/tabmenu/icon_profile.svg';
import profileFill from '../../../assets/images/tabmenu/icon_profile_fill.svg';

export const FooterLayout = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  gap: 14px;
  position: fixed;
  bottom: 0;
  z-index: 10;

  background-color: #fff;
  border-top: 0.5px solid #dbdbdb;

  padding-left: 6px;
  padding-right: 6px;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 84px;
  padding-top: 12px;
  padding-bottom: 6px;

  color: ${({ $isActive }) => ($isActive !== 'none' ? '#f26e22' : '#767676')};
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

export const WriteBox = styled(ContentBox)`
  flex-basis: 1;
  flex-shrink: 0;
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

export const WriteImg = styled(IconImg).attrs(({ $isActive }) => ({
  src: $isActive !== 'none' ? writeFill : write
}))``;

export const ProfileImg = styled(IconImg).attrs(({ $isActive }) => ({
  src: $isActive !== 'none' ? profileFill : profile
}))``;
