import styled from 'styled-components';

const styleConstants = {
  textColor: '#767676',
  fontFamily: "'Orbit-Regular', sans-serif"
};

export const DefaultLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 712px;
  max-width: 767px;
  width: 100vw;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 65px;

  background-color: ${({ theme }) => theme.backgroundColor};
`;
