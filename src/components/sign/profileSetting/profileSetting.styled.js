import styled from 'styled-components';

export const ProfileSettingLayout = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`;

export const Title = styled.h2`
  text-align: center;
  font-family: Spoqa Han Sans Neo;
  font-size: 24px;
  font-weight: 500;

  padding-bottom: 12px;
`;

export const SubTitle = styled.h3`
  text-align: center;
  color: #767676;
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;

  padding-bottom: 30px;
`;

export const ImgBox = styled.div`
  position: relative;
  margin: 0 auto;
`;

export const ProfileImg = styled.img`
  width: 110px;
  height: 110px;
  z-index: 0;
`;

export const ChangeImg = styled.img`
  position: absolute;
  width: 36px;
  height: 36px;
  right: 0;
  bottom: 0;
  z-index: 1;
  cursor: pointer;
`;

export const InputBox = styled.div`
  padding-top: 30px;
  border-bottom: 1px solid #dbdbdb;
`;

export const SubContent = styled.p`
  color: #767676;
  font-family: Spoqa Han Sans Neo;
  font-size: 12px;
  font-weight: 500;

  padding-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;

  padding: 0;
  border: none;
  outline: none;
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;

  margin-bottom: 8px;

  &::placeholder {
    color: #dbdbdb;
  }
`;

export const WarningContent = styled.p`
  color: #eb5757;
  font-family: Spoqa Han Sans Neo;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;

  padding-top: 6px;
  padding-bottom: 16px;
`;

export const Button = styled.button`
  background-color: #ffc7a7;
  border-radius: 44px;
  border: none;

  margin-top: 30px;
  padding: 13px 107.5px;

  color: #fff;

  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 500;
`;
