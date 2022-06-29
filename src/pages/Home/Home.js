import React, { useState, useEffect } from "react";
import UserService from "../../services/user.service";
import { Link } from "react-router-dom";
import "./main.css";

const Home = () => {
  const [content, setContent] = useState("");
  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
        setContent(_content);
      }
    );
  }, []);
  return (
    <>
    <div className="container">
      <header className="jumbotron">
      <h1 style={{"color": "white", "textAlign": "center", "paddingTop": "150px"}}>Bienvenido</h1>
      <h1 style={{"color": "white", "textAlign": "center"}}>A tu sitio de salud preferido</h1>
      </header>
    </div>
    <div className="btn-contenedor">
      <Link to={"/login"} id="btn-login">
       <button className="btn btn-secondary btn-login">Iniciar sesion</button>
        </Link>
        <Link to={"/register"}>
        <button className="btn btn-secondary btn-register">Registrarse</button>
        </Link>
      </div>

    </>
  );
};
export default Home;