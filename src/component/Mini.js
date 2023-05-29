import React from 'react'
import data from '../data.json'
export const Mini = () => {
  return (
    <div>
        <input type="text"></input>
        <button>submit</button>
        {
            data.map(d => {
                return(
                    <h1 key={d.id}>{d.name}<br></br>{d.email}</h1>
                );
            })
        }
    </div>
    
  )
}
