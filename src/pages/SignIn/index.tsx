import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';

import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import movaImg from '../../assets/mova-black.svg';
import logoMova from '../../assets/logo-mova.svg';

import { Container, Content, AnimationContainer, Description, Menu, Text } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Erro ao realizar login',
        });
      }
    },
    [signIn, addToast, history],
  );

  return (
    <Container>
      <Description>
        <Menu>
          <img src={logoMova} alt=""/>
          <nav>
            <ul>
              <li>Home</li>
              <li>Sobre</li>
              <li>Contato</li>
            </ul>
          </nav>
        </Menu>

        <Text>
         <h1>Rede de descontos e cashback</h1>
         <p>O comércio local fortalecido e fornecendo vantagens à seus clientes</p>
        </Text>

      
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      
      </Description>
      <Content>
        <AnimationContainer>
          <img src={movaImg} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>

            <Input name="email" icon={FiMail} placeholder="E-mail" />

            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <Button type="submit">Entrar</Button>

            <Link to="/signup">Esqueci minha senha</Link>
          </Form>
          <Link to="/signup">
            <FiLogIn />
            Criar conta
          </Link>
        </AnimationContainer>
      </Content>
      
    </Container>
  );
};

export default SignIn;
