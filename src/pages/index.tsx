import type { NextPage } from 'next';
import { BookCard } from '../components/BookCard/BookCard';
import { BookPreview } from '../components/BookPreview/BookPreview';
import { Header } from '../components/Header/Header';
import { Container, MainContent } from '../styles/pages/HomeStyles';

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <MainContent>
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </MainContent>
      <BookPreview />
    </Container>
  );
};

export default Home;
