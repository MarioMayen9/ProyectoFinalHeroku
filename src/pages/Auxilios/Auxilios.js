import React from "react";
import Asfixia from "../../assets/img/ImgFirstaid/asfixia.jpg"
import Convulsion from "../../assets/img/ImgFirstaid/convulsiones.jpg"
import Dificultad from "../../assets/img/ImgFirstaid/DificultadR.jpg"
import Intoxicacion from "../../assets/img/ImgFirstaid/intoxicacion.jpg"
import Perdida from "../../assets/img/ImgFirstaid/perdida.jpg"
import Raspadura from "../../assets/img/ImgFirstaid/raspadura1.png"
import Sangrado from "../../assets/img/ImgFirstaid/sangrado.jpg"
import Shock from "../../assets/img/ImgFirstaid/shock.jpg"
//import "./main.css"
import Card from "../../components/Card/Card"

const cards = [
    {
        id: 1, 
        title: 'Convulsiones',
        image: Convulsion,
        text: 'Obtenga informacion sobre que hacer en caso de una crisis convulsiva',
        url: 'https://medlineplus.gov/spanish/seizures.html'


    },
    {
        id: 2, 
        title: 'Dificultad respiratoria',
        image: Dificultad,
        text: 'Lea los primeros auxilios para alguien que esté teniendo problemas para respirar.',
        url: ''

    },
    {
        id: 3, 
        title: 'Perdida del conocimiento',
        image: Perdida,
        text: 'Sucede cuando una persona es incapaz de responder a otras personas y actividades.',
        url: ''


    },
    {
        id: 4, 
        title: 'Envenenamiento o intoxicacion',
        image: Intoxicacion,
        text: 'Conozca que hacer en caso de sufrir una intoxicacion',
        url: ''

    },
    {
        id: 5, 
        title: 'Raspaduras',
        image: Raspadura,
        text: 'Una raspadura a menudo no es grave, pero puede ser dolorosa y sangrar un poco.',
        url: ''

    },
    {
        id: 6, 
        title: 'Sangrados nasales',
        image: Sangrado,
        text: 'Tengo muchas hemorragias nasales. ¿Qué puedo hacer para detenerlas?',
        url: ''

    },
    {
        id: 7, 
        title: 'Asfixia',
        image: Asfixia,
        text: 'Que puede ocasionar una asfixia y como actuar ante la situacion',
        url: ''

    },
    {
        id: 8, 
        title: 'Shock',
        image: Shock,
        text: 'El shock requiere tratamiento inmediato y puede empeorar muy rápidamente.',
        url: ''

    }
]

export default function Medications(){

    return(
        <>
            <h2 id="textPrincipal">¿Que hacer en caso de?</h2>

            <section id="gallery">
                <div class="container">
                <div class="row">
                {cards.map(({ title, image, text, url }) => (
                                <Card image={image} title={title} text={text} url={url} />
                            ))}
                </div>
                </div>
            </section>

           
                
           
            


        </>
    )
}