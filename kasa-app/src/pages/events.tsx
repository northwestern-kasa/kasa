import Footer from "../components/Footer";
import SplashPage from "../components/SplashPage";

export default function Events() {
  return (
    <div
      className={""}
    >
      <main>
        {/* Keep the splash/hero section if you want that same top styling */}
        <SplashPage />
        
        {/* Content area */}
        <section className="-mt-44 mb-24 flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-10">Our Events</h1>
          
          {/* Grid of placeholder cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="w-64 h-64 bg-gray-300 rounded-md shadow-md flex items-center justify-center text-gray-500 text-xl"
              >
                {/* Replace with your image or card component */}
                Image Placeholder
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}
