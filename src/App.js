import Count from "./components/Count";
import {useState} from'react';
import ButtonCount from "./components/ButtonCount";
import './App.css';
import ResetCount from "./components/ResetCount";
import TotalCount from "./components/TotalCount";


function App() {
  const [countRed,setCountRed] = useState(0);
   const [countBlue,setCountBlue] = useState(0);
   const [countGreen,setCountGreen] = useState(0);
   const [countRstRed] = useState(0);
   const [countRstBlue] = useState(0);
   const [countRstGreen] = useState(0);
 
  return (
    <div>
      <Count/>
      <ButtonCount setBlue={setCountBlue} b={countBlue} setRed={setCountRed} r={countRed} setGreen={setCountGreen} g={countGreen}/>
      <br/>
      <ResetCount setBlue={setCountBlue} setRed={setCountRed} setGreen={setCountGreen} r={countRed} g={countGreen} b={countBlue} red={countRstRed} blue={countRstBlue} green={countRstGreen}/>
      <br/>
      <TotalCount red={countRed} blue={countBlue} green={countGreen}/>
    </div>
  );
}

export default App;
