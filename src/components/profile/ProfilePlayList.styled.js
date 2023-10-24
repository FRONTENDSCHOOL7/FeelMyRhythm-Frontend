import styled, { css } from 'styled-components';

const mainColor = `#f26e22`;

const common = css`
  line-height: normal;
  box-sizing: border-box;
`;

export const ProfilePlayListLayout = styled.div`
  ${common}
  width: 100vw;
  height: 208px;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-left: 17px;
  background-color: #fff;
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
  overflow-y: scroll;
`;

export const PLBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 12px;
`;

export const PLImg = styled.img`
  width: 140px;
  height: 90px;
  border-radius: 8px;
  border: 0.5px solid #dbdbdb;
`;

export const PLTitleContent = styled.p`
  width: 140px;
  font-size: 14px;
  font-weight: 400;
  margin-top: 6px;

  overflow: hidden;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const PLContent = styled.p`
  color: ${mainColor};
  font-size: 12px;
  font-weight: 700;
  margin-top: 4px;
`;
