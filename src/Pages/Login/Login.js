import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../hook/useTitle";

const Login = () => {
  useTitle("login");
  const [isLoading, setIsLoading] = useState("hidden");
  const { login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  console.log("from", from);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        // navigate(from, { replace: true });

        const currentUser = {
          email: user.email,
        };

        console.log(currentUser);

        // get jwt token
        fetch("https://server-site-3.vercel.app/services", {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
          // body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // local storage is the easiest but not the best place to store jwt token
            // localStorage.setItem("genius-token", data.token);
            navigate(from, { replace: true });
          });
      })
      .catch((error) => alert("your password or email is wrong"));
  };

  const handlespin = () => {
    setIsLoading("");
  };

  return (
    <div className="hero w-full my-20">
      {/* spinnstart */}
      <div className={isLoading}>
        <span class="flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
      </div>

      {/* sptinend */}

      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
          <h1 className="text-5xl text-center font-bold">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            {/* spinner */}

            <button onClick={handlespin} className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </button>
          </form>
          <p className="text-center">
            New User{" "}
            <Link className="text-orange-600 font-bold" to="/signup">
              Sign Up
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

// const Login = () => {
//     const [error, setError] = useState('');
//     const { signIn, setLoading } = useContext(AuthContext);
//     const navigate = useNavigate();
//     const location = useLocation();

//     const from = location.state?.from?.pathname || '/';

//     const handleSubmit = event => {
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;

//         signIn(email, password)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//                 form.reset();
//                 setError('');
//                 if(user.emailVerified){
//                     navigate(from, {replace: true});
//                 }
//                 else{
//                     toast.error('Your email is not verified. Please verify your email address.')
//                 }
//             })
//             .catch(error => {
//                 console.error(error)
//                 setError(error.message);
//                 toast.error('Email or Password is wrong')
//             })
//             .finally(() => {
//                 setLoading(false);
//             })
//     }

//     return (
//         <Form onSubmit={handleSubmit}>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control name="email" type="email" placeholder="Enter email" required />

//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control name="password" type="password" placeholder="Password" required />
//             </Form.Group>

//             <Button variant="primary" type="submit">
//                 Login
//             </Button>
//             <Form.Text className="text-danger">
//                 {error}
//             </Form.Text>
//         </Form>
//     );
// };

export default Login;
