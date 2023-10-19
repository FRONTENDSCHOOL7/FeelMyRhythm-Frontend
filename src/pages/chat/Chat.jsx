import React from 'react';
import Header from '../../components/common/Header/Header';
import ChatHeader from '../../components/chat/chatheader/ChatHeader';
import Footer from '../../components/common/Footer/Footer';
import ChatLists from '../../components/chat/chatlists/ChatLists';
import ChatRoom from '../../components/chat/chatroom/Chatroom';

export default function Chat() {
  return (
    <>
      <ChatHeader />
      {/* <ChatLists /> */}
      <ChatRoom />
      <Footer />
    </>
  );
}
