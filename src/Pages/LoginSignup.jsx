import React from 'react';
import { Link } from 'react-router-dom';

const LoginSignup = () => {


  return (
    <div>
    <h2 className="text-2xl text-center font-poppins py-10">Please Login</h2>
    <form className="md:w-3/4 lg:w-1/2 mx-auto">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="input input-bordered"
          required
        />
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">
            Forgot password?
          </a>
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Login</button>
      </div>
    </form>
    <p className="text-center mt-4 text-black">
      Do not have an account?{" "}
      <Link className="text-blue-700 font-bold" to="/register">
        Register
      </Link>
    </p>
 
  </div>
  );
};

export default LoginSignup;
