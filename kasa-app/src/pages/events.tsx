import Footer from "../components/Footer";
import SplashPage from "../components/SplashPage";
import { useState, useEffect } from "react";
import { fetchEvents } from "../contentful";

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
        <section className="-mt-44 mb-24 flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-10">Our Events</h1>

          {loading ? (
            <p>Loading events...</p>
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
      <Footer />
    </div>
  );
}

function EventCard({ event }: { event: any }) {
  return (
    <div className="w-64 bg-white rounded-md shadow-md overflow-hidden">
      {/* Event image, if present */}
      {event.fields.image && (
        <img
          src={event.fields.image.fields.file.url}
          alt={event.fields.title}
          className="w-full h-40 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{event.fields.title}</h3>
        {event.fields.description && (
          <p className="text-gray-600 text-sm">{event.fields.description}</p>
        )}
        {event.fields.date && (
          <p className="text-gray-500 text-xs mt-2">
            {new Date(event.fields.date).toLocaleDateString()}
          </p>
        )}
      </div>
    </div>
  );
}
