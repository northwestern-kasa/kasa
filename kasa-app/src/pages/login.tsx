import { Link, useNavigate } from "react-router-dom";
import api from "../fetchApiService";
import { useForm, SubmitHandler } from 'react-hook-form'

interface LoginFormInputs {
  email: string,
  password: string
}

export default function Login() {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<LoginFormInputs>()

  const navigate = useNavigate()

  const login: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      const res = await api.post("/login", data);
      console.log(res)
      navigate("/memberform")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div id="container" className="flex flex-col space-y-8 items-center justify-center rounded-[3rem] navBarShadow p-16 w-1/4 min-w-96">
        <div id="header" className="flex flex-col space-y-1 text-center">
          <h2 id="header" className="font-bold text-3xl">LOGIN</h2>
          <h6 className="text-lg">to access this page</h6>
        </div>
        <form onSubmit={handleSubmit(login)} method="POST" className="flex flex-col space-y-4 items-center justify-center w-full">
          <input
            id="email"
            {...register("email", { required: "Email is required" })}
            type="email"
            autoComplete="email"
            required
            placeholder="Email"
            className="block w-full rounded-full border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-red-900 sm:text-sm sm:leading-6"
          />
          <input
            id="password"
            {...register("password", { required: "Password is required" })}
            type="password"
            autoComplete="current-password"
            required
            placeholder="Password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            className="block w-full rounded-full border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-red-900 sm:text-sm sm:leading-6"
          />
          <div className=""></div>
          <button type="submit" className="flex w-3/4 mt-4 justify-center rounded-full bg-red text-white px-3 py-1.5 text-md">Login</button>
        </form>
        <div className="flex items-left w-full">         
            <span className="text-sm">Don't have an account? <Link className="underline" to="/register">Register</Link></span>
        </div>
          {/* <Link to="/" className="flex w-3/4 justify-center rounded-full border-2 border-black px-3 py-1.5 text-md">Create Account</Link> */}
      </div>
    </div>
  );
}
