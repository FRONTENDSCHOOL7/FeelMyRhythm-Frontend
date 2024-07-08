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
