import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;

  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  z-index: 3;
  max-height: 100%;
  padding: 0 16px;
  overflow-y: auto;
  display: flex;
  padding-bottom: 24px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  @media (min-width: 768px) {
    max-width: 400px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 8px;
  height: 48px;
  width: 100%;
`;
export const Title = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
`;

export const CloseButton = styled.button`
  height: 24px;
  width: 24px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};

  svg {
    height: 24px;
    width: 24px;
  }
`;

export const BookImageBox = styled.div`
  width: 200px;
  max-height: 250px;
`;
export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  width: 100%;
  object-fit: contain;

  border-radius: 4px;
`;

export const BookTitle = styled.strong`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const BookInstitution = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.6;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const BookInfoRow = styled.div`
  display: flex;
  gap: 16px;
  background-color: #1f212d;
  padding: 16px;
  border-radius: 24px;
`;

interface BookInfoBoxProps {
  isOnMiddle?: boolean;
}

export const BookInfoBox = styled.div<BookInfoBoxProps>`
  text-align: center;
  display: flex;
  flex-direction: column;

  ${(props) =>
    props.isOnMiddle &&
    css`
      border-left: 2px solid ${props.theme.colors.white};
      border-right: 2px solid ${props.theme.colors.white};
      padding-left: 16px;
      padding-right: 16px;
    `}
`;

export const Amount = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-weight: bold;
`;

export const AmountDescription = styled.span`
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.3;
  font-size: 16px;
  font-weight: 500;
`;
export const BookDescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const DesCriptionTitle = styled.h2`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
export const BookDescription = styled.p`
  font-size: 16px;
  text-align: left;
  color: #aaabb0;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
