import styled from 'styled-components';

export const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 767px;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor};
`;
