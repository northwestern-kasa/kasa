import { Link } from "react-router-dom";
import { useState } from "react";

export default function HoverPrefetchLink({ to, children }: { to: string; children: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={to}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    //   prefetch={isHovered ? "true" : "false"}
      className="hover:underline"
    >
      {children}
    </Link>
  );
}