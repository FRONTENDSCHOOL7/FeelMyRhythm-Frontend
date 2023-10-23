import styled from 'styled-components';

export const ProfileHeaderLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;

  border-bottom: 0.5px solid #dbdbdb;
  background-color: #fff;
`;

export const NavButton = styled.button`
  border: none;
  background-color: #fff;
  width: fit-content;
  height: fit-content;
  padding: 3px 12px 0 16px;
`;

export const NavContent = styled.p`
  font-size: 14px;
  margin-left: 8px;
`;
