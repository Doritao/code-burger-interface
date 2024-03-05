import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import Logo from '../../assets/logo.svg'
import RegisterImg from '../../assets/register img.svg'
import { Button } from '../../components'
import api from '../../services/api'
import {
  Container,
  RegisterImage,
  ContainerItens,
  Label,
  Input,
  SignInLink,
  ErrorMessage
} from './styles'

export function Register() {
  const schema = Yup.object().shape({
    name: Yup.string().required('O seu nome é obrigatório'),
    email: Yup.string()
      .email('Digite um email válido')
      .required('O email é um campo obrigatório'),
    password: Yup.string()
      .required('A senha é um campo obrigatório')
      .min(6, 'A senha precisa ter no mínimo 6 carateres'),
    confirmPassword: Yup.string()
      .required('A senha precisa ser igual nos dois campos')
      .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    try {
      console.log(clientData)
      const { status } = await api.post(
        'users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )

      if (status === 201 || status === 200) {
        toast.success('Usuário criado com sucesso')
      } else if (status === 409) {
        toast.success('E-mail já cadastrado! Faça o login para continuar')
      } else {
        throw new Error()
      }
    } catch (error) {
      toast.error('Falha no sistema ! Tente novamente')
      console.log(error)
    }
  }

  return (
    <Container>
      <RegisterImage src={RegisterImg} alt="register-image" />
      <ContainerItens>
        <img src={Logo} alt="logo-code-burger" />
        <h1>Cadastre-se</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.name?.message}>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            error={errors.name?.message}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <Label error={errors.email?.message}>Email</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label error={errors.password?.message}>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label error={errors.confirmPassword?.message}>Confirmar Senha</Label>
          <Input
            type="password"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 25, marginBottom: 26 }}>
            Sing In
          </Button>
        </form>
        <SignInLink>
          Não possui conta ?{' '}
          <Link style={{ color: 'white' }} to="/login">
            Sing Up
          </Link>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}
