import React from 'react';
import '../styles/levelOne.css';
import { Link } from "react-router-dom";

const levelOne = () => {
    return (
    <div className="sectionGAV">
        
             <h1>Etapa 1: ¿Que es el Covid-19?</h1>     
        
    <div className="containerAllBtn">
    <Link  to="/levelTwo" className="link">
        <button className="btnTwo">
            <h4 className="tittleBtn">Etapa 2</h4>                            
        </button>
    </Link>
</div>  
</div>   
    )
}

export default levelOne

