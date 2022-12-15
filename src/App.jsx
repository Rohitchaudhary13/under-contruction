import { useState } from 'react'
import './App.css'
import pnf from '../src/assets/pnf-bg.png';

function App() {

  return (
    <div className='flex justify-center mt-12 flex-col items-center'>
      <h1 className='text-7xl text-center w-6/12'>WE COULDN’T FIND THE PAGE YOU WERE LOOKING FOR</h1>
      <button className='rounded-full mt-12 p-2 border'>Back Home</button>
      <img src={pnf} alt="pnf" className='w-6/12 ' />
    </div>
  )
}

export default App
