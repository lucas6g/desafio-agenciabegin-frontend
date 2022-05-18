import styled from 'styled-components';

export const Container = styled.div``;
export const Header = styled.header`
  justify-content: space-between;
  flex-direction: column;
  display: flex;
  height: 56px;
  max-width: 1200px;
  padding: 16px;
  margin: 0 auto;
  margin-bottom: 48px;

  @media (min-width: 768px) {
    margin-bottom: 0px;
    align-items: center;
    flex-direction: row;
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  @media (min-width: 768px) {
    gap: 8px;
  }

  button {
    padding: 0 6px;
    white-space: nowrap;
  }

  button.icon-button {
    width: 48px;
    height: 48px;
    padding: 4px;

    svg {
      height: 32px;
      width: 32px;
    }
  }
`;

export const MainContent = styled.main`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 16px;
  column-gap: 8px;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1224px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
