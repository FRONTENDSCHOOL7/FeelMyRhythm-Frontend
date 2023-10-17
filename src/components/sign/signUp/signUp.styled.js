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
  /* margin-bottom: 16px; */
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

  margin-top: 14px;
  padding: 13px 148px;

  color: #fff;

  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 500;
`;
