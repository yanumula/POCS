import React, { useContext } from 'react';
import {startContext} from './App';

const Start = () =>{
    const data = useContext(startContext);
    const printHundredNumbers = () =>{
        let i;
        for(i=1; i<=100; i++){
            console.log(i);
        }
        return i-1;
    }
    const printEvenNumbers = () =>{
        for(let i=1; i<=100; i++){
            if(i%2 == 0){
            console.log(i);
            }
        }
    }
    var a= 10;
    let b,c = 10;
    b=a+c;
    a= b+c;
    console.log("==", a, b, c);
    console.log(Math.max(),'=-')
    console.log("===data", data);
    return (<>
    Hello there {data.name}
    <br />
    {`Print 100 numbers ${printHundredNumbers()}`}
    <br />
    {`Print even numbers ${printEvenNumbers()}`}
    </>)
}

export default Start;


