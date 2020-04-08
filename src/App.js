import React from 'react';
import { Scope } from "@unform/core";
import { Form  } from "@unform/web";
import * as Yup from 'yup';
import styled from 'styled-components';
// Project import

import Input from './components/Input';
import './App.css';

// Styled components

const Button = styled.button.attrs({
  type: 'submit',
})`
  background: green;
  font-weight: bold;
  font-size: 16px;
  color: white;
`;
const schema = Yup.object().shape({
  username: Yup.string()
    .email('Endereço de email inválido')
    .required('Campo obrigatório'),
  password: Yup.string()
    .min(6, 'A senha precisa ter no mínimo 6 caracteres')
    .required('Campo obrigatório'),
  grades: Yup.string()
    .required('Ano obrigatório'),
  textarea: Yup.string().min(6, 'Minimo 6 caracteres').required('Textarea necessário')
})

function App() {
  function handleSubmit(data, {reset}){
    console.log(data);
    
    reset();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="username" label="Usuário" />
      <Input name="password" label="Senha" />

      <Button>Enviar</Button>
    </Form>
  );
}

export default App;
