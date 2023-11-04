import React, { useEffect, useState } from 'react';
import * as S from './Modal.styled';
import deco from '../../../assets/images/chat/modal-design.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { atomMyInfo } from '../../../store/store';
import Alert from '../Alert/Alert';

const Modal = ({ isOpen, onClose, postModal, postUser, deleteState, modalState, commentId }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const user = useRecoilValue(atomMyInfo);
  const [alertMsg, SetAlertMsg] = useState('');
  const [buttonContent, setButtonContent] = useState(['']);

  // 로그아웃, 게시글 삭제/수정 기능 연결
  const modalFunc = () => {
    if (alertMsg === '채팅방 나가기') navigate('/chat');
    if (alertMsg === '로그아웃') {
      window.localStorage.removeItem('accessToken');
      navigate('/');
    }

    onClose();
  };

  useEffect(() => {
    setButtonContent(
      postModal && user?.accountname === postUser && modalState !== 'comment'
        ? ['수정', '삭제']
        : postModal && user?.accountname !== postUser && deleteState !== true
        ? ['신고']
        : pathname.includes('/profile')
        ? ['테마 전환', '로그아웃']
        : pathname.includes('/chat')
        ? '채팅방 나가기'
        : modalState === 'comment' && user?.accountname === postUser
        ? ['삭제']
        : ['']
    );
    deleteState && SetAlertMsg('삭제된 상품 접근');
  }, [deleteState, pathname, postModal, postUser, user?.accountname]);

  if (!isOpen) {
    return null;
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <S.Backdrop onClick={handleBackdropClick}>
        {alertMsg === '삭제된 상품 접근' ? (
          ''
        ) : (
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
        )}

        <Alert
          alertMsg={alertMsg}
          modalFunc={modalFunc}
          SetAlertMsg={SetAlertMsg}
          onClose={onClose}
          commentId={commentId}
        />
      </S.Backdrop>
    </>
  );
};

export default Modal;
