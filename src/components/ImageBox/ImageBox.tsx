import { Container, Content } from './ImageBoxStyles';
import Image from 'next/image';
export const ImageBox = () => {
  return (
    <Container>
      <Content>
        <Image
          src={'/images/book.svg'}
          height={600}
          width={600}
          alt="Merchan"
        />
      </Content>
    </Container>
  );
};
