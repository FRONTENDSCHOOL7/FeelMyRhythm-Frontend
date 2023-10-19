import React from 'react';
import * as S from './chatlists.styled';
import ProfileImg from '../../../images/chat/Ellipse 1.png';
import OrangeDot from '../../../images/chat/orange-dot.png';

export default function ChatLists() {
  return (
    <S.ChatListsLayout>
      <S.Li>
        <S.OrangeDot src={OrangeDot} alt='alert' />
        <S.StyledProfileImg src={ProfileImg} alt='profile' />
        <S.UserChatBox>
          <S.H2>애월읍 위니브 감귤농장</S.H2>
          <S.P>이번엔 정정언제하맨마씸?</S.P>
        </S.UserChatBox>
        <S.Span>2020.10.13</S.Span>
      </S.Li>
      <S.Li>
        <S.OrangeDot src={OrangeDot} alt='alert' />
        <S.StyledProfileImg src={ProfileImg} alt='profile' />
        <S.UserChatBox>
          <S.H2>제주감귤마을</S.H2>
          <S.P>깊은 어둠의 존재감, 롤스로이스 뉴 블랙 배지...</S.P>
        </S.UserChatBox>
        <S.Span>2020.2.25</S.Span>
      </S.Li>
      <S.Li>
        <S.OrangeDot src={OrangeDot} alt='alert' />
        <S.StyledProfileImg src={ProfileImg} alt='profile' />
        <S.UserChatBox>
          <S.H2>누구네 농장 친환경 한라봉</S.H2>
          <S.P>
            내 차는 내가 평가한다. 오픈 이벤트에 참여 하내 차는 내가 평가한다. 오픈 이벤트에 참여 하내 차는 내가
            평가한다. 오픈 이벤트에 참여 하내 차는 내가 평가한다.
          </S.P>
        </S.UserChatBox>
        <S.Span>2020.2.25</S.Span>
      </S.Li>
    </S.ChatListsLayout>
  );
}
