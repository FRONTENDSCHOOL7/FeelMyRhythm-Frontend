import styled from 'styled-components';

const styleConstants = {
  textColor: '#767676',
  fontFamily: "'Spoqa Han Sans Neo', sans-serif"
};

export const SearchLayout = styled.div`
  min-height: 712px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding-top: 20px;
`;

export const AboutUserBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 358px;
  position: relative;
  cursor: pointer;
  background-color: green;
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
  color: ${(props) => (props.color ? '#F26E22' : '#000')};
  font-family: ${styleConstants.fontFamily};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const H3 = styled.h3`
  color: ${styleConstants.textColor};
  font-family: ${styleConstants.fontFamily};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
