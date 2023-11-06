import styled from 'styled-components';

const set_ham = `
  margin-bottom: 20px;
  width: 100vw;
`;

const set_ben = `
  display: flex;
  width: 31.75%;
  aspect-ratio: 1;
  overflow: hidden;
  margin-right: 2.25%;
  margin-bottom: 8px;
  &:nth-child(3n) {
      margin-right: 0;
  }
`;
export const PostBox = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  max-width: 767px;
  cursor: pointer;
  ${({ $flag }) => {
    return $flag ? set_ham : set_ben;
  }}
`;

export const albumImg = styled.img`
  height: 135%;
  transform: translate(-20%, -13%);
`;
