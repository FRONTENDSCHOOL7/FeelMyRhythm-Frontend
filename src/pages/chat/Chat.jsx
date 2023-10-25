import React, { useState } from 'react';
import NavBar from '../../components/common/NavBar/NavBar';
import ChatLists from '../../components/chat/chatlists/ChatLists';
import ChatRoom from '../../components/chat/chatroom/Chatroom';
import ChatFooter from '../../components/chat/chatfooter/ChatFooter';

export default function Chat() {
  const [messages, setMessages] = useState([]);

  const onSendMessage = (message) => {
    setMessages([...messages, message]);
  };
  return (
    <>
      <NavBar />
      {/* <ChatLists /> */}
      <ChatRoom />
      {/* <ChatFooter onSendMessage={onSendMessage} /> */}
    </>
  );
}
