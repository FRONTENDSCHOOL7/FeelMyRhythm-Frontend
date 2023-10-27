import styled from 'styled-components';
import addImg from '../../assets/images/write/upload-file.png';

export const WriteLayout = styled.div`
  padding-top: 68px;
  padding-left: 16px;
`;

export const UploadBtn = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  bottom: 0;
  right: 0;
  border: 0;
  margin: 0 16px 16px 0;
  background: url(${addImg});
`;

export const Upload = styled.div`
  display: flex;
`;

export const UserImg = styled.img`
  width: 42px;
  height: 42px;
  /* padding: 20px 0 0 16px; */
`;

export const TextInput = styled.textarea`
  border: 0;
  width: 80%;
  height: 80vh;
  resize: none;
  padding-left: 12px;
  padding-top: 12px;
  outline: none;
  color: #000;
  font-weight: 400;

  &::placeholder {
    font-size: 14px;
    color: #c4c4c4;
  }
`;
