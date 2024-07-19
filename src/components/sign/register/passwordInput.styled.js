import styled from 'styled-components';

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

export const CheckBox = styled.div`
  display: flex;
  align-items: center;
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

export const EyeButton = styled.button`
  margin-left: auto;
  border: none;
  margin-top: 8px;
  margin-bottom: 5px;

  font-size: 20px;

  color: #767676;
  background-color: transparent;
`;

export const WarningContent = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;

  padding-top: 6px;
  padding-bottom: 16px;
`;

export const PasswordWarningContent = styled(WarningContent)`
  color: ${({ valid }) => (valid === '사용 가능한 이메일 입니다.' ? 'green' : '#eb5757')};
`;
