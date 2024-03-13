import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import LoginImg from '../../assets/logi-image.svg'
import Logo from '../../assets/logo.svg'
import { Button, ErrorMessage } from '../../components'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  SignInLink
} from './styles'

export function Login() {
  const history = useHistory()
  const { putUserData } = useUser()

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um email válido.')
      .required('O email é um campo obrigatório.'),
    password: Yup.string()
      .required('A senha é um campo obrigatório')
      .min(6, 'A senha precisa ter no mínimo 6 carateres.')
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
      // console.log(clientData)
      const { data } = await toast.promise(
        api.post('sessions', {
          email: clientData.email,
          password: clientData.password
        }),
        {
          pending: 'Verificando seus dados',
          success: 'Seja bem-vindo(a) 👌',
          error: 'Verifique seu e-mail e senha 🤯'
        }
      )

      putUserData(data)
      setTimeout(function () {
        if (data.admin) {
          history.push('/pedidos')
          console.log(`admin logado teste`)
        } else {
          history.push('/')
        }
      }, 1000)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-image" />
      <ContainerItens>
        <img src={Logo} alt="logo-code-burger" />
        <h1>Login</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
          <Button type="submit" style={{ marginTop: 67, marginBottom: 26 }}>
            Sing In
          </Button>
        </form>
        <SignInLink>
          Não possui conta ?{' '}
          <Link style={{ color: 'white' }} to="/cadastro">
            Sing Up
          </Link>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}
