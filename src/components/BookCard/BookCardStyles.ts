import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;

  gap: 8px;
  padding: 8px;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.blue};

    p {
      color: ${({ theme }) => theme.colors.white};
    }

    div {
      strong {
        opacity: 0.8;
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;

export const BookImageBox = styled.div`
  width: 100%;
  min-height: 300px;
  max-height: 300px;
`;
export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  width: 100%;
  object-fit: contain;

  border-radius: 4px;

  @media (min-width: 768px) {
    object-fit: fill;
  }
`;

export const BookInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const BookName = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const InstitutionName = styled.strong`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.black};
  opacity: 0.4;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
