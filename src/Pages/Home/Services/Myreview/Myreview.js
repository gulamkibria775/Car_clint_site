import React from 'react'
import { useLoaderData } from "react-router-dom";
import useTitle from '../../../../hook/useTitle';
import Orders from './Orders';

export default function Myreview() {
  const data = useLoaderData();
  useTitle('Myreview')
  return (
    <div>
      {
        <Orders ></Orders>
      }
      
    </div>
  )
}
