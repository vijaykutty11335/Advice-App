import React, { useEffect, useState } from 'react'

export const Advice = () => {
  const [pieceCount, setPieceCount] = useState(0);
  const [advice, setAdvice] = useState("")

  async function getAdvice() {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setAdvice(data.slip.advice);
      setPieceCount(pieceCount + 1);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div className='container'>
      <div className='contents'>
        <h2>Free Advice App</h2>
        <p className='advice'>{advice}</p>
        <div className='group-1'>
          <button onClick={getAdvice}>Get Advice</button>
          <p className='count'>You have read <span>{pieceCount}</span> {pieceCount <= 1 ? "piece" : "pieces"} of advice.</p>
        </div>
      </div>
    </div>
  )
}
