import type { NextPage } from 'next';

import { Button } from '../components/Button/Button';
import { FieldValues } from 'react-hook-form';
import { Input } from '../components/Input/Input';
import {
  Container,
  Form,
  FormBox,
  FormBoxContent,
  Title
} from '../styles/pages/ResetPasswordStyles';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const createUserFormSchema = yup.object().shape({
  password: yup
    .string()
    .required('Senha obrigátoria')
    .min(8, 'Mínimo 8 caracteres')
    .max(32, 'Máximo 32 caracteres'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'As senhas não coincidem')
});

import { ImageBox } from '../components/ImageBox/ImageBox';
const ResetPassword: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>({
    resolver: yupResolver(createUserFormSchema)
  });

  const handleResetPassword = (data: FieldValues) => console.log(data);
  return (
    <Container>
      <FormBox>
        <FormBoxContent>
          <Form onSubmit={handleSubmit(handleResetPassword)}>
            <Title>Alteração de Senha</Title>
            <Input
              register={register}
              error={errors.password}
              name="password"
              type="password"
              placeholder="Nova Senha"
            />
            <Input
              register={register}
              error={errors.confirmPassword}
              name="confirmPassword"
              type="password"
              placeholder="Confirme a Senha"
            />

            <Button>Confirmar</Button>
          </Form>
        </FormBoxContent>
      </FormBox>
      <ImageBox />
    </Container>
  );
};
export default ResetPassword;
