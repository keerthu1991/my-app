import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup'

export default function ResetCount({setRed,setGreen,setBlue,red,green,blue,r,g,b}) {
    function resetRedBtn(){
        setRed((countRstRed)=>0);
    }
    function resetBlueBtn(){
        setBlue((countRstBlue)=>0);
    }
    function resetGreenBtn(){
        setGreen((countRstGreen)=>0);
    }

    return (
        <div>
        <Container>

<ButtonGroup className="mr-2" aria-label="First group">
<Button  onChange={red} variant="danger">{r}</Button><Button variant="outline-primary" onClick={resetRedBtn}>X</Button>
  </ButtonGroup>{' '}
  <ButtonGroup className="mr-2" aria-label="First group">
  <Button onChange={blue} variant="primary">{b}</Button> <Button variant="outline-primary" onClick={resetBlueBtn}>X</Button>
  </ButtonGroup>{' '}
  <ButtonGroup className="mr-2" aria-label="First group">
  <Button onChange={green} variant="success">{g}</Button> <Button variant="outline-primary" onClick={resetGreenBtn}>X</Button>
  </ButtonGroup>{' '}
        </Container>

    </div>
    )
}
