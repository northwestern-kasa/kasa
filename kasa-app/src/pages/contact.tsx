import Footer from "../components/Footer";
import SplashPage from "../components/SplashPage";
import logo from "/Logo.svg"

export default function Contact() {
  return (
    <div>
      <main className="">
        <SplashPage />


        <div id="contactPage" className="mb-10 flex flex-col items-center justify-center">
          <h1 className="text-center font-extrabold text-5xl">Get in Touch</h1>
          <p className="text-center mt-1 mb-12 text-gray-500">Fill out the form and our team will get to you with 24 hours</p>

          
          <div id="contactbox" className="contactBox m-auto align-middle grid grid-cols-2 p-8 gap-4">
            <div id="leftcol" className="flex flex-col items-start justify-center">
              <div className="p-4 -mt-6">
                <h2 className="font-bold text-2xl">Have Questions?</h2>
                <p className="text-gray-600 text-xs">northwesternkasa@gmail.com</p>
              </div>
              <img src={logo} alt="KASA Logo" className="w-1/3 self-center m-10  min-w-[120px]"/>
            </div>

            <div id="rightcol" className="flex flex-col justify-center ">
              <form className="lg:space-y-9 space-y-5 place-items-center">
                <div className="flex flex-col place-content-between sm:flex-row ">
                  <input type="text" placeholder="First Name" className="contactInput"/>
                  <input type="text" placeholder="Last Name" className="contactInput"/>
                </div>
                <input type="email" placeholder="Email" className="contactInput w-full"/>
                <input type="text" placeholder="Subject" className="contactInput w-full"/>
                <textarea rows={7} placeholder="Message" className="contactInput w-full"/>
              </form>
            </div>
          </div>
        </div>

        
      </main>
      <Footer />
    </div>
  );
}
