import React from "react";
import "./main.css"

export default function Cards({title, image, text, url}){

    return(
        <>  
     <div className="col-lg-3 mb-4" id="card">
        <div className="card text-center">
            <img src={image} alt="" className="card-img-top" id="card-img-top"/>
            <div className="card-body" id="card-body">
                <h5 className="card-title text-light" id="card-title">{title}</h5>
                <p className="card-text text-light" id="card-text">{text}</p>
            <a href={url ? url : "#!"} 
            className="btn btn-primary btn-sm"
            target="_blank"
            rel="noreferrer">Más información</a>
            </div>
        </div>
    </div>         
        </>
    )
}