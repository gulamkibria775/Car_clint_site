import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OrderRow = ({ order, handleDelete }) => {
  const { _id, name,  img, description } = order;

  const [orderService, setOrderService] = useState({});
  console.log("sesh rar", name);

  useEffect(() => {
    fetch(`https://server-site-3.vercel.app/services/${_id}`)
      .then((res) => res.json())
      .then((data) => setOrderService(data));
  }, [_id]);

  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
            X
          </button>
        </label>
      </th>
      <td>
        <div className="">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              {orderService?.img && (
                <img src={img} alt="Avatar Tailwind CSS Component" />
              )}
            </div>
          </div>
        </div>
      </td>
      <td>
        {" "}
        <div>
          {/* <div className="font-bold">{img}</div> */}
          <div className="text-sm opacity-50">{name}</div>
        </div>
      </td>
      <td>
        {/* {servicename}
                <br /> */}
        <div className="w-full border">
          <p>{description}</p>
        </div>
      </td>
      {/* { <td>Purple</td> } */}
      {
        <th>
          <Link
            to={`/update/${_id}`}
            // onClick={() => handleStatusUpdate(_id)}
            className="btn btn-ghost btn-xs text-green-600 text-xl"
          >
            Update
          </Link>
        </th>
      }
    </tr>
  );
};

export default OrderRow;
