import styled from 'styled-components';

export const EmotionCheckLayout = styled.div`
  max-width: 767px;
  width: 100vw;
  height: 100vh;
  padding-top: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  background-color: transparent;
`;

export const H1 = styled.h1`
  font-family: 'Orbit-Regular';
  font-size: 18px;
  color: ${({ theme }) => theme.textColor};
`;

export const ContentBox = styled.video`
  width: 390px;
  height: 300px;

  background-color: transparent;
`;

export const ContentCanvas = styled.canvas`
  width: 440px;
  height: 650px;
  display: none;
`;

export const Button = styled.button`
  width: 322px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 44px;
  border: none;
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  background-color: ${({ $buttonState, theme }) => ($buttonState ? theme.btnDisabledBgColor : theme.btnEnabledBgColor)};
`;
