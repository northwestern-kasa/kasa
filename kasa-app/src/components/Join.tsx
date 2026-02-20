import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export default function Join() {
  return (
    <div className="flex items-center justify-center w-full">
      <Button
        asChild
        className="kasa-btn-primary h-11 w-full rounded-xl px-6 text-lg font-black tracking-wide text-white md:text-xl"
      >
        <Link to="/apply">Apply</Link>
      </Button>
    </div>
  );
}
