import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { useLoaderData } from "react-router-dom";
// import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { AuthContext } from "../../../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../../../hook/useTitle";

export default function Update() {
  const storeuser = useLoaderData();
  const [user, setUser] = useState(storeuser);
  useTitle("Update");

  const handleupdate = (event) => {
    event.preventDefault();
    console.log("apaap", user);
    fetch(`https://server-site-3.vercel.app/users/${storeuser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("user updated");

          // event.target.reset();
        }
        console.log("hi");
      });
  };
  const handleinputchange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    console.log("field value", field, value);
    const newuser = { ...user };
    newuser[field] = value;
    setUser(newuser);
  };
  return (
    <div>
      <h1>upadate:::{user.name}</h1>

      <form onSubmit={handleupdate}>
        <h2 className="text-4xl">update</h2>
        {/* <h4 className="text-3xl">Price: {price}</h4> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            onChange={handleinputchange}
            defaultValue={storeuser.name}
            name="name"
            type="text"
            placeholder="First Name"
            className="input input-ghost w-full  input-bordered"
          />
          <input
            onChange={handleinputchange}
            defaultValue={storeuser.img}
            name="img"
            type="text"
            placeholder="image"
            className="input input-ghost w-full  input-bordered"
          />
          <input
            onChange={handleinputchange}
            defaultValue={storeuser.price}
            name="price"
            type="text"
            placeholder="Price"
            className="input input-ghost w-full  input-bordered"
          />
          {/* <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly /> */}
        </div>
        <textarea
          onChange={handleinputchange}
          defaultValue={storeuser.description}
          name="description"
          className="textarea textarea-bordered h-24 w-full"
          placeholder="Your Comment"
          required
        ></textarea>

        <input className="btn" type="submit" value="Update" />
      </form>
    </div>
  );
}
