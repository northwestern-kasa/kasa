import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export default function Join() {
  return (
    <div className="flex items-center justify-center w-2/3 ">
      <Button asChild className="bg-[#ff3939cd] font-black text-black hover:bg-red/90 w-full border-blue border-2 h-full">
        <Link to="/apply">Apply</Link>
      </Button>
    </div>
  );
}
