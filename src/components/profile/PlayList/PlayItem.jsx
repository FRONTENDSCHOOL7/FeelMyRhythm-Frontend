import React from 'react';
import * as S from './PlayItem.styled';

export default function PlayItem({ img, title, userId }) {
  return (
    <S.ItemBox>
      <S.ItemImg src={img} />
      <S.ItemTitleContent>{title}</S.ItemTitleContent>
      <S.ItemIDContent>{userId}</S.ItemIDContent>
    </S.ItemBox>
  );
}
