import styled from 'styled-components';

const styleConstants = {
  textColor: '#767676',
  fontFamily: "'Spoqa Han Sans Neo', sans-serif"
};

export const DefaultLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 712px;
  width: 100vw;
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 24px;
  gap: 24px;
`;
