import styled from 'styled-components';
import Select from 'react-select';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const FormHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InputRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;

    gap: 8px;
  }
`;
export const ErrorBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  span {
    font-size: 14px;
    color: red;
  }
`;
export const StyledSelect = styled(Select)`
  width: 100%;
`;

export const BackToProfile = styled.a`
  text-decoration: none;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.blue};
  cursor: pointer;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.blue};
  font-size: 24px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;

  border-radius: 4px;
  max-width: 992px;
  width: 100%;
  padding: 16px;

  height: auto;
  padding-bottom: 16px;

  @media (min-width: 768px) {
    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.1);
    gap: 16px;
  }

  button {
    margin-top: auto;
  }
`;
