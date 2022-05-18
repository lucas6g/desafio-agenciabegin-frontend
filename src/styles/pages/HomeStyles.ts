import styled from 'styled-components';

export const Container = styled.div`
  @media (min-width: 768px) {
    padding-right: 400px;
  }
`;

export const MainContent = styled.main`
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 16px;
  column-gap: 8px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1224px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
