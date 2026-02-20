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
        <section className="mt-12 mb-24 flex flex-col items-center px-6">
          <h1 className="kasa-reveal mb-10 px-10 text-center text-5xl font-black text-blue sm:text-6xl">Our Events</h1>

          {loading ? (
            <p className="kasa-surface rounded-2xl px-6 py-4 text-center text-xl font-semibold text-blue">Loading events...</p>
          ) : events.length > 0 ? (
            <div className="grid w-full max-w-[1200px] grid-cols-1 gap-8 px-2 md:grid-cols-2 xl:grid-cols-3">
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
      className="kasa-surface kasa-floating-card mx-auto block w-full overflow-hidden rounded-2xl"
    >
      {/* Event image, if present */}
      {imageUrl && (
        <img
          src={`${imageUrl}?fm=webp&w=640&fit=fill&q=70`}
          alt={event.fields.title}
          width={640}
          height={360}
          loading="lazy"
          decoding="async"
          className="h-56 w-full object-cover"
        />
      )}
      <div className="p-5">
        <h3 className="mb-2 truncate text-2xl font-black text-blue">{event.fields.title}</h3>
        {event.fields.description && (
          <p className="mb-2 line-clamp-3 text-sm text-gray-600">{event.fields.description}</p>
        )}
        {event.fields.date && (
          <p className="mt-3 inline-flex rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
            {new Date(event.fields.date).toLocaleDateString(undefined, { year:'numeric', month:'short', day:'numeric'})}
          </p>
        )}
        {/* Display video if present */}
        {event.fields.video && (
          <video controls className="mt-4 w-full rounded" preload="none" poster={imageUrl ? `https:${imageUrl}?fm=webp&w=640&h=360&fit=fill&q=60` : undefined}>
            <source src={event.fields.video.fields.file.url} type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </Link>
  );
}
