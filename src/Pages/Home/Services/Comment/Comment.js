import React,{ useContext } from 'react'
import { Link } from 'react-router-dom'

import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

import { useLoaderData } from 'react-router-dom';
// import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import app from '../../../../firebase/firebase.config';



export default  Comment = ({id}) => {
    const googleProvider = new GoogleAuthProvider()
    const auth=getAuth(app)
    
    const { _id, title, price } = useLoaderData();
    const { user,logOut } = useContext(AuthContext);
    console.log("iddddd",_id)
    console.log("iduser", user)
    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value}`;
        const email = user?.email || 'unregistered';
        const img = form.img.value;
        const message = form.message.value;
        const rating = form.rating.value;

        const order = {
            "id": _id,
            // serviceName: title,
            // price,
            "name": name,
             "email":email,
            "img":img,
            "message":message,
            "rating":rating,
        }
        
console.log(order)
        // if(phone.length > 10){
        //     alert('Phone number should be 10 characters or longer')
        // }
        // else{

        // }

        fetch(`http://localhost:5000/services/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('comment successfully')
                    form.reset();
                    window.location.reload(true)
                }
            })
            .catch(er => console.error(er));


    }


    
  const handleLogOut = () => {
    logOut().then().catch();
  };
  const handleGoogleSignIn = () => {
    signInWithPopup(auth,googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
}



    const menuItems = (
        <>
        
          
    
        
          {user?.email ? (
            <>
             <div>
            <form onSubmit={handlePlaceOrder}>
                <h2 className="text-4xl">You are a comment:</h2>
                {/* <h4 className="text-3xl">Price: {price}</h4> */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="Your Name" className="input input-ghost w-full  input-bordered"  required/>
                    <input name="img" type="text" placeholder="your image" className="input input-ghost w-full  input-bordered" required/>
                    <input name="rating" type="text" placeholder="your rating" className="input input-ghost w-full  input-bordered"  />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Comment" required></textarea>

                <input className='btn' type="submit" value="submit" />
            </form>
        </div>
            </>
          ) : (
            <li className="font-semibold">
                <h1 className=''>please login to add a new review</h1>
              <Link to="/login">Login</Link>
              <span><button onClick={handleGoogleSignIn} className="p-1 bg-amber-200 rounded"  variant="outline-primary"> Login with Google</button></span>
              
            </li>
            
          )}
        </>
      );













    return (
        // <div>
        //     <form onSubmit={handlePlaceOrder}>
        //         <h2 className="text-4xl">You are a comment:</h2>
        //         {/* <h4 className="text-3xl">Price: {price}</h4> */}
        //         <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        //             <input name="firstName" type="text" placeholder="Your Name" className="input input-ghost w-full  input-bordered"  required/>
        //             <input name="img" type="text" placeholder="your image" className="input input-ghost w-full  input-bordered" required/>
        //             <input name="rating" type="text" placeholder="your rating" className="input input-ghost w-full  input-bordered"  />
        //             <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
        //         </div>
        //         <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Comment" required></textarea>

        //         <input className='btn' type="submit" value="submit" />
        //     </form>
        // </div>
        <div>
         {menuItems}
        </div>
    );
};
