import React from 'react';
import * as S from './PlayItem.styled';
import { useParams, useNavigate } from 'react-router-dom';

export default function PlayItem({ postId, img, title, userId }) {
  const navigate = useNavigate();
  return (
    <S.ItemBox onClick={() => navigate('/post/' + postId)}>
      <S.ItemImg src={img} />
      <S.ItemTitleContent>{title}</S.ItemTitleContent>
      <S.ItemIDContent>{'@' + userId}</S.ItemIDContent>
    </S.ItemBox>
  );
}
