import React, { useEffect } from 'react';
import Chatroom from '../../components/chat/chatroom/Chatroom';
import { useNavigate } from 'react-router-dom';
export default function ChatRoom() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    token ?? navigate('/');
  }, []);

  return (
    <>
      <Chatroom />
    </>
  );
}
