import React from 'react';
import * as S from './Write.sytled';
import userlogo from '../../assets/images/write/profile-img.png';

export default function Write() {
  return (
    <S.WriteLayout>
      <S.Upload>
        <S.UserImg src={userlogo} />
        <S.TxtInput type='text' placeholder='게시글 입력하기...' />
      </S.Upload>
      <S.UploadBtn type='button'></S.UploadBtn>
    </S.WriteLayout>
  );
}
