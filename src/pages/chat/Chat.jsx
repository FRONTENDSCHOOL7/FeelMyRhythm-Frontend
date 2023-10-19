import React from 'react';
import Header from '../../components/common/Header/Header';
import ChatHeader from '../../components/chat/chatheader/ChatHeader';
import Footer from '../../components/common/Footer/Footer';
import ChatLists from '../../components/chat/chatlists/ChatLists';

export default function Chat() {
  return (
    <>
      <ChatHeader />
      <ChatLists />
      <Footer />
    </>
  );
}
