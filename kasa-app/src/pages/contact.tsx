// import Footer from "../components/Footer";
import SplashPage from "../components/SplashPage";
import logo from "/Logo.svg";
// import api from "../fetchApiService";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";


interface ContactFormInputs {
  firstname: string;
  lastname: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const { register, handleSubmit, reset } = useForm<ContactFormInputs>();

  const sendMsg: SubmitHandler<ContactFormInputs> = async (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value as string);
    });
    formData.append("access_key", "fa2e40fe-cda4-4b7e-967d-e0f92da61970");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      await response.json();
      // console.log(result);
      reset();
      
      toast.success("Email sent successfully!", {
          description: "Thank you for reaching out to us.",
        });
      
      
    } catch (error) {
      console.error("Error sending contact form:", error);
      toast.error("Failed to send message.", {
        description: "Please try again later.",
      });
    }
  };

  return (
    <div>
      <main>
        <Toaster position="top-center" richColors />
        <div className="h-[80vh] -mt-40">
          <SplashPage />
        </div>
        

        <div
          id="contactPage"
          className="relative z-10 -mt-28 mb-24 flex flex-col items-center justify-center place-content-center px-6"
        >
          {/* <h1 className="text-center font-extrabold text-3xl sm:text-4xl px-2 sm:px-10">Get in Touch</h1>
          <p className="text-center mt-1 mb-12 text-gray-500 px-10 sm:px-10">
            Fill out the form and our team will get to you with 24 hours
          </p> */}

          <div
            id="contactbox"
            className="kasa-surface mb-8 grid w-full max-w-[76rem] grid-cols-1 p-5 md:w-[78%] md:grid-cols-2 md:gap-6 md:p-8"
          >
            <div
              id="leftcol"
              className="flex flex-col items-center justify-center rounded-2xl bg-[#fff8f2] p-4 sm:items-start"
            >
              <div className="p-4 md:-mt-2">
                <h2 className="text-3xl font-black text-blue">Have Questions?</h2>
                <p className="mt-2 text-xs text-gray-600">
                  northwesternkasa@gmail.com
                </p>
              </div>
              
              <img
                src={logo}
                alt="KASA Logo"
                className="m-10 hidden w-1/2 self-center drop-shadow-xl md:block"
              />
            </div>

            <div id="rightcol" className="flex flex-col justify-center sm:w-full">
              <form
                onSubmit={handleSubmit(sendMsg)}
                method="POST"
              className="space-y-5"
              >
                <div className="flex flex-col w-full space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                  <Input
                    {...register("firstname", { required: "First name is required" })}
                    type="text"
                    placeholder="First Name"
                    className="block w-full rounded-lg border border-[#2b3467]/20 bg-white px-4 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#eb455f]"
                  />
                  <Input
                    {...register("lastname")}
                    type="text"
                    placeholder="Last Name"
                    className="block w-full rounded-lg border border-[#2b3467]/20 bg-white px-4 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#eb455f]"
                  />
                </div>
                <Input
                  {...register("email", { required: "Email is required" })}
                  type="email"
                  placeholder="Email"
                  className="block w-full rounded-lg border border-[#2b3467]/20 bg-white px-4 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#eb455f]"
                />
                <Input
                  {...register("subject", { required: "Subject is required" })}
                  type="text"
                  placeholder="Subject"
                  className="block w-full rounded-lg border border-[#2b3467]/20 bg-white px-4 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#eb455f]"
                />
                <textarea
                  rows={7}
                  {...register("message", { required: "Message is required" })}
                  placeholder="Message"
                  className="block w-full resize-none rounded-lg border border-[#2b3467]/20 bg-white px-4 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#eb455f]"
                />
                <div className="flex w-full justify-center sm:justify-end">
                  <Button
                    type="submit"
                    className="kasa-btn-primary w-full rounded-xl px-7 font-semibold text-white sm:w-auto"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
