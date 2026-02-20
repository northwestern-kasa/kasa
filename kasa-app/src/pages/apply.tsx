// import Footer from "../components/Footer";
import SplashPage from "../components/SplashPage";
import { Button } from "@/components/ui/button";

export default function Apply() {
  return (
    <div className={""}>
      <main>
        <div className="h-[80vh] -mt-40">
          <SplashPage />
        </div>
        <div id="content" className="relative z-10 -mt-28 mb-24 flex flex-col items-center justify-center place-content-center px-6">
          <h1 className="mb-6 text-center text-4xl font-black text-blue">
            Newest Applications
          </h1>
          <Button
            asChild
            className="kasa-btn-primary h-full w-2/3 rounded-xl px-10 py-5 text-3xl font-black text-white sm:w-1/3"
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
