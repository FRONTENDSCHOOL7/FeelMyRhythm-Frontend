import React from 'react';
import * as S from './chatlists.styled';
import ProfileImg from '../../../images/chat/Ellipse 1.png';

export default function ChatLists() {
  return (
    <S.ChatListsLayout>
      <S.Li>
        <S.StyledProfileImg src={ProfileImg} alt='profile' />
        <S.UserChatBox>
          <S.H2>애월읍 위니브 감귤농장</S.H2>
          <S.P>이번엔 정정언제하맨마씸?</S.P>
        </S.UserChatBox>
        <S.Span>2020.10.13</S.Span>
      </S.Li>
    </S.ChatListsLayout>
  );
}
