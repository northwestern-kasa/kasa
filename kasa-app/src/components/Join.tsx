import { Link } from "react-router-dom";

export default function Join() {
  return (
    <div className="flex items-center justify-center w-full">
      <Link
        to="/apply"
        target="_blank"
        rel="noopener noreferrer"
        className="kasa-btn-primary inline-flex h-11 w-full items-center justify-center rounded-xl px-6 text-lg font-black tracking-wide text-white md:text-xl"
      >
        Apply
      </Link>
    </div>
  );
}
