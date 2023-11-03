import styled from 'styled-components';

export const SecondBarLayout = styled.div`
  width: 100%;
  height: 47px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 12px;
  background-color: ${({ theme }) => theme.backgroundColor};
`;
