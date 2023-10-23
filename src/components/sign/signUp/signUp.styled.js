import styled from 'styled-components';

export const SignUpLayout = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 30px;
`;

export const Title = styled.h2`
  font-family: Spoqa Han Sans Neo;
  font-size: 24px;
  font-weight: 500;
  text-align: center;

  padding-bottom: 40px;
`;

export const InputBox = styled.div`
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
  width: 70%;
  height: 32px;

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
  font-family: Spoqa Han Sans Neo;
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
  background-color: ${({ valid }) => (valid === 'done' ? '#F26E22' : '#FFC7A7')};
  border-radius: 44px;
  border: none;

  margin-top: 14px;
  padding: 13px 148px;

  color: #fff;

  font-family: Spoqa Han Sans Neo;
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
  background: #fff;

  font-size: ${({ valid }) => (valid === 'success' ? '16px' : '12px')};
  color: ${({ valid }) => (valid === 'success' ? 'green' : '#767676')};
  font-weight: 500;

  margin-bottom: ${({ valid }) => (valid === 'success' ? '5px' : '8px')};
  margin-left: auto;

  text-align: ${({ valid }) => (valid === 'success' ? 'right' : 'center')};
  border: ${({ valid }) => (valid === 'success' ? 'none' : '1px solid #dbdbdb')};

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
