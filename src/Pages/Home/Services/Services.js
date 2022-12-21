import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = ({ service }) => {
  const [services, setServices] = useState([]);
  // spinner
  const [isLoading, setIsLoading] = useState();
  console.log("all", service);

  useEffect(() => {
    fetch("https://server-site-3.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .then(() => setIsLoading("hidden"));
  }, []);

  console.log("all", service);

  return (
    <div>
      <div className="text-center mb-4">
        <p className="text-2xl font-bold text-orange-600">Services</p>
        <h2 className="text-5xl font-semibold">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className={isLoading}>
          <span class="flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
        </div>
        {services.slice(0, 3).map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>

      <div className="py-5 text-center">
        <Link to="/serviecsAll">
          <button className="btn btn-danger">See More</button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
