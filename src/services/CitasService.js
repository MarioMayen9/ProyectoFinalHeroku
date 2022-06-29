import axios from "axios";

const CITAS_BASE_REST_API_URL= 'http://localhost:8089/api/citas';

class CitasService{
    getAllCitas(){
    return axios.get(CITAS_BASE_REST_API_URL)
    }

    createCita(cita){
        return axios.post(CITAS_BASE_REST_API_URL,cita)
    }
    getCitaById(citaid){
        return axios.get(CITAS_BASE_REST_API_URL + '/' + citaid);
    }

    deleteCitas(citaid){
        return axios.delete(CITAS_BASE_REST_API_URL + '/' + citaid);
    }
}

export default new CitasService();