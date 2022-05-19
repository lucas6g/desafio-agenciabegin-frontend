import type { NextPage } from 'next';

import { Button } from '../components/Button/Button';
import { Controller, FieldValues } from 'react-hook-form';
import { Input } from '../components/Input/Input';
import {
  BackToProfile,
  Container,
  Form,
  Title,
  FormHeader,
  InputRow,
  StyledSelect,
  ErrorBox,
  SinopseTextArea
} from '../styles/pages/CreateBookStyles';
import { MdArrowBack } from 'react-icons/md';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import NextLink from 'next/link';
import { useState } from 'react';
import { ImageUpload } from '../components/ImageUpload/ImageUpload';

const createUserFormSchema = yup.object().shape({
  bookName: yup.string().required('Nome obrigátorio'),
  year: yup
    .string()
    .required('Ano Obrigatorio')
    .max(4, 'Digite um ano Valido')
    .min(4, 'Digite um ano Valido'),

  releaseDate: yup.string().required('Data de Lançamento Obrigatoria'),

  conditions: yup
    .object()
    .shape({
      label: yup.string().required(),
      value: yup.string().required()
    })
    .required('Estado obrigátorio')
    .nullable(),

  bookImage: yup.mixed().test('required', 'Imagem Obrigatoria', (value) => {
    return value && value.length;
  }),
  institution: yup
    .object()
    .shape({
      label: yup.string().required(),
      value: yup.string().required()
    })
    .required('Instituição obrigátoria')
    .nullable(),
  edition: yup.string().required('Edição Obrigatoria'),
  quantity: yup.string().required('Quantidade Obrigatoria'),
  sinopse: yup.string().required('Sinopse obrigatoria'),
  streeName: yup.string().required('Nome Da Rua obrigátorio'),
  number: yup.string().required('Numero Da Rua obrigátorio'),
  district: yup.string().required('Bairro obrigátorio'),
  zipCode: yup.string().required('Cep obrigátorio'),
  city: yup.string().required('Cidade obrigátoria'),
  state: yup.string().required('Estado obrigátorio')
});

type PreviewImage = {
  alt: string;
  url: string;
};

const CreateBookStyles: NextPage = () => {
  const [imagePreview, setimagePreview] = useState<PreviewImage>({
    alt: '',
    url: ''
  });

  const {
    register,
    handleSubmit,
    control,

    formState: { errors }
  } = useForm<FieldValues>({
    resolver: yupResolver(createUserFormSchema)
  });

  function handleSelectImage(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const url = URL.createObjectURL(event.target.files[0]);
      const alt = event.target.files[0].name;

      setimagePreview({
        alt,
        url
      });
    }
  }
  const [textAreaFocus, setTextAreaFocus] = useState(false);

  const handleTextAreaFocus = () => {
    setTextAreaFocus(true);
  };

  const handleTextAreaBlur = () => {
    setTextAreaFocus(false);
  };

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
          <Title>Cadastro de livro</Title>
          <div></div>
        </FormHeader>

        <Input
          register={register}
          error={errors.bookName}
          name="bookName"
          type="text"
          placeholder="Nome"
        />
        <InputRow>
          <Input
            register={register}
            error={errors.year}
            name="year"
            type="number"
            placeholder="Ano"
          />
          <Input
            register={register}
            error={errors.releaseDate}
            name="releaseDate"
            type="date"
            placeholder="Data de Lançamento"
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
        </InputRow>

        <ImageUpload
          register={register}
          name="bookImage"
          errorMessage={errors.bookImage?.message}
          imgUrl={imagePreview.url}
          alt={imagePreview.alt}
          handleSelectImage={handleSelectImage}
          error={Boolean(errors.bookImage)}
        />
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
        <InputRow>
          <Input
            register={register}
            error={errors.edition}
            name="edition"
            type="number"
            placeholder="Edição"
          />

          <Input
            register={register}
            error={errors.quantity}
            name="quantity"
            type="number"
            placeholder="Quantidade"
          />
        </InputRow>
        <ErrorBox>
          <SinopseTextArea
            isFocused={textAreaFocus}
            isErrored={Boolean(errors.sinopse)}
            {...register('sinopse')}
            onBlur={handleTextAreaBlur}
            onFocus={handleTextAreaFocus}
            placeholder="Sinopse"
          />
          {!!errors.sinopse && <span>{errors.sinopse.message}</span>}
        </ErrorBox>
        <Title>Endereço do Livro</Title>

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
export default CreateBookStyles;
