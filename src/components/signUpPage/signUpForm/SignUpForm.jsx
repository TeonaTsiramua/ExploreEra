import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

import Button from '../../shared/button/Button';
import {
  Form,
  Section,
  Label,
  Input,
  Error,
  Upload,
  UploadDiv,
  UserImg,
} from './style';

const SignUpForm = () => {
  const [photoUrl, setPhotoUrl] = useState(null);
  const navigate = useNavigate();

  const auth = useAuth();
  const {
    handleSubmit,
    trigger,
    formState: { errors },
    watch,
    control,
  } = useForm({ trim: true });

  const password = watch('password');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target.result;
        // Set the photo URL in state for immediate display
        setPhotoUrl(dataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data) => {
    // Add photo URL to the form data
    data.photoUrl = photoUrl;
    auth.setSignUpData(data);
    // Save the form data to local storage
    localStorage.setItem('signUpData', JSON.stringify(data));
    navigate('/sign-in');
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='firstName'
        control={control}
        defaultValue=''
        rules={{
          required: 'First name is required',
          minLength: {
            value: 2,
            message: 'First name must be at least 2 characters long',
          },
        }}
        render={({ field }) => (
          <Section>
            <Label htmlFor='first name'>First Name</Label>
            <Input
              type='text'
              id='first name'
              placeholder='Enter your first name'
              {...field}
              onBlur={(e) => {
                field.onChange(e.target.value.trim());
                field.onBlur();
                trigger('firstName');
              }}
            />
            {errors.firstName && <Error>{errors.firstName.message}</Error>}
          </Section>
        )}
      />
      <Controller
        name='lastName'
        control={control}
        defaultValue=''
        rules={{
          required: 'Last name is required',
          minLength: {
            value: 2,
            message: 'Last name must be at least 2 characters long',
          },
        }}
        render={({ field }) => (
          <Section>
            <Label htmlFor='last name'>Last Name</Label>
            <Input
              type='text'
              id='last name'
              placeholder='Enter your last name'
              {...field}
              onBlur={(e) => {
                field.onChange(e.target.value.trim());
                field.onBlur();
                trigger('lastName');
              }}
            />
            {errors.lastName && <Error>{errors.lastName.message}</Error>}
          </Section>
        )}
      />

      <Controller
        name='email'
        control={control}
        defaultValue=''
        rules={{
          required: 'Email is required',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Invalid email address',
          },
        }}
        render={({ field }) => (
          <Section>
            <Label htmlFor='email'>Email</Label>
            <Input
              type='email'
              id='email'
              placeholder='Enter your email address'
              {...field}
              autoComplete='username'
              onBlur={(e) => {
                field.onChange(e.target.value.trim());
                field.onBlur();
                trigger('email');
              }}
            />
            {errors.email && <Error>{errors.email.message}</Error>}
          </Section>
        )}
      />

      <Controller
        name='password'
        control={control}
        defaultValue=''
        rules={{
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters long',
          },
          pattern: {
            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
            message:
              'Password must contain at least one uppercase, one lowercase, and one number.',
          },
        }}
        render={({ field }) => (
          <Section>
            <Label htmlFor='password'>Password</Label>
            <Input
              type='password'
              id='password'
              placeholder='Enter your password'
              {...field}
              autoComplete='new-password'
              onBlur={() => {
                trigger('password');
              }}
            />
            {errors.password && <Error>{errors.password.message}</Error>}
          </Section>
        )}
      />

      <Controller
        name='confirmPassword'
        control={control}
        defaultValue=''
        rules={{
          validate: (value) =>
            value === password || 'The passwords do not match',
        }}
        render={({ field }) => (
          <Section>
            <Label htmlFor='confirm password'>Confirm Password</Label>
            <Input
              type='password'
              id='confirm password'
              placeholder='Re-enter your password'
              {...field}
              autoComplete='new-password'
              onChange={(e) => {
                field.onChange(e.target.value);
                trigger('confirmPassword');
              }}
            />
            {errors.confirmPassword && (
              <Error>{errors.confirmPassword.message}</Error>
            )}
          </Section>
        )}
      />

      <UploadDiv>
        <Upload type='file' accept='image/*' onChange={handleFileChange} />
        {photoUrl && <UserImg src={photoUrl} alt='Uploaded' />}
      </UploadDiv>

      <Button
        primary
        content='Continue'
        type='submit'
        disabled={!auth.isAgreed}
      />
    </Form>
  );
};
export default SignUpForm;
