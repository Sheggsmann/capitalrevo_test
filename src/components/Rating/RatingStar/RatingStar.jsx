import React from 'react'
import "./RatingStar.scss";

const RatingStar = ({image}) => {
  return (
    <div className='RatingStar'>
      <img src = {image} alt = "star" loading='lazy'/>
    </div>
  )
}

export default RatingStar
