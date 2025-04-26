// import React from 'react'
import React, { useCallback, useEffect, useRef, useState } from "react";

function Passgen() {

  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [symbol, setSymbol] = useState(false);

  // const genPassword = () => {
  //   let myStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  //   if (numbers) {
  //     myStr += "0123456789";
  //   }
  //   if (symbol) {
  //     myStr += "!@#`~$%^&*()<>;':";
  //   }
  //   let genPass = "";
  //   for (let i = 0; i < length; i++) {
  //     let index = Math.floor(Math.random() * myStr.length);
  //     let myChar = myStr.charAt(index)
  //     genPass += myChar; //genPass = genPass + myChar
  
  //   }
  //   console.log(genPass)
  //   setPassword(genPass)
  // };

  const genPassword = useCallback(() => {
    let myStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbers) {
      myStr += "0123456789";
    }
    if (symbol) {
      myStr += "!@#`~$%^&*()<>;':";
    }
    let genPass = "";
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * myStr.length);
      let myChar = myStr.charAt(index);
      genPass += myChar; //genPass = genPass + myChar
    }
    console.log(genPass);
    setPassword(genPass);
  }, [length, numbers, symbol]);

  useEffect(genPassword, [length, numbers, symbol]);

  // useEffect(()=>{
  //   genPassword()
  // }, [length, numbers, symbol]);

  const changeNumber = (e) => {
    setNumbers(e.target.checked);
  };

  
  let passReference = useRef();

  const copyPassword = () => {
    console.log(passReference.current.value);
    passReference.current.select();
    window.navigator.clipboard.writeText(passReference.current.value);
    // window.navigator.clipboard.writeText(password);
  };
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-gray-800'>
    <div className="py-14 w-3/4 flex flex-col justify-center items-center bg-gray-700 rounded-md">
      <div className='flex flex-col justify-center items-center relative w-3/4'>
        <input className="h-14 w-full my-10 outline-none px-5 py-1 bg-gray-100 rounded-md text-orange-500 text-2xl font-semibold" type="text" readOnly /><label className='bg-orange-400 hover:bg-orange-500 text-black active:text-white font-medium rounded-r-md cursor-pointer px-8 py-3.5 text-xl absolute right-0 '>Copy</label></div>
      <div className="my-3 w-full px-20 flex justify-evenly">
        

        <div><input className='mx-2 w-80' id='range' type="range" min={8} max={20} />
          <label className='text-2xl text-orange-600' htmlFor="range">10</label></div>
        <div><input id="num" className='mx-2 h-5 w-5' type="checkbox" /> <label className='text-2xl text-orange-600' htmlFor="num">Number</label></div>
        <div><input id="symbol" className='mx-2 h-5 w-5' type="checkbox"/> <label className='text-2xl text-orange-600' htmlFor="symbol">Symbol</label></div>
      </div>
    </div>
  </div>
  )
}

export default Passgen;
