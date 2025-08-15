import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchEventById } from "../contentful";
// import Footer from "../components/Footer";
// import SplashPage from "../components/SplashPage";

export default function EventDetail() {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    async function load() {
      try {
        const entry = await fetchEventById(id!);
        setEvent(entry);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-20">Loading event...</p>;
  }
  if (!event) {
    return <p className="text-center mt-20">Event not found.</p>;
  }

  const { fields } = event;
  const imageUrl = `${fields.image?.fields.file.url}?fm=webp&q=80`;
  const dateStr = fields.date ? new Date(fields.date).toLocaleDateString(undefined, { year:'numeric', month:'long', day:'numeric'}) : "";

  return (
    <div>
      <main>
        {/* <SplashPage /> */}
        <section className="max-w-3xl mx-auto my-16 p-4">
          <Link to="/events" className="text-blue-600 hover:underline">
            &larr; Back to Events
          </Link>
          <h1 className="text-4xl font-bold mt-4 mb-2">{fields.title}</h1>
          {dateStr && <p className="text-gray-500 mb-4">{dateStr}</p>}
          {imageUrl && (
            <img
              src={imageUrl}
              alt={fields.title}
              className="w-full h-auto rounded-lg mb-6"
            />
          )}
          {fields.description && (
            <div className="prose prose-lg">
              <p>{fields.description}</p>
            </div>
          )}
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
