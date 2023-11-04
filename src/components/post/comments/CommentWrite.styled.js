import styled from 'styled-components';

export const CommentWriteLayout = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #dbdbdb;
  padding-top: 13px;
  padding-bottom: 16px;
  padding-left: 12px;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const UserImg = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 42px;
  margin-right: 18px;
`;

export const BottomInput = styled.input`
  display: flex;
  border: 0;
  max-width: 767px;
  width: 70%;
  outline: none;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.backgroundColor};
  &::placeholder {
    color: ${({ theme }) => theme.textColor};
  }
`;

export const CommentEdit = styled.div`
  display: flex;
`;

export const PostBtn = styled.button`
  border: 0;

  margin-left: auto;
  color: ${({ theme }) => theme.subTextColor};
  text-align: right;
  font-family: 'Orbit-Regular';
  font-size: 14px;
  background-color: transparent;
  padding-right: 16px;

  &:hover {
    color: ${({ theme }) => theme.textColor};
  }
`;
