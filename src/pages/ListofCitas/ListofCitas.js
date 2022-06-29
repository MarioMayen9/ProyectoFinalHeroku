import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import CitasService from '../../services/CitasService';

const ListofCitas = () => {

    const [citas, setCitas] = useState([])

    useEffect(() => {

        getAllCitas();
    }, [])

    const getAllCitas = () => {
        CitasService.getAllCitas().then((response) => {
            setCitas(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }
    
  
  const deleteCitas = (citaid) =>{

    CitasService.deleteCitas(citaid).then((response)=>{
        getAllCitas();
    }).catch(error=>{
        console.log(error);
    })
  }
    return (
        <div className = "container">
            <h2 className = "text-center"> Lista de citas </h2>
            <Link to ="/add-citas" className="btn btn-primary mb-2"> Agregar cita</Link>
            
            <Link to ="/search-citas" className="btn btn-primary mb-2" style={{marginLeft:"10px"}}> Buscar cita</Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Cita Id </th>
                    <th> Detalle de citas </th>
        
                </thead>
                <tbody>
                    {
                        citas.map(
                            citas =>
                            <tr key = {citas.id}> 
                                <td> {citas.id} </td>
                                
                                <td> {citas.detalleCita} </td>
                                <td>
                                    <button className="btn btn-danger" onClick={(e)=> deleteCitas(citas.id)}>
                                    DELETE
                                    </button>
                                </td>
                               
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListofCitas