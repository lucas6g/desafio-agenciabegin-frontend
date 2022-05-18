import {
  Amount,
  AmountDescription,
  Image,
  BookImageBox,
  BookInfoBox,
  BookInfoRow,
  BookInstitution,
  BookTitle,
  CloseButton,
  Container,
  Header,
  Title,
  BookDescriptionBox,
  BookDescription,
  DesCriptionTitle
} from './BookPreviewStyles';
import { MdClose } from 'react-icons/md';
import { Button } from '../Button/Button';

export function BookPreview() {
  return (
    <Container>
      <Header>
        <div></div>

        <Title>Sobre o Livro</Title>

        <CloseButton>
          <MdClose />
        </CloseButton>
      </Header>
      <BookImageBox>
        <Image src="images/clean.jpg" alt="clean" />
      </BookImageBox>

      <BookTitle>O Homem Mais Rico da Babilônia</BookTitle>
      <BookInstitution>Caridade Nota 10</BookInstitution>
      <BookInfoRow>
        <BookInfoBox>
          <Amount>86</Amount>
          <AmountDescription>Em estoque</AmountDescription>
        </BookInfoBox>
        <BookInfoBox isOnMiddle>
          <Amount>1000</Amount>
          <AmountDescription>Edição</AmountDescription>
        </BookInfoBox>
        <BookInfoBox>
          <Amount> 86</Amount>
          <AmountDescription>Estado</AmountDescription>
        </BookInfoBox>
      </BookInfoRow>

      <BookDescriptionBox>
        <DesCriptionTitle>Sobre o Livro</DesCriptionTitle>

        <BookDescription>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </BookDescription>
      </BookDescriptionBox>
      <Button>Contato Instituicao</Button>
    </Container>
  );
}
