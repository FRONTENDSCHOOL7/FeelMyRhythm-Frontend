import styled from 'styled-components';
import addImg from '../../assets/images/post/upload-file.png';

export const PostDetail = styled.div`
  padding-left: 16px;
  padding-top: 20px;
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
`;

export const TxtInput = styled.textarea`
  border: 0;
  font-size: 14px;
  resize: none;
  outline: none;
  padding-top: 12px;
  padding-left: 13px;
  width: 80%;
  height: 70vh;
  font-weight: 400;

  ::placeholder {
    font-size: 14px;
    color: #c4c4c4;
  }
`;
