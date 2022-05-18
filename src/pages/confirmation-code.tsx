import type { NextPage } from 'next';

import { Button } from '../components/Button/Button';

import {
  Container,
  Form,
  FormBox,
  FormBoxContent
} from '../styles/pages/LoginStyles';

import { ImageBox } from '../components/ImageBox/ImageBox';
import {
  ConfirmationTokenInput,
  EmailBox
} from '../styles/pages/ConfirmationCodeStyles';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';

const ConfirmationCode: NextPage = () => {
  const [token, setToken] = useState('');
  const router = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(token);
  };

  return (
    <Container>
      <FormBox>
        <FormBoxContent>
          <Form onSubmit={handleSubmit}>
            <EmailBox>
              Um email com um token de 6 digitos foi enviado para o email:
              <span>lucas.tabalho1533@gmail.com</span>
            </EmailBox>
            <ConfirmationTokenInput
              onChange={(e: any) => {
                console.log(e);
                setToken(e);
              }}
              value={token}
              regex={'^[0-9]*$'}
              fields={6}
            />

            <Button onClick={() => router.push('/reset-password')}>
              Recuperar Senha
            </Button>
          </Form>
        </FormBoxContent>
      </FormBox>
      <ImageBox />
    </Container>
  );
};
export default ConfirmationCode;
