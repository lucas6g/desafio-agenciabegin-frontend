import type { NextPage } from 'next';
import { BookCard } from '../components/BookCard/BookCard';
import { MdLogout } from 'react-icons/md';
import NextLink from 'next/link';
import {
  Container,
  MainContent,
  Header,
  ButtonsContainer
} from '../styles/pages/ProfileStyles';
import Image from 'next/image';
import { Button } from '../components/Button/Button';
import { Tabs } from '../components/Tabs/Tabs';
import { useRouter } from 'next/router';
const Profile: NextPage = () => {
  const router = useRouter();

  return (
    <Container>
      <Header>
        <NextLink href="/">
          <a>
            <Image
              src={'/images/logo.svg'}
              height={48}
              width={100}
              alt="Logo"
            />
          </a>
        </NextLink>

        <ButtonsContainer>
          <Button onClick={() => router.push('/create-book')}>
            Novo Livro
          </Button>
          <Button>Nova Instituicao</Button>
          <Button>Perfil</Button>
          <Button className="icon-button">
            <MdLogout />
          </Button>
        </ButtonsContainer>
      </Header>
      <Tabs
        tabs={[
          {
            label: 'Livros'
          },
          {
            label: 'Instituições'
          }
        ]}
      >
        <MainContent>
          <BookCard hasCardOptions />
          <BookCard hasCardOptions />
          <BookCard hasCardOptions />
        </MainContent>
        <MainContent>
          <BookCard hasCardOptions />
          <BookCard hasCardOptions />
          <BookCard hasCardOptions />
          <BookCard hasCardOptions />
          <BookCard hasCardOptions />
          <BookCard hasCardOptions />
          <BookCard hasCardOptions />
          <BookCard hasCardOptions />
          <BookCard hasCardOptions />
        </MainContent>
      </Tabs>
    </Container>
  );
};

export default Profile;
