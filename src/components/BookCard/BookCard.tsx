import {
  BookImageBox,
  BookInfoBox,
  BookName,
  Container,
  InstitutionName,
  Image,
  CardOptions,
  CardOptionsButton
} from './BookCardStyles';

import { MdDelete, MdEdit } from 'react-icons/md';
import { useRouter } from 'next/router';

type BookCardProps = {
  hasCardOptions?: boolean;
};

export function BookCard({ hasCardOptions = false }: BookCardProps) {
  const router = useRouter();
  return (
    <Container>
      <BookImageBox>
        <Image src="/images/livro.jpg" alt="se fude " />
      </BookImageBox>
      <BookInfoBox>
        <BookName>O Homem Mais Rico da Babilônia</BookName>
        <InstitutionName>Caridade Nota 10</InstitutionName>
      </BookInfoBox>
      {hasCardOptions && (
        <CardOptions>
          <CardOptionsButton onClick={() => router.push('/edit-book/id')}>
            <MdEdit />
          </CardOptionsButton>
          <CardOptionsButton>
            <MdDelete />
          </CardOptionsButton>
        </CardOptions>
      )}
    </Container>
  );
}
