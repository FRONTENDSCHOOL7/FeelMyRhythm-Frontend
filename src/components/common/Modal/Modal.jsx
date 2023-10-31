import React from 'react';
import * as S from './Modal.styled';
import deco from '../../../assets/images/chat/modal-design.png';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { atomMyInfo } from '../../../store/store';

const Modal = ({ isOpen, onClose, postModal, postUser }) => {
  const user = useRecoilValue(atomMyInfo);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  if (!isOpen) {
    return null;
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // 로그아웃, 게시글 삭제/수정 기능 연결
  const handleModalBtnClick = (e) => {
    if (e.target.value === '채팅방 나가기') navigate('/chat');
    if (e.target.value === '로그아웃') console.log('로그아웃');
    if (e.target.value === '삭제') console.log('삭제');
    if (e.target.value === '수정') console.log('수정');
    if (e.target.value === '신고') console.log('신고');
    onClose();
  };

  const buttonContent =
    postModal && user.accountname === postUser
      ? ['수정', '삭제']
      : postModal && user.accountname !== postUser
      ? ['신고']
      : pathname.includes('/profile')
      ? ['로그아웃']
      : pathname.includes('/chat')
      ? '채팅방 나가기'
      : [''];

  return (
    <S.Backdrop onClick={handleBackdropClick}>
      <S.Modal onClick={(e) => e.stopPropagation()}>
        <S.Img src={deco} alt='Decoration' />
        {Array.isArray(buttonContent)
          ? buttonContent.map((content, index) => (
              <S.Button key={index} value={content} onClick={handleModalBtnClick}>
                <S.P>{content}</S.P>
              </S.Button>
            ))
          : buttonContent && (
              <S.Button value={buttonContent} onClick={handleModalBtnClick}>
                <S.P>{buttonContent}</S.P>
              </S.Button>
            )}
      </S.Modal>
    </S.Backdrop>
  );
};

export default Modal;
