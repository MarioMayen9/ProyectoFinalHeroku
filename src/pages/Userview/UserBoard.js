import React from "react";
import { Link } from "react-router-dom";

export default function UserBoard(){
    return(
        <>        
        <h2 style={{"textAlign": "center", "color": "white"}}>Bienvenido</h2>
        <h2 style={{"textAlign": "center", "color": "white"}}>¿Que desea hacer?</h2>

        <div className="container" >
            <div className="row" id="container-row">
                <div className="col" id="container-col">
                <Link to={"/auxilios"}>
                <button type="button" class="btn btn-secondary btn-lg">Primeros auxilios</button>
                </Link>                
                </div>
                <div className="col" id="container-col">
                <Link to={"/enfermedades"}>
                <button type="button" class="btn btn-secondary btn-lg">Enfermedades</button>
                </Link>
                </div>
            </div>
            <div className="row" id="container-row2">
                <div className="col" id="container-col">
                    <Link to={"/add-citas"}>
                <button type="button" className="btn btn-secondary btn-lg">Agendar cita</button>
                </Link>
                </div>
                <div className="col" id="container-col">
                <Link to={"/medications"}>
                <button type="button" className="btn btn-secondary btn-lg">Medicamentos y suplementos</button>
                </Link>
                </div>
                <div className="col" id="container-col">
                <Link to={"/citaslist"}>
                <button type="button" className="btn btn-secondary btn-lg">Citas programadas</button>
                </Link>
                </div>
            </div>
        </div>
        </>
    )
}