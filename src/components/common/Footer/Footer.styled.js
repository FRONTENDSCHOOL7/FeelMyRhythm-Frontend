import styled from 'styled-components';
import home from '../../../images/footer/icon_home.svg';
import homeFill from '../../../images/footer/icon_home_fill.svg';
import chat from '../../../images/footer/icon_chat.svg';
import chatFill from '../../../images/footer/icon_chat_fill.svg';
import write from '../../../images/footer/icon_write.svg';
import writeFill from '../../../images/footer/icon_write_fill.svg';
import profile from '../../../images/footer/icon_profile.svg';
import profileFill from '../../../images/footer/icon_profile_fill.svg';

export const FooterLayout = styled.div`
  display: flex;
  gap: 14px;

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

  font-family: Spoqa Han Sans Neo;
  color: ${({$isActive}) => ($isActive !== 'none' ? '#f26e22' : '#767676')};
  font-size: 10px;
  font-weight: 700;
  line-height: 14px;
  cursor: pointer;
`;

export const HomeBox = styled(ContentBox)`
  padding-left: 30px;
  padding-right: 30px;
`;

export const ChatBox = styled(ContentBox)`
  padding-left: 30px;
  padding-right: 30px;
`;

export const WriteBox = styled(ContentBox)`
  padding-left: 17.5px;
  padding-right: 17.5px;
`;

export const ProfileBox = styled(ContentBox)`
  padding-left: 28px;
  padding-right: 28px;
`;

export const IconImg = styled.img`
  padding-bottom: 4px;
`;

export const HomeImg = styled(IconImg).attrs(({$isActive}) => ({
  src: $isActive !== 'none' ? homeFill : home
}))``;

export const ChatImg = styled(IconImg).attrs(({$isActive}) => ({
  src: $isActive !== 'none' ? chatFill : chat
}))``;

export const WriteImg = styled(IconImg).attrs(({$isActive}) => ({
  src: $isActive !== 'none' ? writeFill : write
}))``;

export const ProfileImg = styled(IconImg).attrs(({$isActive}) => ({
  src: $isActive !== 'none' ? profileFill : profile
}))``;
