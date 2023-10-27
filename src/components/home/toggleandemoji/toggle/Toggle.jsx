import * as S from './toggle.styled';
import React from 'react';

export default function Toggle() {
  return (
    <S.ToggleBox>
      <label className='switch'>
        <S.Input type='checkbox' />
        <S.Slider />
      </label>
    </S.ToggleBox>
  );
}
