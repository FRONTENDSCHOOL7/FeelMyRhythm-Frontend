import React, { useEffect } from 'react';
import NavBar from '../../components/common/NavBar/NavBar';
import ChatLists from '../../components/chat/chatlists/ChatLists';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import { useNavigate } from 'react-router-dom';

export default function Chat() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem('accessToken');
  //   token ?? navigate('/');
  // }, []);

  return (
    <>
      <NavBar />
      <ChatLists />
      <TabMenu />
    </>
  );
}
