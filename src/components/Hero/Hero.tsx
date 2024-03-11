import React from 'react'
import Search from '../Search/Search';
const Hero = () => {
  return (
    <div style={{backgroundImage: "url(https://source.unsplash.com/random/1920x400/?appartments)", backgroundSize: "cover"}} className='relative w-full h-[450px] shadow-lg' >
        <div className='w-full h-full absolute bg-[rgb(18,18,18,0.5)] bg-[linear-gradient(90deg,_rgba(18,18,18,0.5)_0%,_rgba(0,0,0,0.5)_100%)]'>
            <Search />
            
        </div>
    </div>
  )
}

export default Hero