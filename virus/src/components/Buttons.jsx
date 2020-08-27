import React, { Fragment } from 'react'
import '../styles/button.css'
import { Link } from "react-router-dom";
import mod1 from '../img/mod1.svg';
import mod2 from '../img/mod2.svg';
import mod3 from '../img/mod3.svg';


const Buttons = () => {
    
    return (
        <Fragment>

        <div className="containerButtons">  
                <div className="containerAllBtn">
                    <Link to="/levelOne" className="link" >
                        <button className="btnOne">
                            <img src={mod1}  alt='pumaboton' width='110'/>                          
                        </button>
                    </Link>
                </div>
                <div className="containerAllBtn">
                    <Link  to="/levelTwo" className="link">
                        <button className="btnTwo">
                            <img src={mod2}  alt='wantini' width='100'/>                             
                        </button>
                    </Link>
                </div>
                <div className="containerAllBtn">
                    <Link to="/levelThree" className="link">
                        <button className="btnThree">
                            <img src={mod3}  alt='tomask' width='100'/>                         
                        </button>
                    </Link>
                </div>
         </div>  

       

        </Fragment>
        
    )
}

export default Buttons