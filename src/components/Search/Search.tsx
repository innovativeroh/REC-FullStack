import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
const Search = () => {
  return (
    <>
    <div className='z-[10px] absolute w-[950px] bg-white shadow-lg rounded-[20px] py-4 p-4  bottom-[-40px] left-[50%] -translate-x-1/2'>
        <div className='flex flex-wrap justify-center flex-row gap-[40px]'>
            <button className='transition text-md font-semibold text-gray-800 hover:!text-blue-700'>Buy</button>
            <button className='transition text-md font-semibold text-gray-800 hover:!text-blue-700'>Commercial</button>
            <button className='transition text-md font-semibold text-gray-800 hover:!text-blue-700'>PG / Co-Living</button>
            <button className='transition text-md font-semibold text-gray-800 hover:!text-blue-700'>Plots / Land</button>
            <button className='transition text-md font-semibold text-gray-800 hover:!text-blue-700'>Free Property Ad</button>
        </div>
        <hr className='mt-5'/>
        <form className='flex flex-wrap flex-row mt-4 p-2 gap-4 items-center'>
            <div className='flex-[3]'>
                <p className='font-semibold'>Location</p>
                <div className='relative'>
                <LocationOnIcon className='absolute top-[16px] left-[4px] text-[#888]' />
                <input type='text' className='w-full mt-2 border-b-[#f1f1f1] border-b-[2px] px-8 p-2' placeholder='eg. Malvya Nagar' />
                </div>
            </div>
            <div className='flex-[3]'>
                <p className='font-semibold'>Type</p>
                <div className='relative'>
                <HomeIcon className='absolute top-[16px] left-[4px] text-[#888]' />
                <select className='w-full mt-2 border-b-[#f1f1f1] border-b-[2px] px-8 p-2'>
                    <option value="Vaishali">Vaishali</option>
                </select>
                </div>
            </div>
            <div className='flex-[2]'>
                <p className='font-semibold'>Budget</p>
                <div className='relative'>
                <CurrencyRupeeIcon className='absolute top-[16px] left-[4px] text-[#888]' />
                <select className='w-full mt-2 border-b-[#f1f1f1] border-b-[2px] px-8 p-2'>
                    <option value="5">5 lacs+</option>
                </select>
                </div>
            </div>
            <div className='flex-[2]'>
                <button className='w-full text-center font-semibold bg-blue-600 py-2 rounded-[5px] text-white'>Search</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default Search