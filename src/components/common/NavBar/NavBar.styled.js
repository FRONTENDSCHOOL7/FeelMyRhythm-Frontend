import styled from 'styled-components';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { CiMenuKebab } from 'react-icons/ci';

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

  background-color: ${({ theme }) => theme.backgroundColor};

  font-family: 'Orbit-Regular';
  border-bottom: 0.5px solid #dbdbdb;

  padding-left: 16px;
  padding-right: 12px;
`;

export const HeaderTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.textColor};
`;

export const HeaderContent = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.textColor};
`;

export const SearchImg = styled(BsSearch)`
  margin-left: auto;
  fill: ${({ theme }) => theme.textColor};
  cursor: pointer;
`;

export const ArrowLeftImg = styled(AiOutlineArrowLeft)`
  margin-right: 8px;
  cursor: pointer;
  fill: ${({ theme }) => theme.textColor};
`;
export const KebabBtnImg = styled(CiMenuKebab)`
  margin-left: auto;
  cursor: pointer;
  fill: ${({ theme }) => theme.textColor};
  stroke: ${({ theme }) => theme.textColor};
`;

export const SelectBox = styled.div`
  margin-left: auto;
`;

export const SaveBtn = styled.button`
  background-color: ${({ valid, theme }) => (valid === 'done' ? theme.btnEnabledBgColor : theme.btnEnabledBgColor)};
  border-radius: 32px;
  /* margin-left: 8px; */
  margin-left: auto;
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
  background-color: ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.backgroundColor};
  border: none;
  outline: none;
`;
