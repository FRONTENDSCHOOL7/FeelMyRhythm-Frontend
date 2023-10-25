import styled from 'styled-components';

const set_ham = `
  // 임시 높이값
  height: 200px;
  margin-bottom: 20px;
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
  background-color: #bdbdbd;
  cursor: pointer;
  ${({ $flag }) => {
    return $flag ? set_ham : set_ben;
  }}
`;
