import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function TotalCount(totalval,red,blue,green) {
        totalval= parseInt(red + blue + green);
        console.log(parseInt(totalval));
    return (
        <div>
            <Container>
            <Button variant="primary">total</Button>
            </Container>
            
            
        </div>
    )
}
