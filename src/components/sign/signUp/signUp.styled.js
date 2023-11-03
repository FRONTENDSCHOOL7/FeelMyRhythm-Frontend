import styled from 'styled-components';
import { AiFillSmile } from 'react-icons/ai';

export const Smile = styled(AiFillSmile)``;

export const SignUpLayout = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  max-width: 767px;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor};
  padding-left: 34px;
  padding-right: 34px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.textColor};
  padding-bottom: 40px;
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

export const PasswordWarningContent = styled(WarningContent)`
  color: ${({ valid }) => (valid === '사용 가능한 이메일 입니다.' ? 'green' : '#eb5757')};
`;

export const NextButton = styled.button`
  background-color: ${({ valid, theme }) => (valid === 'done' ? theme.btnEnabledBgColor : theme.btnDisabledBgColor)};
  border-radius: 44px;
  border: none;

  margin-top: 14px;
  padding: 13px 0;

  color: ${({ theme }) => theme.btnTextColor};

  font-size: 14px;
  font-weight: 500;
`;

export const CheckBox = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckEmailButton = styled.button`
  width: 70px;
  height: 32px;
  border: none;
  color: ${({ theme }) => theme.btnTextColor};
  background-color: ${({ valid, theme }) => (valid === 'success' ? 'transparent' : theme.btnEnabledBgColor)};

  font-size: ${({ valid }) => (valid === 'success' ? '16px' : '12px')};
  /* color: ${({ valid }) => (valid === 'success' ? 'green' : '#767676')}; */
  font-weight: 500;

  margin-bottom: ${({ valid }) => (valid === 'success' ? '5px' : '8px')};
  margin-left: auto;

  text-align: ${({ valid }) => (valid === 'success' ? 'right' : 'center')};
  /* border: ${({ valid }) => (valid === 'success' ? 'none' : '1px solid #dbdbdb')}; */

  cursor: ${({ valid }) => (valid === 'success' ? 'default' : 'pointer')};
  border-radius: 30px;
`;

export const EyeButton = styled.button`
  margin-left: auto;
  border: none;
  margin-top: 8px;
  margin-bottom: 5px;

  font-size: 20px;

  color: #767676;
  background-color: transparent;
`;
