import React, { useState } from 'react';
import * as S from './SecondBar.styled';
import Toggle from './Toggle/Toggle';
import SelectBox from '../../common/SelectBox/SelectBox';

export default function SecondBar({ setIsToggled }) {
  return (
    <S.SecondBarLayout>
      <Toggle setIsToggled={setIsToggled} />
      <SelectBox />
    </S.SecondBarLayout>
  );
}
