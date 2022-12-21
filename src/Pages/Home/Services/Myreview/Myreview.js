import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../../hook/useTitle";
import Another from "./Another";
import Orders from "./Orders";
import './Css.css'

export default function Myreview() {
  const data = useLoaderData();
  console.log("myreview", data);
  useTitle("Myreview");
  return (
    <div >
      <div className="divide-file-file">
        {" "}
        <div>{<Orders data={data}></Orders>}</div>
        <div>
          {" "}
          <div className="text-4xl text-centr pb-5"> Comment section </div>
          {data.map((data) => (
            <Another key={data._id} data={data.comment}></Another>
          ))}
        </div>
      </div>
    </div>
  );
}
