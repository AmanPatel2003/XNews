"use client"

import React,{useState,useEffect} from 'react'

const Others = () => {
    // const [randomNumber, setRandomNumber] = useState(null);
    const [variableValue, setVariableValue] = useState(10);

    const generateRandomNumber = () => {
      // Generate a random number between 1 and 7
      const newRandomNumber = Math.floor(Math.random() * 7) + 1;
      // setRandomNumber(newRandomNumber);
      setVariableValue((prevValue) => prevValue + newRandomNumber);
    };

    useEffect(() => {
      const intervalId = setInterval(() => {
        if (variableValue < 1000) {
          generateRandomNumber();
        } else {
          clearInterval(intervalId); // Stop the interval when the condition is met
        }
      }, 600); // 60000 milliseconds = 1 minute

     
      return () => {
        clearInterval(intervalId);
      };
    }, [variableValue]);
  return (
    <>
      <div className="">
        <div className="bg-[#000]  text-[#4DF715]">
          <div className="py-[60px] ">
            <h1 className="text-[40px] font-semibold m-auto text-center mb-[10px]">{variableValue} Articles</h1>
            <p className="text-center text-2xl font-monoSpace">Protected on Internet</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Others