import React from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import "./main.css";


const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <div class="card w-75" id="card-info-user">
        <div class="card-body">
          <h4 class="card-title">Bienvenido <strong>{currentUser.username}</strong></h4>
          <p>
            <strong>Token: </strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
            {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
          </p>
          <p>
            <strong>Id: </strong> {currentUser.id}
          </p>
          <p>
            <strong>Email: </strong> {currentUser.email}
          </p>
          <p>
            <strong>Nombre: </strong> {currentUser.name}
          </p>
          <strong>Authorities:</strong>
          <ul>
            {currentUser.roles &&
              currentUser.roles.map((role, index) => <li key={index} style={{"listStyleType": "none"}}>{role}</li>)}
          </ul>
        </div>
      </div>
      </>
  );
};
export default Profile;