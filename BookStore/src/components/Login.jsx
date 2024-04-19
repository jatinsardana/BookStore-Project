import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data)
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
      {/* if there is a button in form, it will close the modal */}
    <form>
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <form onSubmit={handleSubmit(onSubmit)} method="dialog">
    <h3 className="font-bold text-lg">Login</h3>
    <div>
      <span>Email</span> <br />
      <input type="email" placeholder='Enter Your Email' className=' w-80 border rounded-md outline-none' {...register("email", { required: true })} />
      <br />
      {errors.email && <span className=' text-red-500'>This field is required</span>}
    </div>
    <div>
      <span>Password</span> <br />
      <input type="password" placeholder='Enter Your Password' className=' w-80 border rounded-md outline-none' {...register("password", { required: true })}/>
      <br />
      {errors.password && <span className=' text-red-500'>This field is required</span>}
    </div>
    <div className=' mt-3 flex justify-between'>
    <button className="btn btn-active">Login</button>
    <p className=' mt-4'>Not Registered? <Link to= "/signup" className=' underline text-blue-500 cursor-pointer'>Sign in</Link> </p>
    </div>
    </form>
  </div>
</dialog>
    </div>
  )
}

export default Login
