import React, { useState } from 'react';
import * as S from './Modal.styled';
import deco from '../../../assets/images/chat/modal-design.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { atomMyInfo } from '../../../store/store';
import Alert from '../Alert/Alert';

const Modal = ({ isOpen, onClose, postModal, postUser }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [user, SetUserInfo] = useRecoilState(atomMyInfo);
  const [alertMsg, SetAlertMsg] = useState('');

  if (!isOpen) {
    return null;
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const buttonContent =
    postModal && user.accountname === postUser
      ? ['수정', '삭제']
      : postModal && user.accountname !== postUser
      ? ['신고']
      : pathname.includes('/profile')
      ? ['테마 전환', '로그아웃']
      : pathname.includes('/chat')
      ? '채팅방 나가기'
      : [''];

  // 로그아웃, 게시글 삭제/수정 기능 연결
  const modalFunc = () => {
    if (alertMsg === '채팅방 나가기') navigate('/chat');
    if (alertMsg === '로그아웃') {
      window.localStorage.removeItem('accessToken');
      navigate('/');
    }
    if (alertMsg === '삭제') console.log('삭제');
    if (alertMsg === '수정') console.log('수정');
    if (alertMsg === '신고') console.log('신고');
    if (alertMsg === '테마 전환') console.log('라이트모드/다크모드 변신');
    onClose();
  };

  return (
    <>
      <S.Backdrop onClick={handleBackdropClick}>
        <S.Modal onClick={(e) => e.stopPropagation()}>
          <S.Img src={deco} alt='Decoration' />
          {Array.isArray(buttonContent)
            ? buttonContent.map((content, index) => (
                <S.Button key={index} value={content} onClick={() => SetAlertMsg(content)}>
                  <S.P>{content}</S.P>
                </S.Button>
              ))
            : buttonContent && (
                <>
                  <S.Button value={buttonContent} onClick={() => SetAlertMsg(buttonContent)}>
                    <S.P>{buttonContent}</S.P>
                  </S.Button>
                </>
              )}
        </S.Modal>
        <Alert alertMsg={alertMsg} modalFunc={modalFunc} SetAlertMsg={SetAlertMsg} onClose={onClose} />
      </S.Backdrop>
    </>
  );
};

export default Modal;
