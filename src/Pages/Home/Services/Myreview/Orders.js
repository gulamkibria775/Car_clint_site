import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { AuthContext } from "../../../../contexts/AuthProvider/AuthProvider";
import OrderRow from "./OrderRow";

const Orders = ({ data }) => {
  const { user, logOut } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  console.log("data form data", data[0].comment);

  useEffect(() => {
    fetch(`https://server-site-3.vercel.app/services?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setOrders(data);
      });
  }, [user?.email, logOut]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this status"
    );
    if (proceed) {
      fetch(`https://server-site-3.vercel.app/services/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("genius-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = orders.filter((odr) => odr._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  const handleStatusUpdate = (id) => {
    fetch(`https://server-site-3.vercel.app/services/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem('genius-token')}`
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = orders.filter((odr) => odr._id !== id);
          const approving = orders.find((odr) => odr._id === id);
          approving.status = "Approved";

          const newOrders = [approving, ...remaining];
          setOrders(newOrders);
        }
      });
  };

  return (
    <div className="">
      <h2 className="text-5xl">You have {orders.length} Service </h2>
      <h1 className="text-3xl">you want to update or deleate the service</h1>
      {/* <div className="overflow-x-auto w-full"> */}
      <div className="overflow-x-auto w-full">
        <table className="table-auto">
          <thead>
            <tr>
              <th>Delete</th>
              <th>image</th>
              <th>Name</th>
              <th>comment</th>
              <th>Update</th>
              {/* <th>Favorite Color</th> */}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderRow
                key={order._id}
                order={order}
                handleDelete={handleDelete}
                handleStatusUpdate={handleStatusUpdate}
              ></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
