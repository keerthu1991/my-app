import React from 'react';
import Container from 'react-bootstrap/Container';

export default function Count() {
    console.log('hello');
    function printnumber(obj){  //calling the object as parameter
        var key=Object.keys(obj);
        var val=Object.values(obj); //calling the keys of the object argument
    for(var i=1;i<=100;i++){
        //calling each key by its index value
        if(i%key[0]===0){ 
        console.log(val[0],i);
        }
        if(i%key[1]===0)
        {
            console.log(val[1],i);
        }
        if(i%key[2]===0){
            console.log(val[2],i)
        }
        else if(i%key[0]!==0&&i%key[1]!==0&&i%key[2]!==0){
            console.log(i);
        }
    }
    }
    printnumber({2:'two',3:'three',5:'five'});
    return (
        <div>
            <Container>
            <h1>Counting from 1 to 100: Output in Console</h1>
            </Container>
           
        </div>
    )
}
