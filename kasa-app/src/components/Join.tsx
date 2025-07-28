import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export default function Join() {
  return (
    <div className="flex items-center justify-center w-2/3 ">
      <Button asChild className="text-2xl bg-gradient-to-r from-[rgba(255,57,57,0.8)] to-pink-500 text-white font-black  hover:bg-red/90 w-full border-black  h-full">
        <Link to="/apply">Apply</Link>
      </Button>
    </div>
  );
}
