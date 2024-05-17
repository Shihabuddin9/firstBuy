import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/Context/Context";
import useTitle from "../../../../hooks/UseTitle/UseTitle";
import { toast } from "react-toastify";

const SignUp = () => {
    useTitle('Sign Up')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const { createUserSignUp } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const handleSignUp = (e) => {
        setErrorPassword('')
        setErrorEmail('')
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        if (password.length < 6) {
            setErrorPassword('Please enter more than 6 characters')
            return
        }
        createUserSignUp(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                toast('successfully account create')
                navigate(`${location.state ? location?.state : '/'}`)
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                setErrorEmail(errorCode)
            });
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" required />
                            </div>
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
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                {
                                    errorPassword && <span className="text-red-500 ml-2">{errorPassword}</span>
                                }
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <label className="label">
                                    <h2><span className="label-text-alt">Already have an account?</span> <Link className="link link-hover label-text-alt" to="/signIn">Sign in</Link></h2>
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn bg-green-600">Sign Up</button>
                            </div>
                            {errorEmail && <p className="text-red-500 text-center">{errorEmail}</p>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;