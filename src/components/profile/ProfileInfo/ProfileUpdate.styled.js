import styled from 'styled-components';

export const ProfileSettingLayout = styled.form`
  width: 100%;
  max-width: 767px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 70px;
  padding-left: 34px;
  padding-right: 34px;
  background-color: ${({ theme }) => theme.backgroundColor};
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

export const InputBox = styled.div`
  padding-top: 30px;
  border-bottom: 1px solid #dbdbdb;
`;

export const NonPaddingInputBox = styled(InputBox)`
  padding-top: 0;
`;

export const SubContent = styled.p`
  color: ${({ theme }) => theme.subTextColor};

  font-size: 12px;
  font-weight: 500;

  padding-bottom: 10px;
`;
export const Input = styled.input`
  width: 80%;
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

export const WarningContent = styled.p`
  color: ${({ $valid }) => ($valid === '사용 가능한 계정ID 입니다.' ? 'green' : '#eb5757')};

  font-size: 12px;
  font-weight: 500;
  line-height: 14px;

  padding-top: 6px;
  padding-bottom: 16px;
`;

export const CheckBox = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckaccountButton = styled.button`
  width: 70px;
  height: 32px;
  border: none;
  color: ${({ theme }) => theme.btnTextColor};
  background-color: ${({ $valid, theme }) => ($valid === 'success' ? 'transparent' : theme.btnEnabledBgColor)};

  font-size: ${({ $valid }) => ($valid === 'success' ? '16px' : '12px')};
  font-weight: 500;

  margin-bottom: ${({ $valid }) => ($valid === 'success' ? '5px' : '8px')};
  margin-left: auto;

  text-align: ${({ $valid }) => ($valid === 'success' ? 'right' : 'center')};

  cursor: ${({ $valid }) => ($valid === 'success' ? 'default' : 'pointer')};
  border-radius: 30px;
`;
