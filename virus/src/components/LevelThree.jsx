import React from 'react';
import '../styles/levelTwo.css';
import { Link } from "react-router-dom";

const levelThree = () => {
    return (
        <div className="sectionGAV">
             <h1>Etapa 3</h1>  
             <div className="containerAllBtn">
                    <Link to="/levelOne" className="link" >
                        <button className="btnOne">
                            <h4 className="tittleBtn">Etapa 1</h4>                            
                        </button>
                    </Link>
                </div>  

        </div> 
    )
}

export default levelThree

