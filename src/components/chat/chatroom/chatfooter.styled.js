import styled from 'styled-components';

export const ChatFooterLayout = styled.div`
  position: fixed;
  bottom: 0;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 16px;
  width: 100vw;
  max-width: 767px;
  height: 61px;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const TempBox = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;
export const ImgButton = styled.button`
  width: auto;
  height: auto;
  border: none;
  background: none;
  padding: 0;
`;
export const Input = styled.input`
  width: 67vw;
  border: none;
  background: none;
  color: ${({ theme }) => theme.textColor};
  ::placeholder {
    color: ${({ theme }) => theme.subTextColor};
  }
  &:focus {
    outline: none;
  }
`;

export const SendButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  color: ${(props) => (props.active ? '#F26E22' : '#767676')};
`;
