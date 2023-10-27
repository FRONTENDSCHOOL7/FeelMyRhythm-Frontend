import React from 'react';
import * as S from './Write.styled';
import userlogo from '../../assets/images/write/profile-img.png';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Write({ state, postContent, handleChangeInput }) {
  const navigate = useNavigate();

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
      {state && (
        <S.VideoBox>
          <S.Video src={`http://www.youtube.com/embed/${state.id}`} />
          <S.VideoContent>{state.title}</S.VideoContent>
        </S.VideoBox>
      )}
      <S.UploadBtn type='button' onClick={() => navigate('/youtubesearch')} />
    </S.WriteLayout>
  );
}
