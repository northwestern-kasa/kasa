import Footer from "../components/Footer";
import SplashPage from "../components/SplashPage";
import logo from "/Logo.svg";
import api from "../fetchApiService";
import { useForm, SubmitHandler } from "react-hook-form";

interface ContactFormInputs {
  firstname: string;
  lastname: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const { register, handleSubmit } = useForm<ContactFormInputs>();

  const sendMsg: SubmitHandler<ContactFormInputs> = async (data) => {
    const res = await api.post("/contact", data);
    console.log(res);
  };

  return (
    <div>
      <main className="">
        <SplashPage />

        <div
          id="contactPage"
          className="mb-10 flex flex-col items-center justify-center"
        >
          <h1 className="text-center font-extrabold text-5xl">Get in Touch</h1>
          <p className="text-center mt-1 mb-12 text-gray-500">
            Fill out the form and our team will get to you with 24 hours
          </p>

          <div
            id="contactbox"
            className="contactBox m-auto align-middle grid grid-cols-2 p-8 gap-4 pb-1"
          >
            <div
              id="leftcol"
              className="flex flex-col items-start justify-center"
            >
              <div className="p-4 -mt-10">
                <h2 className="font-bold text-2xl">Have Questions?</h2>
                <p className="text-gray-600 text-xs">
                  northwesternkasa@gmail.com
                </p>
              </div>
              <img
                src={logo}
                alt="KASA Logo"
                className="w-1/3 self-center m-20  min-w-[120px]"
              />
            </div>

            <div id="rightcol" className="flex flex-col justify-center">
              <form
                onSubmit={handleSubmit(sendMsg)}
                method="POST"
                className="space-y-5 place-items-center"
              >
                <div className="flex flex-col place-content-between sm:flex-row ">
                  <input
                    {...register("firstName", { required: "First name is required" })}
                    type="text"
                    placeholder="First Name"
                    className="contactInput"
                  />
                  <input
                    {...register("lastName")}
                    type="text"
                    placeholder="Last Name"
                    className="contactInput"
                  />
                </div>
                <input
                  {...register("email", { required: "Email is required" })}
                  type="email"
                  placeholder="Email"
                  className="contactInput w-full"
                />
                <input
                  {...register("subject", { required: "Subject is required" })}
                  type="text"
                  placeholder="Subject"
                  className="contactInput w-full"
                />
                <textarea
                  rows={7}
                  {...register("message", { required: "Message is required" })}
                  placeholder="Message"
                  className="contactInput w-full resize-none"
                />
                <div className="flex flex-col place-content-end sm:flex-row ">
                  <button
                    type="submit"
                    className="
                      rounded-3xl
                      border-2
                      border-rose-400
                      bg-white
                      px-6
                      py-1.5
                      font-semibold
                      text-red-500
                      transition-colors
                      hover:bg-gray-100
                      focus:outline-none
                      focus:ring-2
                      focus:ring-red-300
                    "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
