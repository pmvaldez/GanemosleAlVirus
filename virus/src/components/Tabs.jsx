import React, { Component } from "react";
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import '../styles/tabs.css';
import viru from '../img/virusataque.png';
import pumasick from '../img/GAV_Personaje27.png';
import pumasick2 from '../img/GAV_Personaje28.png';
import pumasick3 from '../img/GAV_Personaje30.png';
import pumasick4 from '../img/GAV_Personaje29.png';
import contact from '../img/covid.png';
import contact2 from '../img/GAV_Personaje34.png';
import contact3 from '../img/bolsahootie-removebg-preview.png';
import defeat from '../img/pollolavado.png';
import defeat2 from '../img/GAV_Personaje09.png';
import defeat3 from '../img/GAV_Personaje21.png';

  class TabsDefault extends Component {
    state = {
      activeItem: "1"
    };

    toggle = tab => e => {
      if (this.state.activeItem !== tab) {
        this.setState({
          activeItem: tab
        });
      }
    };

    render() {
        const purple = {backgroundColor: '#64259D',
            }
      return (
        <MDBContainer >
        <MDBNav className="navs-tabs flex-row justify-content-center align-self-center" style={purple}>
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItem === "1"} onClick={this.toggle("1")} role="tab" >
              CORONAVIRUS
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItem === "2"} onClick={this.toggle("2")} role="tab" >
              SÍNTOMAS
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItem === "3"} onClick={this.toggle("3")} role="tab" >
              CONTAGIO
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItem === "4"} onClick={this.toggle("4")} role="tab" >
              DERROTA
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>

        <MDBTabContent activeItem={this.state.activeItem} >
          <MDBTabPane tabId="1" role="tabpanel">
            <div>
            <h1 className="mt-2 contenido-titulo">
              ¿QUE ES EL CORONAVIRUS?
            </h1>
            <br/>
            <p className="text d-flex flex-row justify-content-center align-self-center">
            El coronavirus es una enfermedad que afecta a las vías respiratorias.
            Este tipo de coronavirus es el más fuerte y puede ser peligroso si no se detecta pronto.  
            </p>
            </div>
            <div className="contImg d-flex flex-row justify-content-center align-self-center">
            <div className="col-md-4 col-xs-8">
              <img src={viru}
              className="img-fluid virus1"              
              alt=""
              />
              </div>
              </div>
          </MDBTabPane>

          <MDBTabPane tabId="2" role="tabpanel">
            <div className="d-flex flex-row justify-content-center align-self-center">
            <h1 className="mt-2 contenido-titulo">
            ¿Cuáles son los síntomas del coronavirus?
            </h1>
            <br/>
            </div>

            <div className="contImg d-flex flex-row justify-content-center align-self-center">
            <div className="col-md-2">
                <img
                  src={pumasick}
                  className="img-fluid pumas" 
                  width="150"                 
                  alt=""
                />
                <br/>
                <br/>
                <p className="text d-flex flex-row justify-content-center" >Fiebre alta</p>
            </div>

            <div className="col-md-2">
                <img
                  src={pumasick2}
                  className="img-fluid pumas"
                  width="150"
                  alt=""
                />
                <br/>
                <br/>
                <p className="text d-flex flex-row justify-content-center align-self-center" >Tos seca y dificultades para respirar.</p>
              </div>
              </div>
              <div className="contImg d-flex flex-row justify-content-center align-self-center">
              <div className="col-md-2">
                <img
                  src={pumasick3}
                  className="img-fluid pumas"
                  width="150"
                  alt=""
                />
                <br/>
                <br/>
                <p className="text d-flex flex-row justify-content-center align-self-center" >Dolor de garganta y pecho.</p>
            </div>

            <div className="col-md-2">
                <img
                  src={pumasick4}
                  className="img-fluid pumas"
                  width="150"
                  alt=""
                />
                <br/>
                <br/>
                <p className="text d-flex flex-row justify-content-center align-self-center" >Dolor de cabeza y cansancio.</p>
            </div>
            </div>
                             
          </MDBTabPane>

          <MDBTabPane tabId="3" role="tabpanel">
          <div className="d-flex flex-row justify-content-center align-self-center">
          <h1 className="mt-2 contenido-titulo">
              ¿Cómo se contagia el coronavirus?
          </h1>
            <br/>
            </div>

            <div class="contImg d-flex flex-row justify-content-center align-self-center">
            <div className="col-md-2">
                <img
                  src={contact}
                  className="img -fluid contact"
                  width="150"
                  alt=""
                />
                <br/>
                <br/>
                <p className="text d-flex flex-row justify-content-center " style={{fontWeight:'bold'}}>Por el aire de la tos y de los estornudos.</p>
            </div>

            <div className="col-md-2">
                <img
                  src={contact2}
                  className="img-fluid contact"
                  width="150"
                  alt=""
                />
                <br/>
                <br/>
                <p className="text d-flex flex-row justify-content-center align-self-center " style={{fontWeight:'bold'}}>Por el contacto con personas enfermas.</p>
              </div>
              
              <div className="col-md-2">
                <img
                  src={contact3}
                  className="img-fluid contact d-flex flex-row justify-content-center align-self-center"
                  width="150"
                  alt=""
                />
                <br/>
                <br/>
                <p className="text d-flex flex-row justify-content-center " style={{fontWeight:'bold'}}>Por tocar objetos sin desinfectar.</p>
            </div>     
            </div>       
              
                               
          </MDBTabPane>        
          <MDBTabPane tabId="4" role="tabpanel">
          <div className="d-flex flex-row justify-content-center align-self-center">  
          <h1 className="mt-2 contenido-titulo">
           ¿Qué puedo hacer para derrotar al coronavirus?
          </h1>
            <br/>
            </div> 

            <div className="contImg d-flex flex-row justify-content-center align-self-center">
            <div className="col-xs- col-sm- col-md-2 col-lg-">
                <img
                  src={defeat}
                  className="defeat"
                  width= "300"                                  
                  alt=""
                />
                <br/>
                <br/>
                <p className="text">Lavarme las manos con frecuencia.</p>
            </div>

            <div className="col-xs- col-sm- col-md-2 col-lg-">
                <img
                  src={defeat2}
                  className="defeat"
                  width="150"
                  alt=""
                />
                <br/>
                <br/>
                <p className="text">Toser y estornudar cubriéndome la boca con un pañuelo.</p>
              </div>

              <div className="col-xs- col-sm- col-md-2 col-lg-">
                <img
                  src={defeat3}
                  className="defeat"
                  width="150"
                  alt=""
                />
                <br/>
                <br/>
                <p className="text">Evitar el contacto con personas enfermas. 
                Utilizar mascarrilla.</p>
            </div>            
              </div>               
          </MDBTabPane>
        </MDBTabContent>
      </MDBContainer>
    );
  }
}
export default TabsDefault;