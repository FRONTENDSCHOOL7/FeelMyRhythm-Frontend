import styled from 'styled-components';

const STYLE_CONSTANTS = {
  textColor: '#767676',
  fontFamily: "'Spoqa Han Sans Neo', sans-serif"
};

export const ChatListLayout = styled.ul`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  gap: 20px;
  min-height: 712px;
  width: 100vw;
  align-items: center;
  overflow-x: scroll;
`;

export const ChatListItem = styled.li`
  width: 358px;
  height: 42px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
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
  color: #000;
  font-family: ${STYLE_CONSTANTS.fontFamily};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ChatMessage = styled.p`
  color: ${STYLE_CONSTANTS.textColor};
  font-family: ${STYLE_CONSTANTS.fontFamily};
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
  color: #dbdbdb;
  font-family: ${STYLE_CONSTANTS.fontFamily};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: absolute;
  bottom: 3px;
  right: 0;
`;
