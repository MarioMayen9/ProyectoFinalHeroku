import React from "react";

import Acetaminofen from "../../assets/img/ImgMedications/amoxi.jpg"
import Ad from "../../assets/img/ImgMedications/ad.png"
import Amoxi from "../../assets/img/ImgMedications/primerosauxilios.jpg"
import Aspirina from "../../assets/img/ImgMedications/aspirina.jpg"
import Ibu from "../../assets/img/ImgMedications/ibuprofeno.jpg"
import Zelt from "../../assets/img/ImgMedications/zeltser.jpg"
import "./main.css";


import Card from "../../components/Card/Card";


const cards = [
    {
        id: 1,
        title: 'Acetamienofen',
        image: Acetaminofen,
        text: '¿Cómo se debe usar este medicamento?',
        url: ''

    },

    {
        id: 2,
        title: 'Amoxicilina',
        image: Amoxi,
        text: '¿Para cuáles condiciones o enfermedades se prescribe este medicamento?',
        url: ''

    },

    {
        id: 3,
        title: 'Aspirina',
        image: Aspirina,
        text: '¿Cuáles son las precauciones especiales que debo seguir?',
        url: ''

    },

    {
        id: 4,
        title: 'Ibuprofeno',
        image: Ibu,
        text: '¿Cuáles son los efectos secundarios que podría provocar este medicamento?',
        url: ''

    },

    {
        id: 5,
        title: 'ALKA-AD',
        image: Ad,
        text: 'Antidiarreico reductor de la motilidad intestinal',
        url: ''

    },

    {
        id: 6,
        title: 'Alka-Seltzer',
        image: Zelt,
        text: 'Actua disminuyendo el exceso de acidez del estómago.',
        url: ''

    },
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