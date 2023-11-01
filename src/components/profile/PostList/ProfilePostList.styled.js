import styled from 'styled-components';

export const ProfilePostListLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  margin-top: 6px;
`;

export const PostListHeader = styled.header`
  width: 100vw;
  max-width: 767px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border: 0.5px solid #dbdbdb;
  background: #fff;
  border-left: none;
  border-right: none;
`;

const set_button_dark = `
  path {
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
  ${({ $flag }) => ($flag ? set_button_dark : '')}
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
  ${({ $flag }) => ($flag ? '' : set_button_dark)}
`;

export const PostListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${({ $flag }) => {
    return $flag ? `flex-direction : column;` : `padding: 16px;`;
  }}
  padding-bottom: 65px;
`;
