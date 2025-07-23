import { Navigate } from "react-router-dom";
import api from "../fetchApiService";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import AlreadyApplied from "../components/AlreadyApplied";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Calendar } from '../components/ui/calendar'
import { Button } from '../components/ui/button'
import { Popover, PopoverTrigger, PopoverContent } from '../components/ui/popover'
import { CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from '../components/ui/dropdown-menu'
import { Checkbox } from '../components/ui/checkbox'

interface MemberFormInputs {
  name: string;
  year: string;
  birthday: string;
  connection: string;
  why_join: string;
  gm_attend: boolean;
  mandatory_safety: boolean;
}

export default function MemberForm({ user }: {user: any}) {
  const { register, handleSubmit, setValue, formState: { errors }, control } = useForm<MemberFormInputs>()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    async function retrieveApplication() {
      const res = await api.get("/user/getApplication")
      const data = JSON.parse(res.S)
      if (data.submitted) setIsSubmitted(true)
      if (data.answers) {
        data.answers.forEach((answer: { identifier: number; value: any }) => {
          switch (answer.identifier) {
            case 1: setValue("name", answer.value); break
            case 2: setValue("year", answer.value); break
            case 3: setValue("birthday", answer.value); break
            case 4: setValue("connection", answer.value); break
            case 5: setValue("why_join", answer.value); break
            case 6: setValue("gm_attend", answer.value === "Yes"); break
            case 7: setValue("mandatory_safety", answer.value === "Yes"); break
          }
        })
      }
    }
    retrieveApplication()
  }, [setValue])

  if (!user) return <Navigate to="/login" replace />
  if (isSubmitted) return <AlreadyApplied />


  const apply: SubmitHandler<MemberFormInputs> = async (data) => { 
    const submission = {
      answers: [
        { identifier: 1, value: data.name },
        { identifier: 2, value: data.year },
        { identifier: 3, value: data.birthday },
        { identifier: 4, value: data.connection },
        { identifier: 5, value: data.why_join },
        { identifier: 6, value: data.gm_attend ? "Yes" : "No" },
        { identifier: 7, value: data.mandatory_safety ? "Yes" : "No" },
      ],
      submittedAt: new Date().toISOString(),
    };
    
    setIsSubmitted(true);
    const res = await api.post("/user/submitApplication", submission); 
    console.log(res);
  };

  const saveApplication: SubmitHandler<MemberFormInputs> = async (data) => {
    const submission = {
      answers: [
        { identifier: 1, value: data.name },
        { identifier: 2, value: data.year },
        { identifier: 3, value: data.birthday },
        { identifier: 4, value: data.connection },
        { identifier: 5, value: data.why_join },
        { identifier: 6, value: data.gm_attend ? "Yes" : "No" },
        { identifier: 7, value: data.mandatory_safety ? "Yes" : "No" },
      ],
      submittedAt: new Date().toISOString(),
    };
    console.log("Submitting application:", submission);
    const res = await api.post("/user/saveApplication", submission); 
    console.log(res);
  };

  if (isSubmitted) {
    return <AlreadyApplied/>
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-3xl">
        <CardHeader className="text-center ">
          <CardTitle>General Member Application</CardTitle>
          <CardDescription>Please submit this application by Sunday, January 11 at 11:59 pm.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 ">
          <form onSubmit={handleSubmit(apply)} className="space-y-6 ">
            {/* Name */}
            <div className="space-y-1">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <Input id="name" {...register("name", { required: "Name is required" })} placeholder="Caleb Shim" />
              {errors.name && <p className="text-xs text-red-600">{errors.name.message}</p>}
            </div>

            {/* Year & Birthday */}
            <div className="flex sm:flex-row space-x-6">
              <div className="flex-1 space-y-1">
                <label htmlFor="year" className="block text-sm font-medium text-gray-700">Year</label>
                <Controller
                  control={control}
                  name="year"
                  rules={{ required: 'Year is required' }}
                  render={({ field }) => (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-full text-left justify-between">
                          {field.value || 'Select year'}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-full">
                        <DropdownMenuLabel>Year</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {['Freshman','Sophomore','Junior','Senior','Other'].map(option => (
                          <DropdownMenuItem key={option} onSelect={() => field.onChange(option)}>
                            {option}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                />
                {errors.year && <p className="text-xs text-red-600">{errors.year.message}</p>}
              </div>
              <div className="flex-1 space-y-1">
                <label htmlFor="birthday" className="block text-sm font-medium text-gray-700">Birthday</label>
                <Controller
                  control={control}
                  name="birthday"
                  rules={{ required: "Birthday is required" }}
                  render={({ field }) => (
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <button
                          type="button"
                          id="birthday"
                          className="inline-flex w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-left placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-900"
                        >
                          {field.value ? format(new Date(field.value), 'PPP') : 'Select date'}
                          <CalendarIcon className="ml-auto h-4 w-4 text-gray-400" />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value as unknown as Date | undefined}
                          onSelect={date => { field.onChange(date); setOpen(false) }}
                          captionLayout="dropdown"
                        />
                      </PopoverContent>
                    </Popover>
                  )}
                />
                {errors.birthday && <p className="text-xs text-red-600">{errors.birthday.message}</p>}
              </div>
            </div>

            {/* Connection */}
            <div className="space-y-1">
              <label htmlFor="connection" className="block text-sm font-medium text-gray-700">How did you hear about KASA?</label>
              <textarea
                rows={5}
                id="connection"
                {...register("connection", { required: "This field is required" })}
                placeholder="How did you hear about us?"
                className="block w-full rounded-lg border border-gray-300 px-4 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-900 resize-none"
              />
              {errors.connection && <p className="text-xs text-red-600">{errors.connection.message}</p>}
            </div>

            {/* Why Join */}
            <div className="space-y-1">
              <label htmlFor="why_join" className="block text-sm font-medium text-gray-700">
                Why do you want to join KASA?
              </label>
              <textarea
                rows={5}
                id="why_join"
                {...register("why_join", { required: "Please describe why you'd like to join" })}
                placeholder="Briefly share your motivations..."
                className="block w-full rounded-lg border border-gray-300 px-4 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-900 resize-none"
              />
              {errors.why_join && <p className="text-xs text-red-600">{errors.why_join.message}</p>}
            </div>

            {/* GM Attend */}
            <div className="space-y-1">
              <Controller
                control={control}
                name="gm_attend"
                render={({ field }) => (
                  <div className="flex items-center space-x-2">
                    <Checkbox id="gm_attend" checked={!!field.value} onCheckedChange={field.onChange} />
                    <label htmlFor="gm_attend" className="text-sm text-gray-700">
                      General meetings (GMs) are on Thursdays at 8:00pm. Can you attend?
                    </label>
                  </div>
                )}
              />
            </div>

            {/* Mandatory Safety */}
            <div className="space-y-1">
              <Controller
                control={control}
                name="mandatory_safety"
                rules={{ required: 'Attendance is required' }}
                render={({ field }) => (
                  <div className="flex items-center space-x-2">
                    <Checkbox id="mandatory_safety" checked={!!field.value} onCheckedChange={field.onChange} />
                    <div>
                      <label htmlFor="mandatory_safety" className="text-sm text-gray-700">
                        Will you be at the MANDATORY Safety & Wellness GM next Thursday?
                      </label>
                      {errors.mandatory_safety && <p className="text-xs text-red-600">{errors.mandatory_safety.message}</p>}
                    </div>
                  </div>
                )}
              />
            </div>
            {/* GM Attend Checkbox and others... */}
          </form>
        </CardContent>
        <CardFooter className="flex justify-end space-x-4">
          {/* <Button onClick={handleSubmit(saveApplication)} className="bg-red hover:bg-red-600">Save</Button> */}
          <Button onClick={handleSubmit(apply)}>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
