import * as S from './toggle.styled';
import React, { useState } from 'react';

export default function Toggle({ setIsToggled }) {
  const handleToggleChange = () => {
    setIsToggled((prevState) => !prevState);
  };

  return (
    <div>
      <S.ToggleBox>
        <label className='switch'>
          <S.Input type='checkbox' onChange={handleToggleChange} />
          <S.Slider />
        </label>
      </S.ToggleBox>
    </div>
  );
}
