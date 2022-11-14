import React,{useState,useEffect} from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../hook/useTitle";
import ServiceCard from "./ServiceCard";



export default function ServicesAll() {
  useTitle('service all')
  const [isLoading, setIsLoading] = useState();
  const premium = useLoaderData();
  
  // spinner


  useEffect(() => {
    
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then( ()=>setIsLoading('hidden'));
      
  }, []);
  

  console.log("serviceala", premium);
  return (
    <div className="grid grid-cols-3  gap-4">
     
     <div className={isLoading}>
          <span class="flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
        </div>
     
      
        
         {
          
          premium.map(service => <ServiceCard
              key={service._id}
              service={service}
          ></ServiceCard>)
         
      }
        
    </div>
  );
}
