import React from 'react';
import * as S from './register.styled';

export default function NickNameInput({ nickname, setNickname, nicknameRef, nicknameValidState }) {
  const handleChangeUserInfo = (e) => {
    setNickname(e.target.value);
  };
  return (
    <>
      <S.InputBox>
        <S.SubContent>닉네임</S.SubContent>
        <S.CheckBox>
          <S.Input
            type='text'
            placeholder='닉네임을 입력해주세요.'
            ref={nicknameRef}
            value={nickname}
            onChange={(e) => handleChangeUserInfo(e)}
          />
        </S.CheckBox>
      </S.InputBox>
      <S.NicknameWarningContent>{nicknameValidState}</S.NicknameWarningContent>
    </>
  );
}
