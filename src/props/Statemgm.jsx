import React from 'react'
import { useState, useEffect} from 'react'
import Props1 from './Props1'
import Props2 from './Props2'

function Statemgm() {

    const [value,setvalue]=useState(5)

    

    useEffect(()=>{
    if (value==3){
        setvalue(6)
    }
    else{
        setvalue(3)
    }
    },[])
    
  return (
    <div>
      <h1></h1>
    </div>
  )
}

export default Statemgm
