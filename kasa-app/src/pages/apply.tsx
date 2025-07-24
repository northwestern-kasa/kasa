import Footer from "../components/Footer";
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
            className="bg-[#ff3939cd] font-black text-black hover:bg-red/90 w-1/2 md:w-1/3 lg:w-1/4 mb-8"
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
      <Footer />
    </div>
  );
}
