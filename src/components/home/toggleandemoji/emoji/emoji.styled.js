import styled from 'styled-components';

export const EmojiBox = styled.div`
  padding-top: 148px;
  width: 110px;
  z-index: 10;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

export const ButtonSelected = styled.button`
  cursor: pointer;
  width: 110px;
  height: 34px;
  border-radius: 12px;
  border: 1px solid #bdbdbd;
  background: #fff;
  text-align: left;
  padding-left: 14px;
  position: relative;
  font-size: 14px;

  display: flex;
  align-items: center;

  &:focus {
    outline: none;
    /* border-color: #bdbdbd; */
    /* box-shadow: 0 0 0 0px #ffffff; */
  }

  &::after {
    content: '';
    position: absolute;
    top: 33%;
    right: 13px;
    box-sizing: border-box;
    border-top: 0.7rem solid #bdbdbd;
    border-left: 0.42rem solid transparent;
    border-right: 0.42rem solid transparent;
    transition: transform 0.3s;
  }

  ${(props) =>
    props.isActive &&
    `
    &::after {
      transform: rotate(-180deg); 
    }
  `}
`;

export const Ul = styled.ul`
  width: 108px;
  list-style: none;
  margin-top: 5px;
  padding: 0;
  border: 1px solid #bdbdbd;
  border-radius: 12px;
  background: white;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  opacity: ${(props) => (props.isEmotionActive ? 1 : 0)};
  visibility: ${(props) => (props.isEmotionActive ? 'visible' : 'hidden')};
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
    /* outline: 1px dotted #cccccc; */
  }
`;
