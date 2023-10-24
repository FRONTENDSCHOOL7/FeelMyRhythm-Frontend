import React, { useState } from 'react';
import * as S from './chatheader.styled';
import { useNavigate } from 'react-router-dom';
import arrow from '../../../assets/images/chat/icon-arrow-left.png';
import kebab from '../../../assets/images/chat/icon- more-vertical.png';
import ChatRoomModal from './ChatRoomModal';

export default function ChatHeader() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchClick = () => {
    navigate('/home');
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <S.ChatHeaderLayout>
      <S.BackArrowButton onClick={handleSearchClick}>
        <img src={arrow} alt='back' />
      </S.BackArrowButton>
      <S.KebabButton onClick={toggleModal}>
        <img src={kebab} alt='modal' />
      </S.KebabButton>
      <ChatRoomModal isOpen={isModalOpen} onClose={toggleModal}></ChatRoomModal>
    </S.ChatHeaderLayout>
  );
}
