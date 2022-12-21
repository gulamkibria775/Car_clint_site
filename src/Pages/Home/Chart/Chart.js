import React from 'react'
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
export default function Chart() {
    const data = [
        {name: 'Eyes surgery', students: 400},
        {name: 'kidney Surgery', students: 700},
        {name: 'dental', students: 600},
        {name: 'heart surgery', students: 1000}
      ];
        
        
      return (
     <div className='text-center m-5 p-5'>
        <h1 className='text-4xl py-6 my-6'>Graphical presentation our service</h1>
         <BarChart width={900} height={600} data={data}>
          <Bar dataKey="students" fill="green" />
          {/* <CartesianGrid stroke="#ccc" /> */}
          <XAxis dataKey="name" />
          <YAxis />
        </BarChart>
     </div>
      );
      }

