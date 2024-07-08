import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.textColor};
  padding-bottom: 40px;
`;

export const ImgBox = styled.div`
  position: relative;
  margin: 0 auto;
`;

export const ProfileImg = styled.img`
  width: 110px;
  height: 110px;
  z-index: 0;
  border-radius: 50%;
  object-fit: cover;
`;

export const ChangeImgBox = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.btnEnabledBgColor};
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ChangeImg = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
