import React from 'react';
import styled from 'styled-components';
import NavBar from '../../components/common/NavBar/NavBar';
import EmotionResult from '../../components/emotion/EmotionResult';

export default function EmotionResultPage() {
  const ContBox = styled.div`
    max-width: 767px;
    width: 100vw;
    background-color: ${({ theme }) => theme.backgroundColor};
  `;

  return (
    <ContBox>
      <NavBar />
      <EmotionResult />
    </ContBox>
  );
}
