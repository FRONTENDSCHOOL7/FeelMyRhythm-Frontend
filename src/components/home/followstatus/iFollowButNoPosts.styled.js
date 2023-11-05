import styled from 'styled-components';
export const DefaultLayout = styled.div`
  flex-direction: column;
  min-height: 712px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 767px;
  width: 100%;

  background-color: ${({ theme }) => theme.backgroundColor};
`;
export const StyledLogo = styled.div`
  width: auto;
  height: auto;
  margin-bottom: 20px;
`;

export const WordBox = styled.div`
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const P = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  text-align: center;
`;
