import React, { useContext } from 'react';
// import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';

// import ListGroup from 'react-bootstrap/ListGroup';
// import BrandCarousel from '../BrandCarousel/BrandCarousel';
// import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
// import app from '../../../../firebase/firebase.config';
// import Header from '../../../Shared/Header/Header';

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