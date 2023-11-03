import React from 'react';
import * as S from './Write.styled';
import userlogo from '../../assets/images/home/basic-profile.png';
import { useNavigate } from 'react-router-dom';
import addImg from '../../assets/images/write/upload.svg';
import { useRecoilValue } from 'recoil';
import { atomMyInfo } from '../../store/store';

export default function Write({ state, postContent, handleChangeInput, textInputRef }) {
  const navigate = useNavigate();
  const user = useRecoilValue(atomMyInfo);
  console.log(user);
  return (
    <S.WriteLayout>
      <S.Upload>
        <S.UserImg src={String(user?.image).includes('Ellipse.png') ? userlogo : user?.image} />
        <S.TextInput
          type='text'
          ref={textInputRef}
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
      <S.UploadBtn type='button' onClick={() => navigate('/youtubesearch')}>
        <S.AddImg src={addImg} />
      </S.UploadBtn>
    </S.WriteLayout>
  );
}
