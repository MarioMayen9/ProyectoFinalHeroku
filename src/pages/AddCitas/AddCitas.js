import React from "react";
import {useNavigate} from 'react-router-dom';
import { useState } from "react";
import CitasService from "../../services/CitasService";

const AddCitas = () => {
    const [detalleCita, setDetalleCita]= useState ('')
    const navigate = useNavigate();



    const saveCita = (e) =>{
e.preventDefault();
const cita ={detalleCita}
CitasService.createCita(cita).then((response)=>{
    console.log(response.data)
    navigate('/citaslist');

}).catch(error => {
    console.log(error)
})

}
return (
    <>
<div>
    
    <h2>Por favor agregar una cita, coloque su nombre completo, numero de telefono y fecha.</h2>

</div>
<div className="container">
    <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
            <h1 className="text-center">Agregar cita</h1>
            <div className="card-body">
                <form >
                    <div className="form-group mb2">
                        <label className="form-label">Detalle de la cita:</label>
                        
                        <input type="text" 
                               placeholder="Agregar detalle de cita"
                               name="detalleCita"
                               className="form-control"
                               value={detalleCita}
                               onChange={(e)=> setDetalleCita(e.target.value)}
                        >

                        </input>
                    </div>
                    <br>
                    </br>
                    <button className="btn btn-success" onClick={(e)=>saveCita(e)}>Agendar</button>

                </form>
            </div>
        </div>
    </div>

</div>
</>


)


}
export default AddCitas



