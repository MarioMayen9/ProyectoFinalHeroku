import React from "react";
import {useNavigate} from 'react-router-dom';
import { useState } from "react";
import CitasService from "../../services/CitasService";
import { Link } from "react-router-dom";

const SearchCita = () => {
    const [citaid, getCitaById]= useState ('')
    const navigate = useNavigate();



    const SearchCita = (e) =>{
e.preventDefault();
const cita ={citaid}
CitasService.getCitaById(cita).then((response)=>{
    console.log(response.data)
  //  navigate('/citaslist');

}).catch(error => {
    console.log(error)
})

}
return (
    <>
<div>
    
   

</div>
<div className="container">
    <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
            <h1 className="text-center">Buscar cita</h1>
            <div className="card-body">
                <form >
                    <div className="form-group mb2">
                        <label className="form-label">Digite el id de la cita:</label>
                        
                        <input type="text" 
                               placeholder="Agregar detalle de cita"
                               name="id"
                               className="form-control"
                               value={citaid}
                               onChange={(e)=> getCitaById(e.target.value)}
                        >

                        </input>
                    </div>
                    <br>
                    </br>
                    <Link to ="/citaslist" className="btn btn-primary mb-2"> Buscar cita</Link>
                </form>
            </div>
        </div>
    </div>

</div>
</>


)


}
export default SearchCita
