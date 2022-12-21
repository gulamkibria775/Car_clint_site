import React from "react";
// import { useEffect } from "react";

import { useLoaderData } from "react-router-dom";
import Card from "./Card/Card";
// import Comment from "./Comment/Comment";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

export default function ServiceDetail() {
  const { _id, name, img, price, description, comment } = useLoaderData();
  
  console.log("datadetailllll", name, _id, comment);

 

  return (
    <div className="grid grid-cols-2  gap-4">
     

      <div className="card card-compact shadow-xl">
     
        <div className="card-body">
          {/* <img src={img} alt="" /> */}
          <div>
            <PhotoProvider>
              <PhotoView src={img}>
                <img src={img} style={{ objectFit: "cover" }} alt="" />
              </PhotoView>
            </PhotoProvider>
          </div>

          <h2 className="card-title">{name}</h2>
          <p className="text-2xl text-orange-600 font-semibold">
            Price: ${price}
          </p>
          <p className="text-2xl text-black-600 font-semibold">{description}</p>
        </div>
      </div>

    <div>
      <h1 className="text-4xl pb-5">Comment section</h1>
    {comment.map((service) => (
        <Card key={service._id} service={service}></Card>
      ))}
      <Link to={`/services1/${_id}`}>
            <button className="btn btn-primary my-5 text-center">coment</button>
          </Link>
     
    </div>
    </div>
  );
}
