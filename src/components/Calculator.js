import React, { useState } from 'react'
import firebase from "firebase/app";

import { calculate } from '../utils/calculate'

const firestore = firebase.firestore();


const Calculator =(props)=> {
    const calculations = firestore.collection("calculations");
    const [formValue, setFormValue] = useState("");
    const [input, setInput] = useState("");
    const [current, setCurrent] = useState("");
    const [op, setOp] = useState("");
    const [allow, setAllow] = useState(true);

    const numbers = [0,1,2,3,4,5,6,7,8,9]
    const operators = ["+","-","*","/"]
    
    const sendCalculation = async (e) => {
        e.preventDefault();
        let a = input.split(op)[0];
        let b = input.split(op)[1];
        let res = calculate(op, a, b)
        await calculations.add({
          calc: input + "="+ res,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setCurrent(res)
        setOp("")
        setInput("")
        setFormValue("");
        setAllow(true)

      };
    
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
    const clearInput =()=> {
        setInput("")
        setCurrent("")
        setAllow(true)
    }

    const numPad = (<div>    
        <div>
            {numbers.map(num => <button value={num} onClick={e => handleClick(e)}>{num}</button>)}
        </div>
        <div>
            {operators.map(op => <button value={op} onClick={e => handleClick(e)} disabled={!allow}>{op}</button>)}
            <button value="=" onClick={e => handleClick(e)}>=</button>
        </div>
    </div>)

    return (
        <>
            {numPad}
            <button value="clear" onClick={clearInput}>C</button>

            <h4>{current}</h4>
        </>
    )
}

export default Calculator