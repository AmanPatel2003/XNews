"use client";

import React, { useState, useEffect } from "react";

const Others = () => {
  const [variableValue, setVariableValue] = useState(10);

  const generateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 5) + 1;

    setVariableValue((prevValue) => prevValue + newRandomNumber);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (variableValue < 10000) {
        generateRandomNumber();
      } else {
        clearInterval(intervalId);
      }
    }, 600);

    return () => {
      clearInterval(intervalId);
    };
  }, [variableValue]);
  return (
    <>
      <div className="">
        <div className="bg-[#000]  text-[#4DF715]">
          <div className="py-[60px] ">
            <h1 className="text-[40px] font-semibold m-auto text-center mb-[10px]">
              {variableValue}  Articles
            </h1>
            <p className="text-center text-2xl font-monoSpace">
              Protected on Internet
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Others;
