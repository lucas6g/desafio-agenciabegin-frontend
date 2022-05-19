import type { NextPage } from 'next';

import { Button } from '../components/Button/Button';
import { FieldValues } from 'react-hook-form';
import { Input } from '../components/Input/Input';
import {
  BackToProfile,
  Container,
  Form,
  Title,
  FormHeader,
  InputRow
} from '../styles/pages/RegisterInstituitionStyles';
import { MdArrowBack } from 'react-icons/md';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import NextLink from 'next/link';

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigátorio'),
  streeName: yup.string().required('Nome Da Rua obrigátorio'),
  number: yup.string().required('Numero Da Rua obrigátorio'),
  district: yup.string().required('Bairro obrigátorio'),
  zipCode: yup.string().required('Cep obrigátorio'),
  city: yup.string().required('Cidade obrigátoria'),
  state: yup.string().required('Estado obrigátorio')
});

const RegisterInstitution: NextPage = () => {
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
      <Form onSubmit={handleSubmit(handleSignUp)}>
        <FormHeader>
          <NextLink href="/profile">
            <BackToProfile>
              <MdArrowBack />
            </BackToProfile>
          </NextLink>
          <Title>Cadastro de Instituição</Title>
          <div></div>
        </FormHeader>

        <Input
          register={register}
          error={errors.name}
          name="name"
          type="text"
          placeholder="Nome"
        />

        <Title>Endereço da Instituição</Title>

        <InputRow>
          <Input
            register={register}
            error={errors.streeName}
            name="streeName"
            type="text"
            placeholder="Rua"
          />
          <Input
            register={register}
            error={errors.number}
            name="number"
            type="text"
            placeholder="Numero"
          />
          <Input
            register={register}
            error={errors.district}
            name="district"
            type="text"
            placeholder="Bairro"
          />
        </InputRow>
        <Input
          register={register}
          name="reference"
          type="text"
          placeholder="Referencia"
        />
        <InputRow>
          <Input
            register={register}
            error={errors.zipCode}
            name="zipCode"
            type="text"
            placeholder="Cep"
          />
          <Input
            register={register}
            error={errors.city}
            name="city"
            type="text"
            placeholder="Cidade"
          />
          <Input
            register={register}
            error={errors.state}
            name="state"
            type="text"
            placeholder="Estado"
          />
        </InputRow>

        <Button>Cadastrar</Button>
      </Form>
    </Container>
  );
};
export default RegisterInstitution;
