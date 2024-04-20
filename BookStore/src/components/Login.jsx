import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Login({ onLogin }) {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setIsModalOpen(false);
    // Call the onLogin function passed from the parent component
    onLogin();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={handleCloseModal}
              >
                ✕
              </button>
              <h3 className="font-bold text-lg">Login</h3>
              <div>
                <span>Email</span> <br />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-80 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div>
                <span>Password</span> <br />
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="w-80 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="mt-3 flex justify-between">
                <button type="submit" className="btn btn-active">
                  Login
                </button>
                <p className="mt-4">
                  Not Registered?{" "}
                  <Link
                    to="/signup"
                    className="underline text-blue-500 cursor-pointer"
                  >
                    Sign up
                  </Link>{" "}
                </p>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </>
  );
}

export default Login;
