import type { NextPage } from 'next';

import { Button } from '../../components/Button/Button';
import { Controller, FieldValues } from 'react-hook-form';
import { Input } from '../../components/Input/Input';
import {
  BackToProfile,
  Container,
  Form,
  Title,
  FormHeader,
  ErrorBox,
  StyledSelect
} from '../../styles/pages/EditBookStyles';
import { MdArrowBack } from 'react-icons/md';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import NextLink from 'next/link';

const createUserFormSchema = yup.object().shape({
  edition: yup.string().required('Edição Obrigatoria'),
  conditions: yup
    .object()
    .shape({
      label: yup.string().required(),
      value: yup.string().required()
    })
    .required('Estado obrigátorio')
    .nullable(),
  institution: yup
    .object()
    .shape({
      label: yup.string().required(),
      value: yup.string().required()
    })
    .required('Instituição obrigátoria')
    .nullable()
});

const EditBook: NextPage = () => {
  const {
    register,
    handleSubmit,
    control,
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
          <Title>Editar Livro</Title>
          <div></div>
        </FormHeader>
        <Input
          register={register}
          error={errors.edition}
          name="edition"
          type="number"
          placeholder="Edição"
        />
        <ErrorBox>
          <Controller
            name="conditions"
            render={({ field }) => (
              <StyledSelect
                styles={{
                  control: (styles) => ({
                    ...styles,
                    height: 48,
                    border: errors.conditions ? '2px solid red' : ''
                  }),
                  option: (provided) => ({
                    ...provided,
                    '&:hover': {
                      cursor: 'pointer'
                    }
                  })
                }}
                {...field}
                options={[
                  { value: 'usado', label: 'Usado' },
                  { value: 'novo', label: 'Novo' },
                  { value: 'danificado', label: 'Danificado' }
                ]}
                placeholder="Estado"
              />
            )}
            control={control}
            defaultValue=""
          />
          {!!errors.conditions && <span>{errors.conditions.message}</span>}
        </ErrorBox>
        <ErrorBox>
          <Controller
            name="institution"
            render={({ field }) => (
              <StyledSelect
                styles={{
                  control: (styles) => ({
                    ...styles,
                    height: 48,
                    border: errors.institution ? '2px solid red' : ''
                  }),
                  option: (provided) => ({
                    ...provided,
                    '&:hover': {
                      cursor: 'pointer'
                    }
                  })
                }}
                {...field}
                options={[
                  { value: 'usado', label: 'Usado' },
                  { value: 'novo', label: 'Novo' },
                  { value: 'danificado', label: 'Danificado' }
                ]}
                placeholder="instituição"
              />
            )}
            control={control}
            defaultValue=""
          />
          {!!errors.institution && <span>{errors.institution.message}</span>}
        </ErrorBox>

        <Button>Cadastrar</Button>
      </Form>
    </Container>
  );
};
export default EditBook;
