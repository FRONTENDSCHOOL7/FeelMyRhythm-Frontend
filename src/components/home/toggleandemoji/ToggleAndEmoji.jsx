import React from 'react';
import * as S from './toggleAndEmoji.styled';

export default function ToggleAndEmoji() {
  return (
    <S.SecondBarLayout>
      <S.ToggleBox>
        <label className='switch'>
          <S.Input type='checkbox' />
          <S.Slider />
        </label>
      </S.ToggleBox>
      <S.EmojiBox>😀</S.EmojiBox>
    </S.SecondBarLayout>
  );
}
