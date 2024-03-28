import React from 'react';
import Random from './components/Random';
import Tag from './components/Tag';
import './index.css';

function App(){
  return (
    <div className='relative w-full h-full flex flex-col background items-center'>
      
      <h1 className='bg-white rounded-lg w-11/12 text-center mt-[40px] text-4xl py-2 px-10 font-bold'>RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>

    </div>
  )
}

export default App;