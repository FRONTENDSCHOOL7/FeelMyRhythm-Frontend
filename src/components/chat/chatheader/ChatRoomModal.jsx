import React from 'react';
import * as S from './chatroommodal.styled';
import deco from '../../../images/chat/modal-design.png';
import { useNavigate } from 'react-router-dom';

const ChatRoomModal = ({ isOpen, onClose, children }) => {
  const navigate = useNavigate();

  if (!isOpen) {
    return null;
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleLeaveButtonClick = () => {
    navigate('/home');
    onClose();
  };

  return (
    <S.Backdrop onClick={handleBackdropClick}>
      <S.Modal onClick={(e) => e.stopPropagation()}>
        {children}
        <S.Img src={deco} alt='Decoration' />
        <S.Button onClick={handleLeaveButtonClick}>
          <S.P>채팅방나가기</S.P>
        </S.Button>
      </S.Modal>
    </S.Backdrop>
  );
};

export default ChatRoomModal;
