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
    return <p className="mt-24 text-center font-semibold text-blue">Loading event...</p>;
  }
  if (!event) {
    return <p className="mt-24 text-center font-semibold text-blue">Event not found.</p>;
  }

  const { fields } = event;
  const imageUrl = `${fields.image?.fields.file.url}?fm=webp&q=80`;
  const dateStr = fields.date ? new Date(fields.date).toLocaleDateString(undefined, { year:'numeric', month:'long', day:'numeric'}) : "";

  return (
    <div>
      <main className="pt-24 px-4">
        {/* <SplashPage /> */}
        <section className="kasa-surface max-w-3xl mx-auto my-12 p-6 sm:p-8">
          <Link to="/events" className="text-blue-600 hover:underline font-semibold">
            &larr; Back to Events
          </Link>
          <h1 className="mb-2 mt-4 text-4xl font-black text-blue">{fields.title}</h1>
          {dateStr && <p className="text-gray-500 mb-4">{dateStr}</p>}
          {imageUrl && (
            <img
              src={imageUrl}
              alt={fields.title}
              className="mb-6 h-auto w-full rounded-xl"
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
