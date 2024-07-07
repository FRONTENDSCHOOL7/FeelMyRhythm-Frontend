import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.textColor};
  padding-bottom: 40px;
`;
