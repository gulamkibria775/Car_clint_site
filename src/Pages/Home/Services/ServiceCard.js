import React from "react";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServiceCard = ({ service }) => {
  const { _id, img, price, description, name, comment } = service;
  return (
    <div className="card card-compact shadow-xl">
      {/* <figure><img src={img} alt="Shoes" /></figure> */}
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
        <p className="text-2xl text-black-600 font-semibold">
          {description.length > 100 ? description.slice(0, 100) : description}
          ...
        </p>
        <div className="card-actions justify-end">
          <Link to={`/service/${_id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>

          {/* <Link to={`/checkout/${_id}`}>
                    
                        <button className="btn btn-primary">coment</button>
                    </Link> */}
          <Link to={`/services1/${_id}`}>
            <button className="btn btn-primary">coment</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
