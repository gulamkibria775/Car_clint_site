import React, { useContext } from "react";
// import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { AuthContext } from "../../../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../../../hook/useTitle";

export default function Addservice() {
  useTitle('Addservice')
  const { user } = useContext(AuthContext);
  const handleservice = (event) => {
    event.preventDefault();
    const form = event.target;
    const servicename = form.servicename.value;
    const email = user?.email || "unregistered";
    const img = form.img.value;
    const price = form.price.value;

    const description = form.description.value;

    const order = {
      //  "id": _id,
      servicename: servicename,
      price: price,
      img: img,
      email: email,

      description: description,
    };

    console.log("order", order);
    // if(phone.length > 10){
    //     alert('Phone number should be 10 characters or longer')
    // }
    // else{

    // }

    fetch("http://localhost:5000/services", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem('genius-token')}`
      },
      // body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          alert("comment successfully");
          form.reset();
          // window.location.reload(true);
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div>
      <form onSubmit={handleservice}>
        <h2 className="text-4xl my-5 text-center">Add services</h2>
        {/* <h4 className="text-3xl">Price: {price}</h4> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            name="servicename"
            type="text"
            placeholder="Service-name"
            className="input input-ghost w-full  input-bordered"
          />
          <input
            name="img"
            placeholder="Your imgage"
            className="input input-ghost w-full  input-bordered"
            required
          ></input>
          <input
            name="price"
            placeholder="Your price"
            className="input input-ghost w-full  input-bordered"
            required
          ></input>
          <input
            name="description"
            placeholder="Your description"
            className="input input-ghost w-full  input-bordered"
            required
          ></input>

          {/* <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly /> */}
        </div>

        <div className="text-center">
          <input
            className="btn bg-danger my-5 text-center"
            type="submit"
            value="Add-service"
          />
        </div>
      </form>
    </div>
  );
}
