import styled from 'styled-components';

export const ChatListLayout = styled.ul`
  display: flex;
  flex-direction: column;
  padding-top: 72px;
  gap: 20px;
  width: 100vw;
  height: 100vh;
  max-width: 767px;
  align-items: center;
  overflow-x: scroll;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const ChatListItem = styled.li`
  width: 100%;
  padding: 0 20px;
  height: 42px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const AlertIcon = styled.img`
  width: 12px;
  height: 12px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ProfileImage = styled.img`
  width: 42px;
  height: 42px;
  margin-right: 12px;
`;

export const ChatBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ChatUserName = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ChatMessage = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 238px;
  height: 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ChatDate = styled.span`
  color: ${({ theme }) => theme.subTextColor};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: auto;
  /* position: absolute; */
  /* bottom: 3px; */
  /* right: 0; */
`;
