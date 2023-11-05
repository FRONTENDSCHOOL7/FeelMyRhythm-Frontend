import styled from 'styled-components';
export const DefaultLayout = styled.div`
  flex-direction: column;
  min-height: 712px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 767px;
  width: 100vw;

  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const StyledGamgulLogo = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

export const WordBox = styled.div`
  color: ${({ theme }) => theme.textColor};
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  margin-bottom: 20px;
`;
