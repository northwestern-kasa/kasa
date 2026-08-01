// import Footer from "../components/Footer";
import SplashPage from "../components/SplashPage";
import { Button } from "@/components/ui/button";
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

  return (
    <div className={""}>
      <main>
        <div className="h-[80vh] -mt-40">
          <SplashPage />
        </div>
        <div id="content" className="relative z-10 -mt-28 mb-24 flex flex-col items-center justify-center place-content-center px-6">
          <h1 className="mb-6 text-center text-4xl font-black text-blue">
            {applicationsOpen ? "Newest Applications" : "Applications Closed"}
          </h1>
          {applicationsOpen ? (
            <Button
              asChild={!isLoading}
              disabled={isLoading}
              className="kasa-btn-primary h-full w-2/3 rounded-xl px-10 py-5 text-3xl font-black text-white sm:w-1/3"
            >
              {isLoading ? (
                "Loading Application..."
              ) : (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={applicationUrl}
                >
                  Apply Now
                </a>
              )}
            </Button>
          ) : (
            <p className="max-w-xl text-center text-lg font-medium text-slate-700">
              Applications are currently closed. Check back here or follow KASA
              on Instagram for the next application period.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
