import styled from 'styled-components';

const styleConstants = {
  fontFamily: "'Orbit-Regular', sans-serif"
};

export const DefaultLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 712px;
  width: 100vw;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 65px;
  gap: 24px;
  color: ${({ $textColor }) => $textColor};
`;
