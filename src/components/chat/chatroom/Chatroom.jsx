import React, { useState } from 'react';
import * as S from './chatroom.styled';
import ProfileImg from '../../../assets/images/chat/Ellipse 1.png';
import SendImg from '../../../assets/images/chat/Rectangle 65.png';
import ChatFooter from '../chatfooter/ChatFooter';

export default function Chatroom() {
  const [messages, setMessages] = useState([]);
  const handleSendNewMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };
  return (
    <>
      <S.ChatRoomLayout>
        <S.OthersChatBox>
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
        </S.OthersChatBox>
        <S.OthersChatBox>
          <S.StyledProfileImg src={ProfileImg} alt='profile' />
          <S.MessageWrapperBox>
            <S.SpeechBubbleBox>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi impedit natus delectus ipsum aut quia
              dignissimos ab harum dolorum officiis similique, culpa voluptate consectetur voluptatem sapiente
              blanditiis rem repellendus dolor!
            </S.SpeechBubbleBox>
            <S.TimeWrapperBox>
              <S.Time>12:41</S.Time>
            </S.TimeWrapperBox>
          </S.MessageWrapperBox>
        </S.OthersChatBox>
        <S.OthersChatBox>
          <S.StyledProfileImg src={ProfileImg} alt='profile' />
          <S.MessageWrapperBox>
            <S.StyledSendImg src={SendImg} alt='받은사진' />
            <S.TimeWrapperBox>
              <S.Time>12:41</S.Time>
            </S.TimeWrapperBox>
          </S.MessageWrapperBox>
        </S.OthersChatBox>
        <S.MeChatBox>
          <S.MeMessageWrapperBox>
            <S.MeTimeWrapperBox>
              <S.MeTime>12:41</S.MeTime>
            </S.MeTimeWrapperBox>
            <S.MeSpeechBubbleBox>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, iure!
            </S.MeSpeechBubbleBox>
          </S.MeMessageWrapperBox>
        </S.MeChatBox>
        <S.MeChatBox>
          <S.MeMessageWrapperBox>
            <S.MeTimeWrapperBox>
              <S.MeTime>12:41</S.MeTime>
            </S.MeTimeWrapperBox>
            <S.StyledSendImg src={SendImg} alt='보낸사진' />
          </S.MeMessageWrapperBox>
        </S.MeChatBox>
        {messages.map((message, index) => (
          <S.MeChatBox key={index}>
            <S.MeMessageWrapperBox>
              <S.MeSpeechBubbleBox>{message}</S.MeSpeechBubbleBox>
            </S.MeMessageWrapperBox>
          </S.MeChatBox>
        ))}
      </S.ChatRoomLayout>
      <ChatFooter onSendMessage={handleSendNewMessage} />
    </>
  );
}
