import styled, { css } from 'styled-components';

interface Container {
  isErrored: boolean;
}
export const Container = styled.div<Container>`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;

  ${(props) => props.isErrored && css``}
  label {
    ${(props) =>
      props.isErrored &&
      css`
        color: red;
      `}
  }
  span {
    color: red;
    font-size: 14px;
    font-family: 'Roboto', serif;
  }
`;

interface StyledInputProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const StyledInput = styled.input<StyledInputProps>`
  border: 1px solid rgb(0 0 0 / 25%);
  width: 100%;
  height: 48px;
  border-radius: 4px;
  padding: 16px;

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #3483fa;
      border-width: 2px;
    `}
  ${(props) =>
    props.isErrored &&
    css`
      border-color: red;
      border-width: 2px;
      min-height: 48px;
    `}
`;
