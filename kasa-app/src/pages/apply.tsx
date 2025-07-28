// import Footer from "../components/Footer";
import SplashPage from "../components/SplashPage";
import { Button } from "@/components/ui/button";

export default function Apply() {
  return (
    <div className={""}>
      <main className="">
        <div className="h-[80vh] -mt-40">
          <SplashPage />
        </div>
        <div id="content" className="-mt-28 mb-24 relative z-5 flex flex-col items-center justify-center place-content-center">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Newest Applications
          </h1>
          <Button
            asChild
            className="bg-gradient-to-r from-[rgba(255,57,57,0.8)] to-pink-500 text-white font-black  hover:bg-red/90 w-2/3 sm:w-1/3 border-black  h-full py-4 px-10 text-3xl rounded-lg shadow-lg transition-transform hover:scale-105 hover:from-rose-600 hover:to-pink-600"
          >
            <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/northwesternkasa/?hl=en"
          >
              Apply Now
            </a>
          </Button>
        </div>
      </main>
    </div>
  );
}
