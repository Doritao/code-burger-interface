import styled from 'styled-components'

import Background from '../../assets/BACKGROUND.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Background}');

  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoginImage = styled.img`
  height: 70%;
`

export const ContainerItens = styled.div`
  border-radius: 0 10px 10px 0;
  background: #373737;
  height: 70%;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    margin-top: 100px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;

    color: #ffffff;
    text-align: center;
  }
`

export const Label = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  text-align: left;
  color: #ffffff;
  margin-top: 33px;
  margin-bottom: 9px;
`

export const Input = styled.input`
width: 391.42px;
height: 38.32px;
border: none;
padding-left: 15px;
box-shadow: 3px 3px 10px 0px #4a90e230;
border-radius: 5px
color: #FFFFFF;
border: ${props => (props.error ? '2px solid rgba(204, 23, 23, 1)' : 'none')}


`

export const SignInLink = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(255, 255, 255, 1);

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const ErrorMessage = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 2px;
  color: rgba(204, 23, 23, 1);
`
