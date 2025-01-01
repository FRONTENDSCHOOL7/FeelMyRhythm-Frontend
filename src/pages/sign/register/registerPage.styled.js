import styled from 'styled-components';

export const RegisterLayout = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  max-width: 767px;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor};
  padding-left: 34px;
  padding-right: 34px;
`;

export const RegisterButton = styled.button`
  /* background-color: ${({ valid, theme }) =>
    valid === 'done' ? theme.btnEnabledBgColor : theme.btnDisabledBgColor}; */
  background-color: ${({ theme }) => theme.btnEnabledBgColor};
  border-radius: 44px;
  border: none;

  margin-top: 14px;
  padding: 13px 0;

  color: ${({ theme }) => theme.btnTextColor};

  font-size: 14px;
  font-weight: 500;
  outline: none;
`;
