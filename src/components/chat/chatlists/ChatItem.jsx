import React from 'react';
import * as S from './chatlists.styled';
import { useNavigate } from 'react-router-dom';

const ChatItem = ({ user }) => {
  const navigate = useNavigate();

  const handleItemClick = (accountname) => {
    navigate('/chat/' + accountname);
  };

  // 이미지 URL을 확인하고 필요한 경우 수정하는 로직
  const getImageUrl = (imageUrl) => {
    if (imageUrl === 'http://146.56.183.55:5050/Ellipse.png') {
      return 'https://api.mandarin.weniv.co.kr/Ellipse.png';
    }
    return imageUrl;
  };

  return (
    <S.ChatListItem onClick={() => handleItemClick(user.accountname)}>
      <S.ProfileImage src={String(getImageUrl(user.image))} alt='profile' />
      <S.ChatBox>
        <S.ChatUserName>{user.username}</S.ChatUserName>
        <S.ChatMessage>메세지 미리보기</S.ChatMessage>
      </S.ChatBox>
      <S.ChatDate>2023-11-01</S.ChatDate>
    </S.ChatListItem>
  );
};

export default ChatItem;
