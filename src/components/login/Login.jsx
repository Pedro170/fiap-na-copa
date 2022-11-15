import React from "react";
import { useNavigate } from "react-router-dom";
import { H1, Img, P, Title } from "../../styles/components";
import Button from "../forms/button/Button";
import Input from "../forms/input/Input";
import { CImg, CLogin, DivLogin, Form } from "./login.styles";
import img from "../../image/logo-grand.png";

const Login = () => {
  const [error, setError] = React.useState(null);
  const [usuario, setUsuario] = React.useState({
    login: "",
    senha: "",
    /* rm: "rm",
    nome: "", */
  });

  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setUsuario({ ...usuario, [id]: value });
  };

  const handleSubmitLoginUsuario = async (event) => {
    event.preventDefault();

    try {
      setError(false);
      const response = await fetch(
        `http://localhost:8080/FiapCopa/rest/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(usuario),
        }
      );

      const data = await response.json();

      if (data.login) {
        sessionStorage.setItem("usuario-validado", data.login);
        navigate("/home");
      }

      setError(false);
    } catch {
      alert("Usuário ou senhas errados");
      setError(error);
    }
  };

  return (
    <CLogin>
      <DivLogin>
        <H1 textAlign="center" mb={0.5} type="second">
          Essa é sua área de login
        </H1>
        <P textAlign="center" type="second">
          Aqui você poderá fazer o login, usando seu usuário, senha, rm e nome completo. Já pré-cadastrado na nossa plataforma.
        </P>

        <CImg>
          <Img src={img} alt="Logo da copa do mundo" />
        </CImg>
      </DivLogin>
      <Form onSubmit={handleSubmitLoginUsuario}>
        <Title>Login Usuário</Title>
        <Input
          id="login"
          label="Usuário"
          type="text"
          name="login"
          value={usuario.login}
          onChange={handleChange}
        />
        <Input
          id="senha"
          label="Senha"
          type="password"
          name="senha"
          value={usuario.senha}
          onChange={handleChange}
        />
        <Input
          id="rm"
          label="Rm"
          type="text"
          name="rm"
          value={ usuario.rm }
          onChange={ handleChange }
        />
        <Input
          id="nome"
          label="Nome Completo"
          type="text"
          name="nome"
          value={ usuario.nome }
          onChange={ handleChange }
        />
        <Button type="first" color="#D9A511" />
      </Form>
    </CLogin>
  );
};

export default Login;
