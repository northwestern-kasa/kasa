import { Link, useNavigate } from "react-router-dom";
import api from "../fetchApiService";
import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'

interface LoginFormInputs {
  email: string,
  password: string
}

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>()
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const login: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      setIsLoading(true)
      const res = await api.post("/login", data);
      console.log(res)
      navigate("/memberform")
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle>Login</CardTitle>
          <CardDescription>to access this page</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(login)} className="space-y-6">
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Input id="email" {...register("email", { required: "Email is required" })} type="email" />
              {errors.email && <p className="text-xs text-red-600">{errors.email.message}</p>}
            </div>
            <div className="space-y-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <Input id="password" {...register("password", { required: "Password is required" })} type="password" />
              {errors.password && <p className="text-xs text-red-600">{errors.password.message}</p>}
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Logging In...' : 'Login'}
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-center">
            Don't have an account?{' '}
            <Link to="/register" className="text-red hover:underline">Register</Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
