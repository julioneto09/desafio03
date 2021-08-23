// store-block/react/Countdown.tsx
import React from "react";

interface novoProps {}

const Form: StorefrontFunctionComponent<novoProps> = ({}) => {
  return (
    <div>
      <h1>CADASTRO</h1>
      <form>
        <label>Nome</label>
        <input type="text" id="nome" />
        <br />
        <label>CPF</label>
        <input type="number" id="cpf" />
        <br />
        <label>E-mail</label>
        <input type="email" id="email" />
        <br />
        <label>Telefone</label>
        <input type="tel" id="telefone" />
        <br />
        <label>Endereço</label>
        <input type="text" id="endereço" />
        <br />
        <button type="submit">Cadastrar Cliente</button>
      </form>
    </div>
  );
};

Form.schema = {
  title: "editor.countdown.title",
  description: "editor.countdown.description",
  type: "object",
  properties: {},
};

export default Form;
