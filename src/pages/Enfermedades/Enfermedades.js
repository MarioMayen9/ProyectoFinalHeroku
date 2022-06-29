import React from "react";
import Covid from "../../assets/img/ImgDiseases/covidimage.jpg"
import bron from "../../assets/img/ImgDiseases/bronquitis.jpg"
import gar from "../../assets/img/ImgDiseases/garganta.jpg"
import hepa from "../../assets/img/ImgDiseases/hepatitis.jpg"
import vih from "../../assets/img/ImgDiseases/imagevih.jpg"
import infeu from "../../assets/img/ImgDiseases/infeccionu.png"
import influ from "../../assets/img/ImgDiseases/influenza.jpg"
import sinu from "../../assets/img/ImgDiseases/sinusitis.jpg"
//import "./main.css";
import Card from "../../components/Card/Card";


const cards = [
    {
        id: 1,
        title: 'Covid-19',
        image: Covid,
        text: 'Informese sobre la actualidad acerca del covid-19 en El Salvador'
    },

    {
        id: 2,
        title: 'VIH',
        image: vih,
        text: 'El VIH (virus de la inmunodeficiencia humana), ¿que es?'
    },

    {
        id: 3,
        title: 'Hepatitis',
        image: hepa,
        text: 'Conozca los tipos de hepatitis que existen y sus consecuencias'
    },

    {
        id: 4,
        title: 'Influenza',
        image: influ,
        text: 'Conozca las consecuencias de la Influenza'
    },

    {
        id: 5,
        title: 'Infeccion Urinaria',
        image: infeu,
        text: '¿Siente dolor o ardor al orinar? Podría tener una infección urinaria'
    },

    {
        id: 6,
        title: 'Sinusitis',
        image: sinu,
        text: '¿Congestión nasal que simplemente no mejora? Podría tener una sinusitis'
    },

    {
        id: 7,
        title: 'Bronquitis aguda',
        image: bron,
        text: '¿Por la noche la tos no lo deja dormir? Usted podría tener bronquitis aguda.'
    },

    {
        id: 8,
        title: 'Dolor de garganta',
        image: gar,
        text: '¿Duele al tragar? O ¿le pica la garganta?'
    },
]

export default function Diseases(){

    return(
        <>
        
            <h2 id="textPrincipal" style={{color: 'white'}}>Enfermedades y su informacion</h2>

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