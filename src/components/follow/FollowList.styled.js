import styled from 'styled-components';

const mainColor = `#f26e22`;

export const ProfileFollowersLayout = styled.div`
  width: 100vw;
  background: #fff;

  display: flex;
  box-sizing: border-box;
  flex-direction: column;
`;

export const FollowerRowBox = styled.div`
  padding: 0 16px;

  display: flex;
  flex-direction: column;
`;

export const FollowerBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

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
`;
export const FollowerTitleContent = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

export const FollowerIntroContent = styled.p`
  color: #767676;
  font-size: 12px;
  margin-top: 6px;
`;

export const FollowerButton = styled.button`
  width: 56px;
  height: 28px;
  font-size: 12px;
  color: #fff;
  background-color: ${mainColor};
  border-radius: 26px;
  border: none;
`;
export const FollowerPauseButton = styled.button`
  width: 56px;
  height: 28px;
  font-size: 12px;
  color: #767676;
  background-color: #fff;
  border-radius: 26px;
  border: 1px solid var(--DBDBDB, #dbdbdb);
`;
