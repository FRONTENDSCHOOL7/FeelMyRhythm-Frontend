import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../common/NavBar/NavBar';
import * as S from './chatroom.styled';
import basicProfile from '../../../assets/images/common/basic-profile.svg';
import SendImg from '../../../assets/images/chat/RockFestival.jpeg';
import ChatFooter from './ChatFooter';

export default function Chatroom() {
  const { accountname } = useParams();
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);
  const renderMessageContent = (messageContent) => {
    if (messageContent.startsWith('data:image')) {
      return <img src={messageContent} alt='User Uploaded img' style={{ maxWidth: '200px' }} />;
    } else {
      return messageContent;
    }
  };
  const handleSendNewMessage = (newMessageContent) => {
    const currentTime = new Date();
    const message = {
      content: newMessageContent,
      time: {
        hours: formatTime(currentTime.getHours()),
        minutes: formatTime(currentTime.getMinutes())
      }
    };
    setMessages([...messages, message]);
  };
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  const today = new Date();
  let hours = today.getHours(); // 시
  let minutes = today.getMinutes(); // 분
  const formatTime = (num) => {
    return num < 10 ? '0' + num : num;
  };

  const formattedHours = formatTime(hours);
  const formattedMinutes = formatTime(minutes);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate(`/profile/${accountname}`);
  };
  return (
    <>
      <NavBar chatUser={accountname} />
      <S.ChatRoomLayout>
        <S.OthersChatBox>
          <S.StyledProfileImg src={basicProfile} alt='profile' onClick={handleProfileClick} />
          <S.MessageWrapperBox>
            <S.SpeechBubbleBox>음악 취향이 비슷하시네요!</S.SpeechBubbleBox>
            <S.TimeWrapperBox>
              <S.Time>12:39</S.Time>
            </S.TimeWrapperBox>
          </S.MessageWrapperBox>
        </S.OthersChatBox>
        <S.OthersChatBox>
          <S.StyledProfileImg src={basicProfile} alt='profile' onClick={handleProfileClick} />
          <S.MessageWrapperBox>
            <S.StyledSendImg src={SendImg} alt='' />
            <S.TimeWrapperBox>
              <S.Time>12:41</S.Time>
            </S.TimeWrapperBox>
          </S.MessageWrapperBox>
        </S.OthersChatBox>
        {messages.map((message, index) => {
          const messageContent = typeof message === 'object' ? message.content : message;
          const messageTime = typeof message === 'object' ? message.time : { hours: hours, minutes: minutes };
          return (
            <S.MeChatBox key={index}>
              <S.MeMessageWrapperBox>
                <S.MeTimeWrapperBox>
                  <S.MeTime>{messageTime.hours + ':' + messageTime.minutes}</S.MeTime>
                </S.MeTimeWrapperBox>
                <S.MeSpeechBubbleBox>{renderMessageContent(messageContent)}</S.MeSpeechBubbleBox>
              </S.MeMessageWrapperBox>
            </S.MeChatBox>
          );
        })}

        <div ref={messagesEndRef}></div>
      </S.ChatRoomLayout>
      <ChatFooter onSendMessage={handleSendNewMessage} />
    </>
  );
}
