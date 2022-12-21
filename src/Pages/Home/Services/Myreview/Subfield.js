import React, { useContext } from "react";

import {
  Card,
  
  CardBody,
  
  Typography,
} from "@material-tailwind/react";
import { AuthContext } from "../../../../contexts/AuthProvider/AuthProvider";

export default function Subfield({ data }) {
  const { name, email, img, message, id, date } = data;
  const { user } = useContext(AuthContext);

  if (user?.email) {
    window.localStorage.setItem("name", user.email);
  }

  console.log("user", window.localStorage.getItem("name"));

  return (
    <>
     { window.localStorage.getItem("name") === email ?
        <div>
          <Card className="w-96">
            <img
              src={img}
              alt="img-blur-shadow"
              className="object-cover h-15 w-20"
            />

            <CardBody className="text-right border p-2 ">
              <Typography variant="h5" className="mb-2">
                {name}
              </Typography>
              <Typography>{message}</Typography>
              <h2>date:{date}</h2>
            </CardBody>
          </Card>
        </div> : <div>there is no comment</div>
}
    </>
  );
}
