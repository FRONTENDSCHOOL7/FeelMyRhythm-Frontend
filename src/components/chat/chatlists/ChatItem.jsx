import React, { useState } from 'react';
import * as S from './chatlists.styled';

const ChatItem = ({ profileImg, alertImg, name, message, date, isUnread: isUnreadProp }) => {
  const [isUnread, setIsUnread] = useState(isUnreadProp !== undefined ? isUnreadProp : true);

  const handleItemClick = () => {
    setIsUnread(false);
  };

  return (
    <S.ChatListItem onClick={handleItemClick}>
      <S.ProfileImage src={profileImg} alt='profile' />
      {isUnread && <S.AlertIcon src={alertImg} alt='alert' />}
      <S.ChatBox>
        <S.ChatUserName>{name}</S.ChatUserName>
        <S.ChatMessage>{message}</S.ChatMessage>
      </S.ChatBox>
      <S.ChatDate>{date}</S.ChatDate>
    </S.ChatListItem>
  );
};

export default ChatItem;
