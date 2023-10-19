import React from 'react';
import * as S from './chatheader.styled';
import { useNavigate } from 'react-router-dom';
import arrow from '../../../images/chat/icon-arrow-left.png';

import kebab from '../../../images/chat/icon- more-vertical.png';

export default function ChatHeader() {
  const navigate = useNavigate();
  const handleSearchClick = () => {
    navigate('/home');
  };
  return (
    <S.ChatHeaderLayout>
      <S.BackArrowButton onClick={handleSearchClick}>
        <img src={arrow} alt='back' />
      </S.BackArrowButton>
      <S.KebabButton>
        <img src={kebab} alt='modal' />
      </S.KebabButton>
    </S.ChatHeaderLayout>
  );
}
