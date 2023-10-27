import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import * as S from './VideoDetail.styled';
import { useRecoilValue } from 'recoil';
import { atomYoutubeWrite } from '../../store/store';

export default function VideoDetail() {
  const navigate = useNavigate();

  const { id } = useParams();
  const { state } = useLocation();
  console.log(state);

  const onShareYoutubeData = () => {
    const { title, thumbnail } = state;
    navigate('/write', { state: { id, title, thumbnail } });
  };
  return (
    <S.VideoDetailLayout>
      <S.VideoBox>
        <S.Video src={`http://www.youtube.com/embed/${id}`} />
        <S.VideoContent>{state.title}</S.VideoContent>
        <S.ShareBtn onClick={onShareYoutubeData}>공유</S.ShareBtn>
      </S.VideoBox>
    </S.VideoDetailLayout>
  );
}
