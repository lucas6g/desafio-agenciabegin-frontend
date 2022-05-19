import styled, { css } from 'styled-components';
import { MdImage } from 'react-icons/md';

export const Container = styled.div`
  width: 100%;

  input {
    display: none;
  }
`;

export const ImageContainer = styled.div``;

interface LabelProps {
  error: boolean;
}

export const Label = styled.label<LabelProps>`
  width: 100%;
  height: 200px;
  background: #ffffff;
  border: 3px dashed ${({ theme }) => theme.colors.blue};

  border-radius: 8px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ${(props) =>
    props.error &&
    css`
      color: red;

      border: 3px dashed red;
      margin-bottom: 8px;
    `}
`;

export const ImageIcon = styled(MdImage)`
  color: ${({ theme }) => theme.colors.blue};
  font-size: 32px;
`;
