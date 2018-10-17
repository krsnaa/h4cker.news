import styled from 'styled-components';
import { tablet } from 'styles/mediaQueries';

export const AppMain = styled.div`
  min-width: 100vw;
  min-height: 100vh;  
  background-color: ${({ theme }) => theme.background};
`;

export const Wrapper = styled.div`
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  overflow: hidden;
  padding-bottom: 200px;

  ${tablet} {
    width: 96%;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 20px;
  font-weight: 300;
  margin-top: 24px;
  margin-bottom: 26px;
`;
