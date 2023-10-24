import styled from 'styled-components';

export const CommentwriteLayout = styled.div`
  display: flex;
  border-top: 1px solid #dbdbdb;
`;

export const UserImg = styled.img`
  margin: 13px 18px 12px 16px;
`;

export const BottomInput = styled.input`
  display: flex;
  margin: 20px 110px 20px 0;
  border: 0;
`;

export const CommentEdit = styled.div`
  display: flex;
`;

export const PostBtn = styled.button`
  border: 0;
  color: #c4c4c4;
  text-align: right;
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  background-color: transparent;

  margin: 23px 16px 20px 0;

  &:hover {
    color: #f26e22;
  }
`;
