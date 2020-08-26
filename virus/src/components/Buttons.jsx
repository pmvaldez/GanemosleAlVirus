import React, { Fragment } from 'react'
import '../styles/button.css'
import { Link } from "react-router-dom";


const Buttons = () => {
    
    return (
        <Fragment>

        <div className="containerButtons">  
                <div className="containerAllBtn">
                    <Link to="/levelOne" className="link" >
                        <button className="btnOne">
                            <h4 className="tittleBtn">Etapa 1</h4>                            
                        </button>
                    </Link>
                </div>
                <div className="containerAllBtn">
                    <Link  to="/levelTwo" className="link">
                        <button className="btnTwo">
                            <h4 className="tittleBtn">Etapa 2</h4>                            
                        </button>
                    </Link>
                </div>
                <div className="containerAllBtn">
                    <Link to="/levelThree" className="link">
                        <button className="btnThree">
                            <h4 className="tittleBtn">Etapa 3</h4>                            
                        </button>
                    </Link>
                </div>
         </div>    

       

        </Fragment>
        
    )
}

export default Buttons