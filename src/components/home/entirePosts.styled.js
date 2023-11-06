import styled from 'styled-components';

const styleConstants = {
  textColor: '#767676',
  fontFamily: "'Orbit-Regular', sans-serif"
};

export const DefaultLayout = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  max-width: 767px;
  width: 100vw;
  height: 100vh;
  padding-bottom: 65px;
  background-color: ${({ theme }) => theme.backgroundColor};
`;
