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
  email: yup.string().required('E-mail obrigátorio').email('E-mail inválido'),
  password: yup
    .string()
    .required('Senha obrigátoria')
    .min(8, 'Mínimo 8 caracteres')
    .max(32, 'Máximo 32 caracteres')
});

import { ImageBox } from '../components/ImageBox/ImageBox';
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
            <Input
              register={register}
              error={errors.email}
              name="email"
              type="email"
              placeholder="E-mail"
            />
            <Input
              register={register}
              error={errors.password}
              name="password"
              type="password"
              placeholder="Senha"
            />

            <Button>Entrar</Button>

            <NextLink href="/forgot-password">
              <AlreadyHaveAnAccountLink>
                Esqueceu a senha ?
              </AlreadyHaveAnAccountLink>
            </NextLink>

            <LinkBox>
              <span>Ainda não possui uma conta ?</span>
              <NextLink href="/signup">
                <AlreadyHaveAnAccountLink>
                  Criar conta{' '}
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
