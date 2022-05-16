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
  InstitutionCheckBox,
  LinkBox
} from '../styles/pages/SignupStyles';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import NextLink from 'next/link';

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigátorio'),
  userName: yup.string().required('Usuario obrigátorio'),
  email: yup.string().required('E-mail obrigátorio').email('E-mail inválido'),
  password: yup
    .string()
    .required('Senha obrigátoria')
    .min(8, 'Mínimo 8 caracteres')
    .max(32, 'Máximo 32 caracteres')
});

import { ImageBox } from '../components/ImageBox/ImageBox';
const Signup: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>({
    resolver: yupResolver(createUserFormSchema)
  });

  const handleSignUp = (data: FieldValues) => console.log(data);
  return (
    <Container>
      <FormBox>
        <FormBoxContent>
          <Form onSubmit={handleSubmit(handleSignUp)}>
            <Input
              register={register}
              error={errors.name}
              name="name"
              type="text"
              placeholder="Nome"
            />
            <Input
              register={register}
              error={errors.userName}
              name="userName"
              type="text"
              placeholder="Usuario"
            />
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

            <InstitutionCheckBox>
              <Input register={register} name="institution" type="checkbox" />
              <span>Esta associado com alguma Instittucao ?</span>
            </InstitutionCheckBox>

            <Button>Cadastrar</Button>

            <LinkBox>
              <span>Ja possui uma conta ?</span>

              <NextLink href="/login">
                <AlreadyHaveAnAccountLink>Fazer Login</AlreadyHaveAnAccountLink>
              </NextLink>
            </LinkBox>
          </Form>
        </FormBoxContent>
      </FormBox>
      <ImageBox />
    </Container>
  );
};
export default Signup;
