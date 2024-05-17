import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/Context/Context";
import useTitle from "../../../../hooks/UseTitle/UseTitle";
import { toast } from "react-toastify";

const SignIn = () => {
    useTitle('Sign in')
    const [errorEmail, setErrorEmail] = useState('')
    const { createUserSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const handleSignIn = (e) => {
        e.preventDefault()
        setErrorEmail('')
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        createUserSignIn(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                toast('successfully sign in')
                navigate(`${location.state ? location?.state : '/'}`)
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                setErrorEmail(errorCode)
                console.log(errorCode);
            });
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign in now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <label className="label">
                                    <h2><span className="label-text-alt">Create a new account?</span> <Link className="link link-hover label-text-alt" to="/signUp">Sign Up</Link></h2>
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn bg-green-600">sign in</button>
                            </div>
                            {
                                errorEmail && <span className="text-red-500 text-center">{errorEmail}</span>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;