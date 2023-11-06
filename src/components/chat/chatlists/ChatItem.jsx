import React, { useState, useEffect } from 'react';
import * as S from './chatlists.styled';
import { useNavigate } from 'react-router-dom';
import basicProfile from '../../../assets/images/common/basic-profile.svg';

const ChatItem = ({ user }) => {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const now = new Date();

    const timeUntilMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1) - now;

    // 정각에 setCurrentDate 호출
    const timeout = setTimeout(() => {
      setCurrentDate(new Date());

      const interval = setInterval(() => {
        setCurrentDate(new Date());
      }, 86400000);

      return () => clearInterval(interval);
    }, timeUntilMidnight);

    return () => clearTimeout(timeout);
  }, []);

  const handleItemClick = (accountname) => {
    navigate('/chat/' + accountname);
  };

  const formatDate = (date) => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');

    return `${yyyy}-${mm}-${dd}`;
  };

  return (
    <S.ChatListItem onClick={() => handleItemClick(user.accountname)}>
      <S.ProfileImage
        src={String(user.image).includes('Ellipse.png') ? basicProfile : String(user.image)}
        alt='profile'
      />
      <S.ChatBox>
        <S.ChatUserName>{user.username}</S.ChatUserName>
        <S.ChatMessage>메세지 미리보기</S.ChatMessage>
      </S.ChatBox>
      <S.ChatDate>{formatDate(currentDate)}</S.ChatDate>
    </S.ChatListItem>
  );
};

export default ChatItem;
