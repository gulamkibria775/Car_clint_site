import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export default function Consultan() {
  return (
  <div>
    <h1 className='text-center m-5 p-4 text-4xl' > Our specalist are here</h1>
     <div className='grid grid-cols-1 md:grid-cols-2 mb-5'>
         
         <div>
       <Card className="w-96">
      <CardHeader color="blue" className="relative h-56">
        <img
          src="https://patients.smarterhealth.sg/wp-content/uploads/2019/11/Smarter-Health-General-Practitioner-or-Specialist-Doctor.jpg"
          alt="img-blur-shadow"
          className="h-full w-full"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          Cozy 5 Stars Apartment
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to "Naviglio" where you can enjoy the main night life in
          Barcelona.
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">$899/night</Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
          Barcelona, Spain
        </Typography>
      </CardFooter>
    </Card>

    </div>
    <div>
       <Card className="w-96">
      <CardHeader color="blue" className="relative h-56">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYYwj9xtm-sh75QA9FMxzBrMDRqrDMlXnKT2tYcVdaq-W5IeDjBe0rrTNjzm1vnmUoABs&usqp=CAU"
          alt="img-blur-shadow"
          className="h-full w-full"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          Cozy 5 Stars Apartment
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to "Naviglio" where you can enjoy the main night life in
          Barcelona.
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">$899/night</Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
          Barcelona, Spain
        </Typography>
      </CardFooter>
    </Card>

    </div>
    <div>
       <Card className="w-96">
      <CardHeader color="blue" className="relative h-56">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpDlDMVcryWvNxvBVTxeDeWvuuKiYUgHF-Pw&usqp=CAU"
          alt="img-blur-shadow"
          className="h-full w-full"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          Cozy 5 Stars Apartment
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to "Naviglio" where you can enjoy the main night life in
          Barcelona.
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">$899/night</Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
          Barcelona, Spain
        </Typography>
      </CardFooter>
    </Card>

    </div>
    <div>
       <Card className="w-96">
      <CardHeader color="blue" className="relative h-56">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_1xQ39ioxDWXJzK287InexrLVffPwscxjKkh5Lv4iOFbjSInjyzB-LiqnTILY8Z6DJls&usqp=CAU"
          alt="img-blur-shadow"
          className="h-full w-full"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          Cozy 5 Stars Apartment
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to "Naviglio" where you can enjoy the main night life in
          Barcelona.
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">$899/night</Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
          Barcelona, Spain
        </Typography>
      </CardFooter>
    </Card>

    </div>



   </div>


   {/* chart */}
   
  </div>
  )
}
