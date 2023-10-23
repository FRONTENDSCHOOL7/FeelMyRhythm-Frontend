import styled, { css } from 'styled-components';

const mainColor = `#f26e22`;

const common = css`
  line-height: normal;
  box-sizing: border-box;
`;

export const ProfilePostListLayout = styled.div`
  ${common}
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin-top: 6px;
`;

export const PostListHeader = styled.header`
  width: 100vw;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border: 0.5px solid #dbdbdb;
  background: #fff;
  border-left: none;
  border-right: none;
  /*  */
`;

const change_svg = `
  svg path {
    fill: #767676;
    stroke: #767676;
  }
`;

export const HamButton = styled.button`
  padding: 0;
  margin: 0;
  width: fit-content;
  display: flex;
  justify-content: center;
  border: none;
  background-color: #fff;
  margin-right: 16px;
  ${({ $flag }) => ($flag ? change_svg : '')}
`;

export const BentoButton = styled.button`
  padding: 0;
  margin: 0;
  width: fit-content;
  display: flex;
  justify-content: center;
  border: none;
  background-color: #fff;
  margin-right: 16px;
  ${({ $flag }) => ($flag ? '' : change_svg)}
`;

export const PostListBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostBox = styled.div`
  width: 100vw;
  height: 200px;
  background-color: skyblue;
  margin-bottom: 20px;
`;

export const PostAlbumBox = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
`;

export const PostThumbnailBox = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 114px;
  height: 114px;
  margin-right: 8px;
  margin-bottom: 8px;

  /* ee */
  background-color: skyblue;
`;
