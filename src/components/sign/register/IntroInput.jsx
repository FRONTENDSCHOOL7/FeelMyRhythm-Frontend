import React from 'react';
import * as S from './register.styled';

export default function IntroInput({ intro, setIntro }) {
  const handleChangeUserInfo = (e) => {
    setIntro(e.target.value);
  };
  return (
    <>
      <S.InputBox>
        <S.SubContent>소개</S.SubContent>
        <S.CheckBox>
          <S.Input
            type='text'
            placeholder='소개글을 입력해주세요.'
            value={intro}
            onChange={(e) => handleChangeUserInfo(e)}
          />
        </S.CheckBox>
      </S.InputBox>
    </>
  );
}
