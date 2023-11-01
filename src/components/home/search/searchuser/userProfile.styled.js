import styled from 'styled-components';

export const SearchLayout = styled.div`
  min-height: 712px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding-top: 20px;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const AboutUserBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 358px;
  position: relative;
  cursor: pointer;
`;

export const StyledProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background: lightgray;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;

  border: 0.5px solid #dbdbdb;
  margin-right: 12px;
`;

export const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const H2 = styled.h2`
  color: ${({ theme }) => theme.textColor};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const H3 = styled.h3`
  color: ${({ theme }) => theme.subTextColor};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
