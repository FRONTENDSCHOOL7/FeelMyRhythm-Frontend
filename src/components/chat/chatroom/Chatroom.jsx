import React from 'react';
import * as S from './chatroom.styled';
import ProfileImg from '../../../images/chat/Ellipse 1.png';
import SendImg from '../../../images/chat/Rectangle 65.png';
export default function Chatroom() {
  return (
    <S.ChatRoomLayout>
      <S.OthersChatsBox>
        <S.StyledProfileImg src={ProfileImg} alt='profile' />
        <S.MessageWrapperBox>
          <S.SpeechBubbleBox>
            옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와
            약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다.
          </S.SpeechBubbleBox>
          <S.TimeWrapperBox>
            <S.Time>12:39</S.Time>
          </S.TimeWrapperBox>
        </S.MessageWrapperBox>
      </S.OthersChatsBox>
      <S.OthersChatsBox>
        <S.StyledProfileImg src={ProfileImg} alt='profile' />
        <S.MessageWrapperBox>
          <S.SpeechBubbleBox>
            옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와
            약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다.
          </S.SpeechBubbleBox>
          <S.TimeWrapperBox>
            <S.Time>12:41</S.Time>
          </S.TimeWrapperBox>
        </S.MessageWrapperBox>
      </S.OthersChatsBox>

      <S.MeChatsBox>
        <S.MeMessageWrapperBox>
          <S.MeTimeWrapperBox>
            <S.MeTime>12:41</S.MeTime>
          </S.MeTimeWrapperBox>
          <S.MeSpeechBubbleBox>
            옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와
            약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다.
          </S.MeSpeechBubbleBox>
        </S.MeMessageWrapperBox>
      </S.MeChatsBox>
      <S.MeChatsBox>
        <S.MeMessageWrapperBox>
          <S.MeTimeWrapperBox>
            <S.MeTime>12:41</S.MeTime>
          </S.MeTimeWrapperBox>
          <S.StyledSendImg src={SendImg} alt='보낸사진' />
        </S.MeMessageWrapperBox>
      </S.MeChatsBox>
      <S.MeChatsBox>
        <S.MeMessageWrapperBox>
          <S.MeTimeWrapperBox>
            <S.MeTime>12:41</S.MeTime>
          </S.MeTimeWrapperBox>
          <S.StyledSendImg src={SendImg} alt='보낸사진' />
        </S.MeMessageWrapperBox>
      </S.MeChatsBox>
    </S.ChatRoomLayout>
  );
}
