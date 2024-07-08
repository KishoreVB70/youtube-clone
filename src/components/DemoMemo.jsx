import React, { useEffect, useMemo, useState } from 'react'

const DemoMemo = () => {
    const [num, setNum] = useState(0);
    const [summa, setSumma] = useState(0);
    const calculateSquare = () => {
        return num ** 2;
    }

    const calculation = useMemo(calculateSquare, [num]);

    return (
        <div className='w-10/12 h-1/4 relative'>
            <div className='w-full h-full border border-black mt-16 m-2 absolute '>
                <h1>{calculation}</h1>
                <input className='border border-black p-2 m-2' type="number" value={num} onChange={e => setNum(e.target.value) } />
                <button className='border border-black p-2 m-2' onClick={() => setSumma(summa => summa+1)}>increase {summa}</button>
            </div>
        </div>
    )
}

export default DemoMemo