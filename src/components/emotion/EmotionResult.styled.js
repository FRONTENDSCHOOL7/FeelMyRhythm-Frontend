import styled from 'styled-components';

export const EmotionResultLayout = styled.div`
  max-width: 767px;
  width: 100vw;
  height: 100vh;
  padding-top: 70px;
  background-color: ${({ theme }) => theme.backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const H1 = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.textColor};
`;

export const H2 = styled.h3`
  font-size: 18px;
  color: ${({ theme }) => theme.subTextColor};
`;

export const Highlight = styled.strong`
  font-weight: 700;
  color: ${({ theme }) => theme.textColor};
`;

export const ContentBox = styled.div`
  max-width: 767px;
  width: 100vw;
  display: flex;
  border-top: 0.5px solid #dbdbdb;
  border-bottom: 0.5px solid #dbdbdb;
`;

export const Button = styled.button`
  width: 322px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 44px;
  border: none;
  color: ${({ theme }) => theme.btnTextColor};
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  background-color: ${({ postLength, theme }) =>
    postLength !== 1 ? theme.btnEnabledBgColor : theme.btnDisabledBgColor};
`;
