import React, { useState } from 'react';
import * as S from './chatlists.styled';
import { useNavigate } from 'react-router-dom';
import profileImg from '../../../assets/images/chat/Ellipse 1.png';
import alertImg from '../../../assets/images/chat/orange-dot.png';

const ChatItem = ({ user }) => {
  const [isUnread, setIsUnread] = useState(true);
  const navigate = useNavigate();
  const handleItemClick = (accountname) => {
    navigate('/chat/' + accountname);
  };

  return (
    <S.ChatListItem onClick={() => handleItemClick(user.accountname)}>
      <S.ProfileImage src={String(user.image).split('🈳')[3] ?? profileImg} alt='profile' />
      {isUnread && <S.AlertIcon src={alertImg} alt='alert' />}
      <S.ChatBox>
        <S.ChatUserName>{user.username}</S.ChatUserName>
        <S.ChatMessage>메세지 미리보기</S.ChatMessage>
      </S.ChatBox>
      <S.ChatDate>2023-10-29</S.ChatDate>
    </S.ChatListItem>
  );
};

export default ChatItem;
