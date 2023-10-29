import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../common/NavBar/NavBar';
import * as S from './chatroom.styled';
import ProfileImg from '../../../assets/images/chat/Ellipse 1.png';
import SendImg from '../../../assets/images/chat/Rectangle 65.png';
import ChatFooter from './ChatFooter';

export default function Chatroom() {
  const { accountname } = useParams();
  const [messages, setMessages] = useState([]);
  const handleSendNewMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  const today = new Date();
  let hours = today.getHours(); // 시
  let minutes = today.getMinutes(); // 분
  return (
    <>
      <NavBar chatUser={accountname} />
      <S.ChatRoomLayout>
        <S.OthersChatBox>
          <S.StyledProfileImg src={ProfileImg} alt='profile' />
          <S.MessageWrapperBox>
            <S.SpeechBubbleBox>음악 취향이 비슷하시네요!</S.SpeechBubbleBox>
            <S.TimeWrapperBox>
              <S.Time>12:39</S.Time>
            </S.TimeWrapperBox>
          </S.MessageWrapperBox>
        </S.OthersChatBox>
        <S.OthersChatBox>
          <S.StyledProfileImg src={ProfileImg} alt='profile' />
          <S.MessageWrapperBox>
            <S.StyledSendImg src={SendImg} alt='' />
            <S.TimeWrapperBox>
              <S.Time>12:41</S.Time>
            </S.TimeWrapperBox>
          </S.MessageWrapperBox>
        </S.OthersChatBox>
        {messages.map((message, index) => (
          <S.MeChatBox key={index}>
            <S.MeMessageWrapperBox>
              <S.MeTimeWrapperBox>
                <S.MeTime>{hours + ':' + minutes}</S.MeTime>
              </S.MeTimeWrapperBox>
              <S.MeSpeechBubbleBox>{message}</S.MeSpeechBubbleBox>
            </S.MeMessageWrapperBox>
          </S.MeChatBox>
        ))}
      </S.ChatRoomLayout>
      <ChatFooter onSendMessage={handleSendNewMessage} />
    </>
  );
}
