import styled, { css } from 'styled-components';
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
`;

export const TabsButtonContainer = styled.div`
  display: flex;
`;

type TabButtonProps = {
  isSelected?: boolean;
};

export const TabButton = styled.button<TabButtonProps>`
  background: none;
  border: none;
  cursor: pointer;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.isSelected &&
    css`
      border-bottom: 4px solid ${({ theme }) => theme.colors.blue};
    `}

  span {
    color: ${({ theme }) => theme.colors.black};
    font-weight: 500;
    opacity: 0.7;
    ${(props) =>
      props.isSelected &&
      css`
        opacity: 1;
      `}
    &:hover {
      opacity: 1;
    }
  }
`;

type TabContentProps = {
  isSelected?: boolean;
};

export const TabContent = styled.div<TabContentProps>`
  display: none;

  ${(props) =>
    props.isSelected &&
    css`
      display: block;
    `}
`;
