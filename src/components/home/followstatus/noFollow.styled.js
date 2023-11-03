import styled from 'styled-components';

const FlexCenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 767px;
  width: 100vw;

  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const DefaultLayout = styled(FlexCenterContainer)`
  flex-direction: column;
  min-height: 712px;
`;

export const StyledGamgulLogo = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

export const SuggestContent = styled.p`
  color: ${({ theme }) => theme.textColor};
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: 120px;
  height: 44px;
  border-radius: 44px;
  background-color: ${({ theme }) => theme.btnEnabledBgColor};
  border: none;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;
