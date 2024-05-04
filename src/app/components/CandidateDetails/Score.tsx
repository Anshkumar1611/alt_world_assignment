import React from 'react'

const Score = ({percent}: {percent: number}) => {
  return (
    <div className="grow h-2 rounded bg-gray relative">
      <div style={{width: `${percent}%`}} className={`absolute h-full rounded ${percent >= 50 ? "bg-green" : percent >= 30 ? "bg-golden" : "bg-orange"}`}></div>
    </div>
  )
}

export default Score