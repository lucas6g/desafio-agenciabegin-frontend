import {
  BookImageBox,
  BookInfoBox,
  BookName,
  Container,
  InstitutionName,
  Image
} from './BookCardStyles';

export function BookCard() {
  return (
    <Container>
      <BookImageBox>
        <Image src="/images/clean.jpg" alt="se fude " />
      </BookImageBox>
      <BookInfoBox>
        <BookName>O Homem Mais Rico da Babilônia</BookName>
        <InstitutionName>Caridade Nota 10</InstitutionName>
      </BookInfoBox>
    </Container>
  );
}
