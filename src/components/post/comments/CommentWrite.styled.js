import styled from 'styled-components';

export const CommentWriteLayout = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #dbdbdb;
  padding-top: 13px;
  padding-bottom: 16px;
  padding-left: 12px;
`;

export const UserImg = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 18px;
`;

export const BottomInput = styled.input`
  display: flex;
  border: 0;
`;

export const CommentEdit = styled.div`
  display: flex;
`;

export const PostBtn = styled.button`
  border: 0;

  margin-left: auto;
  color: #c4c4c4;
  text-align: right;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 14px;
  background-color: transparent;
  padding-right: 16px;

  &:hover {
    color: #f26e22;
  }
`;
