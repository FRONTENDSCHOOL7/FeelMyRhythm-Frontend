import styled from 'styled-components';

export const HomeLayout = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  max-width: 767px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
