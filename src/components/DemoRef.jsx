import React, { useEffect, useRef } from 'react'

const DemoRef = () => {
  const summa = useRef(null);
  useEffect(() => {
    summa.current = setInterval(() => console.log(Math.random()), 1000);
    return () => {
      clearInterval(summa.current);
    }
  }, [])
  return (
    <div className='w-10/12 h-1/4 relative my-5'>
        <div className='w-full h-full border border-black mt-16 m-2 absolute '>
          <button className='border border-black p-2 m-2' onClick={() => clearInterval(summa.current)}>Stop timeout</button>
        </div>
    </div>
  )
}

export default DemoRef