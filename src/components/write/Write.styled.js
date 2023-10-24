import styled from 'styled-components';

export const WriteLayout = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1 auto;
  font-family: Spoqa Han Sans Neo;

  padding-left: 34px;
  padding-right: 34px;
  padding-top: 30px;
`;

export const Content = styled.p`
  color: #767676;
  font-size: 12px;
  font-weight: 500;

  padding-top: 16px;
  padding-bottom: 10px;
`;

export const ImageContent = styled(Content)`
  padding-bottom: 18px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 8px;

  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  color: black;
  font-weight: 400;
  line-height: 14px;
  &::placeholder {
    color: #dbdbdb;
  }
`;

export const ImageBox = styled.div`
  display: flex;
  position: relative;
`;

export const ImagePreview = styled.img`
  width: 322px;
  height: 204px;
  border-radius: 10px;
  border: 0.5px solid #dbdbdb;
  background-color: #f2f2f2;
  margin-bottom: 14px;
`;

export const ImageAddBtnBg = styled.button`
  position: absolute;
  right: 12px;
  bottom: 26px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 36px;
  height: 36px;

  border: none;
  border-radius: 100%;
  background-color: #c4c4c4;

  &:hover {
    background-color: #f26e22;
  }
`;

export const ImageIcon = styled.img``;
