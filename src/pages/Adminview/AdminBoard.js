import React from "react";
import { Link } from "react-router-dom";
import "./main.css"

export default function Admin(){
    return(
        <>        
        <h2 style={{"textAlign": "center", "color": "white"}}>Bienvenido</h2>
        <h2 style={{"textAlign": "center", "color": "white"}}>¿Que desea hacer?</h2>

        <div class="container" >
            <div class="row" id="container-row">
                <div class="col" id="container-col">
                <button type="button" class="btn btn-secondary btn-lg">Ver lista de pacientes</button>
                </div>
                <div class="col" id="container-col">
                <button type="button" class="btn btn-secondary btn-lg">Ver lista de citas</button>
                </div>
            </div>
            <div class="row" id="container-row2">
                <div class="col" id="container-col">
                <Link to={"/addAdmin"}>
                <button type="button" class="btn btn-secondary btn-lg">Agregar un nuevo Admin</button>
                </Link>
                </div>
                <div class="col" id="container-col">
                <button type="button" class="btn btn-secondary btn-lg">Eliminar Admin</button>
                </div>
                <div class="col" id="container-col">
                <button type="button" class="btn btn-secondary btn-lg">Eliminar paciente</button>
                </div>
            </div>
        </div>
        </>
    )
}