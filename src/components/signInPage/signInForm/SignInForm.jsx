import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { useForm, Controller } from 'react-hook-form';

import Button from '../../shared/button/Button';
import { Error, Form, Input, Label, Section } from './style';

const SignInForm = () => {
  const [ShowError, setShowError] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth();
  const {
    handleSubmit,
    formState: { errors },
    trigger,
    control,
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = auth.signUpData || {};
    if (data.email === email && data.password === password) {
      auth.login();
      navigate('/services');
    } else {
      setShowError(true);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='email'
        control={control}
        defaultValue=''
        rules={{
          required: 'Email is required',
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
              onBlur={() => {
                trigger('email');
                setShowError(false);
              }}
            />
            {errors.email && <Error>{errors.email.message}</Error>}
            {ShowError && <Error>Wrong email</Error>}
          </Section>
        )}
      />

      <Controller
        name='password'
        control={control}
        defaultValue=''
        rules={{
          required: 'Password is required',
        }}
        render={({ field }) => (
          <Section>
            <Label htmlFor='password'>Password</Label>
            <Input
              type='password'
              id='password'
              placeholder='Enter your password'
              {...field}
              autoComplete='current-password'
              onBlur={() => {
                trigger('password');
                setShowError(false);
              }}
            />
            {errors.password && <Error>{errors.password.message}</Error>}
            {ShowError && <Error>Wrong password</Error>}
          </Section>
        )}
      />
      <Button
        primary
        content='Continue'
        type='submit'
        disabled={!auth.isAgreed}
      />
    </Form>
  );
};
export default SignInForm;
