import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";



export default function ServicesAll() {
  const premium = useLoaderData();

  console.log("serviceala", premium);
  return (
    <div className="grid grid-cols-3  gap-4">
         {
                    premium.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
    </div>
  );
}
