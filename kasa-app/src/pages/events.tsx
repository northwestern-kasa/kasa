// import Footer from "../components/Footer";
import SplashPage from "../components/SplashPage";
import { useState, useEffect } from "react";
import { fetchEvents } from "../contentful";
import { Link } from 'react-router-dom';

// interface Event {
//   fields: {
//     title: string;
//     description?: string;
//     date?: string;
//     image?: {
//       fields: {
//         file: {
//           url: string;
//         };
//       };
//     };
//   };
// }

export default function Events() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getEvents() {
      try {
        const data = await fetchEvents();
        setEvents(data);
      } catch (error) {
        console.error("Error loading events", error);
      } finally {
        setLoading(false);
      }
    }
    getEvents();
  }, []);

  return (
    <div>
      <main>
        {/* Reuse SplashPage for the hero section styling */}
        <SplashPage />

        {/* Content Area */}
        <section className="mt-10 mb-24 flex flex-col items-center">
          <h1 className="text-center font-bold text-6xl mb-10 px-10">Our Events</h1>

          {loading ? (
            <p className="text-center text-xl">Loading events...</p>
          ) : events.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
              {events.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </div>
          ) : (
            <p>No events available at the moment.</p>
          )}
        </section>
      </main>
    </div>
  );
}

function EventCard({ event }: { event: any }) {
  const imageUrl = event.fields.image?.fields.file.url;
  const id = event.sys.id;
  return (
    <Link
      to={`/events/${id}`}
      className="block w-full sm:w-80 bg-white rounded-lg shadow-lg hover:shadow-2xl overflow-hidden transition-shadow duration-200 mx-auto"
    >
      {/* Event image, if present */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={event.fields.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-5">
        <h3 className="font-semibold text-2xl mb-2 truncate">{event.fields.title}</h3>
        {event.fields.description && (
          <p className="text-gray-600 text-sm mb-2 line-clamp-3">{event.fields.description}</p>
        )}
        {event.fields.date && (
          <p className="text-gray-500 text-xs mt-2">
            {new Date(event.fields.date).toLocaleDateString(undefined, { year:'numeric', month:'short', day:'numeric'})}
          </p>
        )}
        {/* Display video if present */}
        {event.fields.video && (
          // Using native HTML5 video element
          <video controls className="mt-4 w-full rounded">
            <source 
              src={event.fields.video.fields.file.url} 
              type="video/quicktime" 
            />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </Link>
  );
}

