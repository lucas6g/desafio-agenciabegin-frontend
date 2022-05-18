import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  padding: 16px;

  nav {
    display: flex;
    align-items: center;
    gap: 8px;

    button {
      height: 36px;
      padding: 0 16px;
      background-color: ${({ theme }) => theme.colors.blue};
    }
  }
`;

export const MyProfileLink = styled.a`
  text-decoration: none;
  white-space: nowrap;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.blue};
  cursor: pointer;
`;
