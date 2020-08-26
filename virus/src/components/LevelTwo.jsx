import React from 'react';
import '../styles/levelTwo.css';
import { Link } from "react-router-dom";

const levelTwo = () => {
    return (
        <div className="sectionGAV">
             <h1>Etapa 2: Cuidados</h1>  
            <div className="containerAllBtn">
                    <Link to="/levelThree" className="link">
                        <button className="btnThree">
                            <h4 className="tittleBtn">Etapa 3</h4>                            
                        </button>
                    </Link>
            </div>   
        </div> 
    )
}

export default levelTwo

