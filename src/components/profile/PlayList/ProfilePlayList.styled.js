import styled from 'styled-components';

export const ProfilePlayListLayout = styled.div`
  width: 100vw;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-left: 17px;
  margin-top: 6px;
  border: 0.5px solid #dbdbdb;
  border-left: none;
  border-right: none;
`;

export const TitleContent = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

export const PLContainerBox = styled.div`
  display: flex;
  margin-top: 16px;
  white-space: nowrap;
  padding-bottom: 15px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
