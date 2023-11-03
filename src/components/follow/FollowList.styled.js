import styled from 'styled-components';

export const ProfileFollowersLayout = styled.div`
  max-width: 767px;
  width: 100vw;
  background: #fff;

  display: flex;
  box-sizing: border-box;
  flex-direction: column;
`;

export const FollowerRowBox = styled.div`
  padding: 0 16px;

  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FollowerBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  width: 100%;

  * {
    flex-shrink: 0;
  }
`;

export const FollowerImgBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  overflow: hidden;
  border: 0.5px solid #dbdbdb;
  background-color: #dbdbdb;
  img {
    width: 100%;
  }
  cursor: pointer;
`;
export const FollowerTextBox = styled.div`
  width: 62%;
  cursor: pointer;
  margin-left: 14px;
`;
export const FollowerTitleContent = styled.p`
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;

export const FollowerIntroContent = styled.p`
  color: #767676;
  font-size: 12px;
  margin-top: 6px;
  cursor: pointer;
`;

export const FollowerButton = styled.button`
  width: 60px;
  height: 30px;
  font-size: 12px;
  color: #fff;
  background-color: ${({ theme }) => theme.btnEnabledBgColor};
  border-radius: 26px;
  border: none;
  margin-left: auto;
`;
export const FollowerPauseButton = styled.button`
  width: 60px;
  height: 30px;
  font-size: 12px;
  color: #767676;
  background-color: #fff;
  border-radius: 26px;
  border: 1px solid var(--DBDBDB, #dbdbdb);
  margin-left: auto;
`;
