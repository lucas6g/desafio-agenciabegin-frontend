import styled from 'styled-components';
import { ConfirmationCodeInput } from 'react-confirmation-code-input';

export const Container = styled.div`
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ConfirmationTokenInput = styled(ConfirmationCodeInput)`
  width: 100%;
  display: flex !important;
  gap: 11px !important;
  margin: 0px !important;
  justify-content: center;

  input {
    margin: 0px;
    width: 48px;
    height: 48px;
    border: 1px solid ${({ theme }) => theme.colors.blue};
  }
`;

export const EmailBox = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;

  span {
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
