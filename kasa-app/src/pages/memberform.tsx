import { Navigate } from "react-router-dom";
import api from "../fetchApiService";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import AlreadyApplied from "../components/AlreadyApplied";

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
  const [isSubmitted, setIsSubmitted] = useState(false)
  if (!user) {
    return <Navigate to="/login" replace/>
  }

  const retrieveApplication = async () => {
    const res = await api.get("/user/getApplication")
    
    const data = JSON.parse(res.S)

    if (data.submitted) {
      setIsSubmitted(true)
    }

    const answers = data.answers

    if (answers) {
      answers.forEach((answer: { identifier: number; value: any }) => {
          switch (answer.identifier) {
            case 1:
              setValue("name", answer.value);
              break;
            case 2:
              setValue("year", answer.value);
              break;
            case 3:
              setValue("birthday", answer.value);
              break;
            case 4:
              setValue("connection", answer.value);
              break;
            case 5:
              setValue("why_join", answer.value);
              break;
            case 6:
              setValue("gm_attend", answer.value === "Yes");
              break;
            case 7:
              setValue("mandatory_safety", answer.value === "Yes");
              break;
            default:
              break;
          }
        });
    }
  }

  useEffect(() => {
    retrieveApplication();
  }, [])

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<MemberFormInputs>();

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
    const res = await api.post("/user/saveApplication", submission);
    console.log(res);
  };

  if (isSubmitted) {
    return <AlreadyApplied/>
  }

  return (
    <div className="flex justify-center items-center m-20">
      <div
        id="container"
        className="flex flex-col space-y-8 items-center justify-center rounded-[3rem] navBarShadow p-16 min-w-62"
      >
        <div id="header" className="flex flex-col space-y-1 text-center">
          <h2 id="header" className="font-bold text-3xl">
            General Member Application
          </h2>
          <h6 className="text-lg mt-10">
            Please submit this application by Sunday, January 11 at 11:59 pm.
          </h6>
        </div>
        <form
          onSubmit={handleSubmit(apply)}
          method="POST"
          className="flex flex-col space-y-7 justify-center"
        >
          {/* Name */}
          <div className="flex flex-row justify-between">
            <label htmlFor="name">Name</label>
            {errors.name && (
              <p className="!mt-2 text-red text-sm text-end">
                {errors.name.message}
              </p>
            )}
          </div>
          <input
            id="name"
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="Andrew Park / Janice Kim"
            className="contactInput w-full !mt-2"
          />

          {/* Year */}

          <fieldset className="border-4 p-4 w-full rounded-lg">
            <legend>Year</legend>
            <div className="flex flex-col space-y-2 mt-2">
              <div>
                <input
                  type="radio"
                  id="freshman"
                  value="freshman"
                  {...register("year", { required: "Year is required" })}
                />
                <label htmlFor="freshman" className="ml-1">
                  Freshman
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="sophomore"
                  value="sophomore"
                  {...register("year")}
                />
                <label htmlFor="sophomore" className="ml-1">
                  Sophomore
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="junior"
                  value="junior"
                  {...register("year")}
                />
                <label htmlFor="junior" className="ml-1">
                  Junior
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="senior"
                  value="senior"
                  {...register("year")}
                />
                <label htmlFor="senior" className="ml-1">
                  Senior
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="other"
                  value="other"
                  {...register("year")}
                />
                <label htmlFor="other" className="ml-1">
                  Other
                </label>
              </div>
            </div>
            {errors.year && (
              <p className=" text-red text-sm text-end">
                {errors.year.message}
              </p>
            )}
          </fieldset>

          {/* Birthday */}
          <div className="flex flex-row justify-between">
            <label htmlFor="birthday">Birthday</label>
            {errors.birthday && (
              <p className="!mt-1 text-red text-sm text-end">
                {errors.birthday.message}
              </p>
            )}
          </div>
          <input
            id="birthday"
            {...register("birthday", { required: "Birthday is required" })}
            type="date"
            className="contactInput !mt-2"
          />

          {/* Connection */}
          <div className="flex flex-row justify-between">
            <label htmlFor="connection">How did you hear about KASA?</label>
            {errors.connection && (
              <p className="!mt-1 text-red text-sm text-end">
                {errors.connection.message}
              </p>
            )}
          </div>
          <textarea
            rows={5}
            id="connection"
            {...register("connection", {
              required: "This field is required",
            })}
            placeholder="How did you hear about us?"
            className="contactInput w-full resize-none !mt-2"
          />

          {/* Why Join */}
          <div className="flex flex-row justify-between">
            <label htmlFor="why_join">
              Why do you want to join KASA? ({`<`}200 words)
            </label>
            {errors.why_join && (
              <p className="!mt-1 text-red text-sm text-end">
                {errors.why_join.message}
              </p>
            )}
          </div>
          <textarea
            rows={5}
            id="why_join"
            {...register("why_join", {
              required: "Please describe why you'd like to join",
            })}
            placeholder="Briefly share your motivations..."
            className="contactInput w-full resize-none !mt-2"
          />

          {/* GM Attend Checkbox */}
          <div className="flex items-center space-x-2">
            <input id="gm_attend" type="checkbox" {...register("gm_attend")} />
            <label htmlFor="gm_attend">
              General meetings (GMs) are on Thursdays at 8:00pm in Tech. Can you
              make this commitment?
            </label>
          </div>

          {/* Mandatory Safety Checkbox */}
          <div className="flex items-center space-x-2">
            <input
              id="mandatory_safety"
              type="checkbox"
              {...register("mandatory_safety", {
                required: "Attendance is required",
              })}
            />
            <div className="flex place-content-between space-x-8">
              <label htmlFor="mandatory_safety">
                Will you be at the MANDATORY Safety & Wellness GM next Thursday?
              </label>
              {errors.mandatory_safety && (
                <p className=" text-red text-sm text-end">
                  {errors.mandatory_safety.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-row justify-between space-x-20">
            <button onClick={handleSubmit(saveApplication)} className="flex w-48 mt-5 justify-center rounded-full bg-purple-500 text-white px-3 py-1.5 text-md">
                Save
            </button>
            <button 
                type="submit"
                className="flex w-48 mt-5 justify-center rounded-full bg-red text-white px-3 py-1.5 text-md"
            >
                Submit
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
}
