import React from 'react'
import Spin from './Spinner-2.gif'
function Spinner() {
  return (
    <div className=' text-center'>
        <img className='my-3' src={Spin} alt="LOading" />
    </div>
  )
}

export default Spinner
