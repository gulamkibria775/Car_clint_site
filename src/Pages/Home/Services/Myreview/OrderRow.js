import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {
    const { _id, servicename, price,img,description,comment } = order;
    
    const [orderService, setOrderService] = useState({})
    console.log('sesh rar',order.comment)

    useEffect(() => {
        fetch(`http://localhost:5000/services/${_id}`)
            .then(res => res.json())
            .then(data => setOrderService(data));
    }, [_id])

    

    return (
        
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                orderService?.img && 
                                <img src={img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        {/* <div className="font-bold">{img}</div> */}
                        <div className="text-sm opacity-50">{servicename}</div>
                    </div>
                </div>
            </td>
            <td>
                {/* {servicename}
                <br /> */}
                <div className='w-full border'>
                <p>{description}</p>
                </div>
            </td>
            {/* { <td>Purple</td> } */}
            { <th>
                <Link to={`/update/${_id}`}
                // onClick={() => handleStatusUpdate(_id)}
                className="btn btn-ghost btn-xs">Update</Link>
            </th> }
        </tr>
    );
};

export default OrderRow;