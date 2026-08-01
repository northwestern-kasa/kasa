import {
  fetchApplicationSettings,
  type ApplicationSettings,
} from "@/contentful";
import { useEffect, useState } from "react";

const FALLBACK_APPLICATION_URL =
  "https://www.instagram.com/northwesternkasa/?hl=en";

function getSafeApplicationUrl(url: string | undefined) {
  if (!url) return null;

  try {
    const parsedUrl = new URL(url);
    return parsedUrl.protocol === "https:" ? parsedUrl.toString() : null;
  } catch {
    return null;
  }
}

export default function Apply() {
  const [settings, setSettings] = useState<ApplicationSettings | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isCurrent = true;

    fetchApplicationSettings()
      .then((applicationSettings) => {
        if (isCurrent) setSettings(applicationSettings);
      })
      .finally(() => {
        if (isCurrent) setIsLoading(false);
      });

    return () => {
      isCurrent = false;
    };
  }, []);

  const applicationsOpen = settings?.applicationsOpen ?? true;
  const applicationUrl =
    getSafeApplicationUrl(settings?.applicationUrl) ?? FALLBACK_APPLICATION_URL;

  useEffect(() => {
    if (!isLoading && applicationsOpen) {
      window.location.replace(applicationUrl);
    }
  }, [applicationUrl, applicationsOpen, isLoading]);

  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 py-24">
      <section
        aria-live="polite"
        className="kasa-surface w-full max-w-2xl rounded-[1.5rem] px-6 py-12 text-center sm:px-12"
      >
        <h1 className="mb-6 text-4xl font-black text-blue">
          {isLoading || applicationsOpen
            ? "Opening Application..."
            : "Applications Closed"}
        </h1>
        {isLoading ? (
          <p className="text-lg font-medium text-slate-700">
            Checking the current application…
          </p>
        ) : applicationsOpen ? (
          <p className="text-lg font-medium text-slate-700">
            Taking you to the current KASA application. If you are not
            redirected,{" "}
            <a className="font-bold text-blue underline" href={applicationUrl}>
              continue here
            </a>
            .
          </p>
        ) : (
          <p className="max-w-xl text-center text-lg font-medium text-slate-700">
            Applications are currently closed. Check back here or follow KASA
            on Instagram for the next application period.
          </p>
        )}
      </section>
    </main>
  );
}
