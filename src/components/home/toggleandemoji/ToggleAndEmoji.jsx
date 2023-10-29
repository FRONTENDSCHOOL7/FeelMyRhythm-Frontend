import React, { useState } from 'react';
import * as S from './toggleAndEmoji.styled';
import Toggle from './toggle/Toggle';
import Emoji from './emoji/Emoji';

export default function ToggleAndEmoji({ setIsToggled }) {
  return (
    <S.SecondBarLayout>
      <Toggle setIsToggled={setIsToggled} />
      <Emoji />
    </S.SecondBarLayout>
  );
}
