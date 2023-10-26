import React from 'react';
import * as S from './toggleandemoji.styled';
import Toggle from './toggle/Toggle';
import Emoji from './emoji/Emoji';

export default function ToggleAndEmoji() {
  return (
    <S.SecondBarLayout>
      <Toggle />
      <Emoji />
    </S.SecondBarLayout>
  );
}
