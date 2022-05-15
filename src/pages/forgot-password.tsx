import type { NextPage } from 'next';

import { Button } from '../components/Button/Button';
import { FieldValues } from 'react-hook-form';
import { Input } from '../components/Input/Input';
import {
  AlreadyHaveAnAccountLink,
  Container,
  Form,
  FormBox,
  FormBoxContent,
  LinkBox
} from '../styles/pages/LoginStyles';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import NextLink from 'next/link';

const createUserFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigátorio').email('E-mail inválido')
});

import { ImageBox } from '../components/ImageBox/ImageBox';
import { Title } from '../styles/pages/ForgoPasswordStyles';
const Login: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>({
    resolver: yupResolver(createUserFormSchema)
  });

  const handleLogin = (data: FieldValues) => console.log(data);
  return (
    <Container>
      <FormBox>
        <FormBoxContent>
          <Form onSubmit={handleSubmit(handleLogin)}>
            <Title>Recuperação de Senha</Title>
            <Input
              register={register}
              error={errors.email}
              name="email"
              type="email"
              placeholder="E-mail"
            />

            <Button>Recuperar Senha</Button>

            <LinkBox>
              <NextLink href="/login">
                <AlreadyHaveAnAccountLink>
                  Voltar para Login
                </AlreadyHaveAnAccountLink>
              </NextLink>
            </LinkBox>
          </Form>
        </FormBoxContent>
      </FormBox>
      <ImageBox />
    </Container>
  );
};
export default Login;
