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
  max-width: 767px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 14px;
  position: fixed;
  bottom: 0;
  z-index: 10;

  background-color: ${({ theme }) => theme.bgColor};
  border-top: 0.5px solid #dbdbdb;

  padding-left: 6px;
  padding-right: 6px;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-top: 12px;
  padding-bottom: 6px;

  color: ${({ $isActive }) => ($isActive !== 'none' ? '#f26e22' : '#767676')};
  font-size: 10px;
  font-weight: 700;
  line-height: 14px;
  cursor: pointer;
`;

export const HomeBox = styled(ContentBox)`
  padding-left: 30px;
  padding-right: 30px;
  font-family: 'Orbit-Regular';
`;

export const ChatBox = styled(ContentBox)`
  padding-left: 30px;
  padding-right: 30px;
  font-family: 'Orbit-Regular';
`;

export const WriteBox = styled(ContentBox)`
  padding-left: 17.5px;
  padding-right: 17.5px;
  font-family: 'Orbit-Regular';
`;

export const ProfileBox = styled(ContentBox)`
  padding-left: 28px;
  padding-right: 28px;
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
