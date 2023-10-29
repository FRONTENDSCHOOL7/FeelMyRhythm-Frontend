import styled from 'styled-components';

export const EmojiBox = styled.div`
  width: 120px;
  height: 34px;
  z-index: 10;
`;

export const ButtonSelected = styled.button`
  cursor: pointer;
  border: none;
  width: 120px;
  height: 34px;
  border-radius: 12px;
  border: 1px solid #c4c4c4;
  background: #fff;
  text-align: left;
  padding: 0 24px;
  position: relative;

  &:focus {
    outline: none;
    border-color: rgba(242, 110, 34, 0.4);
    box-shadow: 0 0 0 1px #fff9e7;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 10px;
    margin-top: -9px;
    box-sizing: border-box;
    border-top: 0.8rem solid #c4c4c4;
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    transition: transform 0.3s;
  }

  ${(props) =>
    props.isActive &&
    `
    border-color: rgba(242, 110, 34, 0.5);
    box-shadow: 0 0 0 3px #fff9e7; 

    &::after {
      transform: rotate(-180deg); 
    }
  `}
`;

export const Ul = styled.ul`
  list-style: none;
  margin-top: 3px;
  padding: 0;
  width: 120px;
  border: 1px solid rgba(242, 110, 34, 0.5);
  border-radius: 12px;
  background: white;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
  //0.3초 효과주고싶음 트랜지션,오퍼시티 넣기
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  visibility: ${(props) => (props.isActive ? 'visible' : 'hidden')};
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
`;

export const Li = styled.li`
  padding: 2px 2px;
`;

export const ButtonSelect = styled.button`
  cursor: pointer;
  border: none;
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 10px;
  height: 30px;
  font-size: 14px;
  color: #767676;
  background: #fff;
  transition: background-color 0.3s;

  &:hover,
  &:focus {
    background-color: #fff3cf;
  }

  &:focus {
    outline: 1px solid rgba(242, 110, 34, 0.5);
  }
`;
