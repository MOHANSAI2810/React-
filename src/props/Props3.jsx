import React from 'react'

function Props3(p) {

    const {color,year}=p.car

  return (
    <div>
      <h1>Color is {color}</h1>
      <p>Year is {year}</p>
    </div>
  )
}

export default Props3
