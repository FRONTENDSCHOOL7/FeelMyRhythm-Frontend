import React from 'react';
import * as S from './ProfileModal.styled';

export default function ProfileModal() {
  return (
    <S.ProfileModalLayout>
      <S.ModalHandle></S.ModalHandle>
      <S.ModalContent>설정 및 개인정보</S.ModalContent>
      <S.ModalContent>로그아웃</S.ModalContent>
    </S.ProfileModalLayout>
  );
}
