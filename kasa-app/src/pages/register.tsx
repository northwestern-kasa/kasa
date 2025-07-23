import { Link } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import api from '../fetchApiService'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'

interface RegisterFormInputs {
  firstName: string
  lastName: string
  email: string
  password: string
}

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormInputs>()
  const [isLoading, setIsLoading] = useState(false)

  const signUp: SubmitHandler<RegisterFormInputs> = async data => {
    try {
      setIsLoading(true)
      const res = await api.post('/register', data)
      console.log(res)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle>Create Account</CardTitle>
          <CardDescription>Welcome to Northwestern KASA!</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(signUp)} className="space-y-6">
            <div className="space-y-1">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
              <Input id="firstName" {...register('firstName', { required: true })} />
              {errors.firstName && <p className="text-xs text-red-600">First name is required</p>}
            </div>
            <div className="space-y-1">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
              <Input id="lastName" {...register('lastName', { required: true })} />
              {errors.lastName && <p className="text-xs text-red-600">Last name is required</p>}
            </div>
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <Input id="email" {...register('email', { required: true })} type="email" />
              {errors.email && <p className="text-xs text-red-600">Valid email is required</p>}
            </div>
            <div className="space-y-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <Input id="password" {...register('password', { required: true })} type="password" />
              {errors.password && <p className="text-xs text-red-600">Password is required</p>}
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Signing Up...' : 'Sign Up'}
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-center">
            Already have an account?{' '}
            <Link to="/login" className="text-red hover:underline">Log In</Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
