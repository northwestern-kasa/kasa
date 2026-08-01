import { useLayoutEffect, useRef, type RefObject } from "react";
import { useLocation } from "react-router-dom";

import { DesktopNavBar } from "./NavBar";

interface MergedDesktopNavProps {
  headerRef: RefObject<HTMLDivElement>;
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const smoothstep = (value: number) => value * value * (3 - 2 * value);

export default function MergedDesktopNav({
  headerRef,
}: MergedDesktopNavProps) {
  const navRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const currentPath = useLocation().pathname;

  useLayoutEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const positionNav = () => {
      const header = headerRef.current;
      if (!header) return;

      const headerRect = header.getBoundingClientRect();
      const targetCenter = headerRect.top + headerRect.height / 2;
      const anchor = document.querySelector<HTMLElement>(
        "[data-kasa-nav-anchor]"
      );

      let center = targetCenter;
      let progress = 1;

      if (anchor && anchor.offsetParent !== null) {
        const anchorRect = anchor.getBoundingClientRect();
        const naturalCenter = anchorRect.top + anchorRect.height / 2;
        const mergeDistance = Math.min(180, window.innerHeight * 0.2);
        const rawProgress = clamp(
          1 - (naturalCenter - targetCenter) / mergeDistance,
          0,
          1
        );

        progress = smoothstep(rawProgress);
        center =
          naturalCenter + (targetCenter - naturalCenter) * progress;
      }

      const startScale = 0.75;
      const scale = startScale + (1 - startScale) * progress;
      const unmerged = 1 - progress;

      nav.style.setProperty(
        "--kasa-nav-surface-alpha",
        (0.84 * unmerged).toFixed(4)
      );
      nav.style.setProperty(
        "--kasa-nav-border-alpha",
        (0.45 * unmerged).toFixed(4)
      );
      nav.style.setProperty(
        "--kasa-nav-shadow-alpha",
        (0.14 * unmerged).toFixed(4)
      );
      nav.style.setProperty(
        "--kasa-nav-blur",
        `${(10 * unmerged).toFixed(2)}px`
      );
      nav.style.top = `${center}px`;
      nav.style.transform = `translate3d(-50%, -50%, 0) scale(${scale})`;
    };

    const schedulePosition = () => {
      if (frameRef.current !== null) return;

      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        positionNav();
      });
    };

    positionNav();
    window.addEventListener("scroll", schedulePosition, { passive: true });
    window.addEventListener("resize", schedulePosition);

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
      window.removeEventListener("scroll", schedulePosition);
      window.removeEventListener("resize", schedulePosition);
    };
  }, [currentPath, headerRef]);

  return (
    <div
      ref={navRef}
      className="fixed left-1/2 top-[46px] z-[60] hidden origin-center -translate-x-1/2 -translate-y-1/2 will-change-transform md:block"
    >
      <DesktopNavBar />
    </div>
  );
}
