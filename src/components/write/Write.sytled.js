import styled from 'styled-components';
import addImg from '../../assets/images/write/upload-file.png';

export const WriteLayout = styled.div``;

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
  padding: 20px 0 0 16px;
`;

export const TxtInput = styled.input`
  border: 0;
  margin: 20px 0 0 12px;

  ::placeholder {
    font-size: 14px;
    color: #c4c4c4;
  }
`;
