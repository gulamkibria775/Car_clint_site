import React from 'react'
import { Link } from "react-router-dom";
import './Card.css'

export default function Card({service}) {

    console.log("all ok",service)
  return (
   
<div>
        {/* <div>Name:{service.name}</div>
        <div> comment:{service.message}</div> */}


<div className="card card-compact shadow-xl">
   
      <div className="card-body comment-grid">
        <div><img className='comment-img' src={service.img} alt="" /></div>
      
       <div>
       <h2 className="card-title">Name:{service.name}</h2>
        <p className="text-2xl text-orange-600 font-semibold">
          rating: {service.rating}
        </p>
        <p className="text-2xl text-black-600 font-semibold">
         comment: { service.message}
         
        </p>
       </div>
        
      </div>
    </div>





  </div>      
  
  )
}
