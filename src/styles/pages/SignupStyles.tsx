import styled from 'styled-components';

export const Container = styled.div`
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const LinkBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  span {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const InstitutionCheckBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 8px;

  input {
    width: 32px;
    height: 32px;
  }

  div {
    width: 32px;
    height: 32px;
  }

  span {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const AlreadyHaveAnAccountLink = styled.a`
  text-decoration: none;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.blue};
  cursor: pointer;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
`;

export const FormBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
`;
export const FormBoxContent = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 16px;
`;
export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  max-width: 100%;
  width: 100%;

  @media (min-width: 992px) {
    max-width: 340px;
  }
`;
