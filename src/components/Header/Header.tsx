import NextLink from 'next/link';

import { Container, MyProfileLink } from './HeaderStyles';
import Image from 'next/image';

import { Button } from '../Button/Button';
import { useRouter } from 'next/router';

export function Header() {
  const router = useRouter();

  return (
    <Container>
      <NextLink href="/">
        <a>
          <Image src={'/images/logo.svg'} height={48} width={100} alt="Logo" />
        </a>
      </NextLink>

      <nav>
        <NextLink href="/profile">
          <MyProfileLink>Meu perfil</MyProfileLink>
        </NextLink>
        <Button onClick={() => router.push('/login')}>Entrar</Button>
      </nav>
    </Container>
  );
}
