import React, { useState } from 'react'
import firebase from "firebase/app";

import { calculate } from '../utils/calculate'

const firestore = firebase.firestore();

const Calculator =(props)=> {
    const calculations = firestore.collection("calculations");
    const [input, setInput] = useState("");
    const [current, setCurrent] = useState("");
    const [op, setOp] = useState("");
    const [allow, setAllow] = useState(true); // limits app to ONE operation per input

    const numbers = [7,8,9,4,5,6,1,2,3,0,"."] // arranged in typical numpad order
    const operators = ["+","-","*","/"]
    
    // updates db
    const sendCalculation = async (e) => {
        e.preventDefault();
        let a = input.split(op)[0]; // 1st num
        let b = input.split(op)[1]; // 2nd num
        let res = calculate(op, a, b) // resulting calculation
        if(a && b && res){
            await calculations.add({
              calc: input + "="+ res,
              createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            });
            setCurrent(res)
            setOp("")
            setInput("")
            setAllow(true)
        } else {
            alert("enter valid operation")
        }
    };
    // handles btn click event
    const handleClick = (e) => {
        e.preventDefault()
        const selected = e.target.value
        if(selected === "="){
            sendCalculation(e)
        } else {
            if(operators.includes(selected)){
                setAllow(false)
                setOp(selected)
            }
            setInput(input + selected)
            setCurrent(input + selected)
        }
    }
    // clears
    const clearInput =()=> {
        setInput("")
        setCurrent("")
        setAllow(true)
    }
    // number pad JSX
    const numPad = (<div className="calculator-buttons">    
        <div className="calculator-numbers">
            <button value="clear" onClick={clearInput} className="btn-clear">Clear</button>
            {numbers.map(num => <button value={num} onClick={e => handleClick(e)} key={num}>{num}</button>)}
        </div>
        <div className="calculator-operators">
            {operators.map(op => <button value={op} onClick={e => handleClick(e)} disabled={!allow} key={op}>{op}</button>)}
            <button value="=" onClick={e => handleClick(e)} className="btn-equal">=</button>
        </div>
    </div>)

    return (
        <div className="calculator-container">
            <div className="calculator-display">
                <h4>{current}</h4>
            </div>
            {numPad}
        </div>
    )
}

export default Calculator;