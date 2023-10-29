import React from 'react';
import NavBar from '../../components/common/NavBar/NavBar';
import ChatLists from '../../components/chat/chatlists/ChatLists';
import TabMenu from '../../components/common/TabMenu/TabMenu';

export default function Chat() {
  return (
    <>
      <NavBar />
      <ChatLists />
      <TabMenu />
    </>
  );
}
