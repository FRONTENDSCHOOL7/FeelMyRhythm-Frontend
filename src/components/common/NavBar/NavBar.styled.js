import styled from 'styled-components';

export const HeaderLayout = styled.div`
  max-width: 767px;
  width: 100vw;
  height: 48px;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 20;

  background-color: #fff;

  font-family: 'Orbit-Regular';
  border-bottom: 0.5px solid #dbdbdb;

  padding-left: 16px;
  padding-right: 12px;
`;

export const HeaderTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
`;
export const HeaderContent = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

export const SearchImg = styled.img`
  margin-left: auto;
  cursor: pointer;
`;

export const ArrowLeftImg = styled.img`
  margin-right: 8px;
  cursor: pointer;
`;
export const KebabBtnImg = styled.img`
  margin-left: auto;
  cursor: pointer;
`;
export const SelectBox = styled.div`
  margin-left: auto;
`;

export const SaveBtn = styled.button`
  background-color: ${({ valid }) => (valid === 'done' ? '#F26E22' : '#FFC7A7')};
  border-radius: 32px;
  margin-left: 8px;
  padding: 7px 32px;
  color: #fff;

  font-size: 14px;
  font-weight: 500;
  text-align: center;

  border: none;
`;

export const YoutubeSearchInput = styled.input`
  width: 60%;
  margin-left: 4px;
  padding-left: 7px;
  border-radius: 32px;
  background: #f2f2f2;
  border: none;
  outline: none;
`;
