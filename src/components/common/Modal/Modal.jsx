import React from 'react';
import * as S from './Modal.styled';
import deco from '../../../assets/images/chat/modal-design.png';
import { useLocation, useNavigate } from 'react-router-dom';

const Modal = ({ isOpen, onClose }) => {
  //   const navigate = useNavigate();
  const { pathname } = useLocation();

  if (!isOpen) {
    return null;
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleLeaveButtonClick = () => {
    // navigate('/home');
    onClose();
  };

  const buttonContent =
    pathname === '/write'
      ? '삭제'
      : pathname === '/profile'
      ? ['삭제', '수정']
      : pathname === '/chat'
      ? '채팅방 나가기'
      : 'null';

  return (
    <S.Backdrop onClick={handleBackdropClick}>
      <S.Modal onClick={(e) => e.stopPropagation()}>
        <S.Img src={deco} alt='Decoration' />
        {Array.isArray(buttonContent)
          ? buttonContent.map((content, index) => (
              <S.Button key={index} onClick={handleLeaveButtonClick}>
                <S.P>{content}</S.P>
              </S.Button>
            ))
          : buttonContent && (
              <S.Button onClick={handleLeaveButtonClick}>
                <S.P>{buttonContent}</S.P>
              </S.Button>
            )}
      </S.Modal>
    </S.Backdrop>
  );
};

export default Modal;
