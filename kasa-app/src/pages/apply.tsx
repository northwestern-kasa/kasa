import Footer from "../components/Footer";
import SplashPage from "../components/SplashPage";
import { Link } from 'react-router-dom'

export default function Apply() {
  return (
    <div
      className={""}
    >
      <main className="">
        <SplashPage />
        <div id="content" className="w-full flex justify-center -mt-64 pb-48">
          <div id="apply-container" className="border border-gray-300 rounded-2xl p-8">
            <p className="text-gray-500 text-sm">Winter 2025</p>
            <h4 className="font-bold text-2xl">General Member Application</h4>
            <p className="text-sm">due 01/10/2025</p>
            <button className="bg-red text-white text-sm py-2 px-8 rounded-full mt-4">
              <Link to="/apply/active" className="">Apply</Link>
            </button>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
