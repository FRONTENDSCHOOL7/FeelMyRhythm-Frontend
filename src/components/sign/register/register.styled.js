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

  cursor: pointer;
`;
export const ChangeImg = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const InputBox = styled.div`
  border-bottom: 1px solid #dbdbdb;
`;

export const SubContent = styled.p`
  color: ${({ theme }) => theme.subTextColor};

  font-size: 12px;
  font-weight: 500;

  padding-bottom: 10px;
`;

export const Input = styled.input`
  width: 70%;
  height: 32px;

  padding: 0;
  border: none;
  outline: none;

  font-size: 14px;
  font-weight: 400;
  line-height: 14px;

  margin-bottom: 8px;

  padding-left: 8px;

  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};

  &::placeholder {
    color: ${({ theme }) => theme.subTextColor};
  }
`;

export const CheckEmailButton = styled.button`
  width: 70px;
  height: 32px;
  border: none;

  background-color: ${({ valid, theme }) => (valid === 'success' ? 'transparent' : theme.btnEnabledBgColor)};

  font-size: ${({ valid }) => (valid === 'success' ? '16px' : '12px')};
  color: ${({ valid, theme }) => (valid === 'success' ? 'green' : theme.btnTextColor)};
  font-weight: 500;

  margin-bottom: ${({ valid }) => (valid === 'success' ? '5px' : '8px')};
  margin-left: auto;

  text-align: ${({ valid }) => (valid === 'success' ? 'right' : 'center')};
  /* border: ${({ valid }) => (valid === 'success' ? 'none' : '1px solid #dbdbdb')}; */

  cursor: ${({ valid }) => (valid === 'success' ? 'default' : 'pointer')};
  border-radius: 30px;
`;

export const CheckBox = styled.div`
  display: flex;
  align-items: center;
`;

export const WarningContent = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;

  padding-top: 6px;
  padding-bottom: 16px;
`;

export const EmailWarningContent = styled(WarningContent)`
  color: ${({ valid }) => (valid === '사용 가능한 이메일 입니다.' ? 'green' : '#eb5757')};
`;

export const NicknameWarningContent = styled(WarningContent)`
  color: ${({ valid }) => (valid === '사용 가능한 이메일 입니다.' ? 'green' : '#eb5757')};
`;
