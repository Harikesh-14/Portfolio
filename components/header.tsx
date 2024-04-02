import React from 'react'

function Header() {
  return (
    <header className='z-[999] relative'>
        <div className='fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full'>
        </div>
    </header>
  )
}

export default Header