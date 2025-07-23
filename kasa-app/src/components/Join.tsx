import { Button } from "./ui/button";

export default function Join() {
  return (
    <div className="flex items-center justify-center w-2/3 ">
      <Button asChild className="bg-[#ff3a3a9f] font-black text-black hover:bg-red/90 w-full border-blue border-2">
        <a href="/apply">Apply</a>
      </Button>
    </div>
  );
}
