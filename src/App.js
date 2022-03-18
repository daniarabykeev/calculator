import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import "./App.css";
import ButtonAC from './components/ButtonAC';
import ButtobDivide from './components/ButtonDivide';
import ButtonDot from './components/ButtonDot';
import ButtonEqual from './components/ButtonEqual';
import ButtonLeftBracket from './components/ButtonLeftBracket';
import ButtonNumbers from './components/ButtonNumbers';
import ButtonRightBracker from './components/ButtonRightBracker';
import ButtonZero from './components/ButtonZero';
import Result from './components/Result';



const App = () => {
  let elems = [7,8,9, "*", 4,5,6, "-", 1,2,3, "+"]
  const[result, setResult] = useState("0")

  function handleValues(value){
    if(result === "0" && value != "."){
      setResult(String(value))
      return
    }
    setResult(String(result) + String(value))
  }

  function equal (){
    try{
      let res = eval(result)
    setResult(res)
    }catch(error){
      setResult("Error!")
    }
    setTimeout(()=>{
      setResult("0")
    }, 5000)
  }

    return (
    <div className='wrapper'>
      <Result 
        result={result}
      />
      <div className='buttons'>
        <ButtonAC setResult={setResult}/>

        <ButtonLeftBracket 
        handleValues={handleValues}/>

        <ButtonRightBracker 
        handleValues={handleValues}/>

        <ButtobDivide
         handleValues={handleValues}/>

        {elems.map((item, index)=> <ButtonNumbers key={index} elem={item} handleValues={handleValues}/>)}

        <ButtonZero 
        handleValues={handleValues}/>

        <ButtonDot 
        handleValues={handleValues}/>

        <ButtonEqual equal={equal}/>


        
      </div>
    </div>
  );
};

export default App;
