import styled from 'styled-components';

const set_ham = `
  margin-bottom: 20px;
  padding : 16px 21px;
`;

const set_ben = `
  display: flex;
  width: 114px;
  height: 114px;
  margin-right: 8px;
  margin-bottom: 8px;
  &:nth-child(3n) {
      margin-right: 0;
  }
`;
export const PostBox = styled.div`
  cursor: pointer;
  ${({ $flag }) => {
    return $flag ? set_ham : set_ben;
  }}
`;

export const albumImg = styled.img`
  width: 100%;
  height: 100%;
`;
