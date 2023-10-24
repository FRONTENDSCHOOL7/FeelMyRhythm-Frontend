import styled from 'styled-components';

const mainColor = `#f26e22`;

export const ProfileInfoLayout = styled.div`
  width: 100vw;
  height: 314px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 30px;
  background-color: #fff;
  border: 0.5px solid #dbdbdb;
  border-left: none;
  border-right: none;
`;

export const RowBox = styled.div`
  display: flex;
  align-items: center;
`;

export const ColBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ImgBox = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  margin: 0 40px;
`;

export const FollowText = styled.p`
  color: #767676;
  font-size: 10px;
  margin-bottom: 6px;
`;

export const FollowNum = styled.p`
  color: ${({ $fontColor }) => $fontColor};
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;

export const TitleContent = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-top: 16px;
`;

export const IDContent = styled.p`
  color: #767676;
  font-size: 12px;
  margin-top: 6px;
`;

export const IntroContent = styled.p`
  color: #767676;
  font-size: 14px;
  margin-top: 16px;
`;

export const RowButtonBox = styled(RowBox)`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 24px;
`;

// export const IconButton = styled.button`
//   width: 34px;
//   height: 34px;
//   border-radius: 30px;
//   border: 1px solid var(--DBDBDB, #dbdbdb);
//   background-color: #fff;
//   padding-top: 3px;
// `;

export const FollowButton = styled.button`
  color: ${({ $follow }) => (!$follow ? '#dbdbdb' : '#fff')};
  border: ${({ $follow }) => (!$follow ? '1px solid #dbdbdb' : 'none')};
  background-color: ${({ $follow }) => (!$follow ? '#fff' : mainColor)};
  width: 120px;
  height: 34px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 500;
`;

export const LinkButton = styled.button`
  width: ${(props) => props.$width};
  height: 34px;
  color: #767676;
  border-radius: 30px;
  border: 1px solid #dbdbdb;
  background: #fff;
  font-size: 14px;
`;
