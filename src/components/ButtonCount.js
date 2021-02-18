import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function ButtonCount({setRed,setGreen,setBlue,r,g,b}) {
   
    function redButton(){
        setRed((countRed)=>countRed+1);
    }
    function blueButton(){
        setBlue((countBlue)=>countBlue+1);
    }
    function greenButton(){
        setGreen((countGreen)=>countGreen+1);
    }
 
    return (
        <div>
            <Container>
            <Button onClick={redButton} variant="danger">Clicked {r} times!</Button>{' '}
            <Button onClick={blueButton} variant="primary">Clicked {b} times!</Button>{' '}
            <Button onClick={greenButton} variant="success">Clicked {g} times!</Button>{' '}
            </Container>
  
        </div>
    )
}
