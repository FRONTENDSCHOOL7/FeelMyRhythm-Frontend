import React from 'react';
import * as S from './PlayItem.styled';
import { useParams, useNavigate } from 'react-router-dom';

export default function PlayItem({ postId, img, title, userId, productId, youtubeId }) {
  const navigate = useNavigate();

  const onNavigateDetailPost = () => {
    navigate(`/post/${postId}`, { state: { productId, youtubeId } });
  };

  return (
    <S.ItemBox onClick={onNavigateDetailPost}>
      <S.ItemImgBox>
        <S.ItemImg src={img} />
      </S.ItemImgBox>
      <S.ItemTitleContent>{title}</S.ItemTitleContent>
      <S.ItemIDContent>{'@' + userId}</S.ItemIDContent>
    </S.ItemBox>
  );
}
