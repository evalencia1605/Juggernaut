import React from 'react'
import Button from "./Button"

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4 '>
      <div className='flex flex-col gap-4 '>
        <p className='text-lg lg:text-base '>IT'S TIME TO</p>
        <h1 className='uppercase font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl'>BECOME <span className='text-blue-400'>JUGGERNAUT</span></h1>
      </div>
      <p className='text-md md:text-base font-light '>Note to self: Use this app to get <span className='text-blue-400 font-medium'>enourmously swollen.</span></p>
      <p>Disclaimer: <span className='text-blue-400 font-medium'>Body dismorphia</span> may appear.</p>
      <Button func={() =>
        window.location.href = "#generate"
      } text={"Accept & Begin"}></Button>
    </div>
  )
}
