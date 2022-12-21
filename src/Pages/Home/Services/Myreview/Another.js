import React from 'react'
import Subfield from './Subfield'

export default function Another({data}) {

  const propertyValues = Object.values(data);

console.log("object",propertyValues);
  
   console.log('another file',propertyValues )
    
  return (
  <div className="grid grid-cols-1 w-5/12">
  {
     propertyValues?.map((data) =><Subfield
     key={data._id}
     data={data}
     ></Subfield>

     )
  }
  </div>
  
  );
}
