import React from 'react';
import * as S from './Write.sytled';
import userlogo from '../../assets/images/write/profile-img.png';

export default function Write({ postContent, handleChangeInput }) {
  return (
    <S.WriteLayout>
      <S.Upload>
        <S.UserImg src={userlogo} />
        <S.TextInput
          type='text'
          value={postContent.post.content}
          placeholder='게시글 입력하기...'
          onChange={(e) => handleChangeInput(e)}
        />
      </S.Upload>
      <S.UploadBtn type='button'></S.UploadBtn>
    </S.WriteLayout>
  );
}
