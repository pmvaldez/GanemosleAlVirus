import React from 'react'
import { Container, Button, Link  } from 'react-floating-action-button'
import mod1 from '../img/mod1.svg';
import mod2 from '../img/mod2.svg';
import mod3 from '../img/mod3.svg';
import hoo from '../img/hootie2.png'

const ButtonsPrue = () => {
    return (
        <Container>
            <Link href="#"
            styles={{backgroundColor: '#FDD109', color: 'white',  width:'80px', height:'80px', margin: '10px'}}
                >           
            <img src={mod1}  alt='pumaboton' width='65'/> 
            </Link>
            <Link href="#"
            styles={{backgroundColor: '#3CDCA5', color: 'white',  width:'80px', height:'80px',  margin: '10px'}}
                >           
            <img src={mod2}  alt='wantini' width='65'/>
            </Link>
            <Link href="#"
                styles={{backgroundColor: '#FF508C', color: 'white',  width:'80px', height:'80px',margin: '10px'}}
                >
                <img src={mod3}  alt='tomask' width='65'/>
            </Link>
            <Button
                rotate={true}
                styles={{backgroundColor: '#6a1b9a', color: 'white',  width:'100px', height:'100px',}}>
                <img src={hoo}  alt='wantini' width='70'/>
                </Button>
        </Container>
    )
}

export default ButtonsPrue
