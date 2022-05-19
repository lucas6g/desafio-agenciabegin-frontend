import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes
} from 'react';
import {
  Container,
  ImageContainer,
  Label,
  ImageIcon
} from './ImageUploadStyles';
import Image from 'next/image';
import { UseFormRegister, FieldValues } from 'react-hook-form';

type ImageUploadProps = InputHTMLAttributes<HTMLInputElement> & {
  imgUrl: string;
  alt: string;
  error: boolean;
  errorMessage: string | undefined;
  handleSelectImage: (event: any) => void;
  register: UseFormRegister<FieldValues>;
};

const InputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  ImageUploadProps
> = ({
  imgUrl,
  alt,
  error,
  errorMessage,
  register,
  name,
  handleSelectImage,
  ...rest
}) => {
  const image = register(String(name));
  const originalOnChange = image.onChange;
  image.onChange = (event) => {
    const res = originalOnChange(event);
    handleSelectImage(event);
    return res;
  };
  return (
    <Container>
      <Label error={error} htmlFor="image">
        {imgUrl !== '' && alt !== '' && (
          <ImageContainer>
            <Image
              src={imgUrl}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt={alt}
            />
          </ImageContainer>
        )}
        {error ? errorMessage : <ImageIcon />}
      </Label>
      <input
        accept=".png, .jpg, .jpeg"
        type="file"
        id="image"
        {...rest}
        {...image}
      />
    </Container>
  );
};

export const ImageUpload = forwardRef(InputBase);
