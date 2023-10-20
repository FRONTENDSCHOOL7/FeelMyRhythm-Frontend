import styled from 'styled-components';

export const ChatFooterLayout = styled.div`
  display: flex;
  padding: 13px 0;
  width: 100vw;
  height: 61px;
  border-bottom: 0.5px solid #dbdbdb;
  display: flex;
  flex-direction: row;
  padding: 13px 0;
  border-bottom: 0.5px solid #dbdbdb;
  align-items: center;
  justify-content: center;
`;
export const ImgButton = styled.button`
  width: auto;
  height: auto;
  border: none;
  background: none;
`;
export const Input = styled.input`
  border: none;
  background: none;
  ::placeholder {
    color: #767676;
  }
  &:focus {
    outline: none;
  }
`;

export const SendButton = styled.button`
  border: none;
  background: none;
  color: ${(props) => (props.active ? '#F26E22' : '#767676')};
`;
