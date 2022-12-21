import React, { useContext } from 'react';

import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';


const RightSideNav = () => {

    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()
    
    const auth=getAuth()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

   

    return (
        <div className='float-end'>
            <div className='me-5 mb-3'>
                {/* <button onClick={handleGoogleSignIn} className="me-2"  variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</button> */}
                {
                    <header fun={handleGoogleSignIn}></header>
                }
                
            </div>
          
        </div>
    );
};

export default RightSideNav;