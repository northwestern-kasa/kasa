import {
  ArrowUpRight,
  CalendarDays,
  House,
  Mail,
  UsersRound,
  X,
  type LucideIcon,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";

import logo from "/Logo.webp";
import Cheeseburger from "./CheeseBurger";

interface MenuItem {
  path: string;
  label: string;
  description: string;
  icon: LucideIcon;
}

const menuItems: MenuItem[] = [
  {
    path: "/",
    label: "Home",
    description: "Welcome to KASA",
    icon: House,
  },
  {
    path: "/family",
    label: "Families",
    description: "Meet our three families",
    icon: UsersRound,
  },
  {
    path: "/events",
    label: "Events",
    description: "See what is coming up",
    icon: CalendarDays,
  },
  {
    path: "/contact",
    label: "Contact",
    description: "Get in touch with us",
    icon: Mail,
  },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = useLocation().pathname;
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  const isActive = (path: string) =>
    path === "/" ? currentPath === "/" : currentPath.startsWith(path);

  const closeMenu = useCallback((restoreFocus = true) => {
    setIsOpen(false);
    if (restoreFocus) {
      window.requestAnimationFrame(() => triggerRef.current?.focus());
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        return;
      }
      if (event.key !== "Tab") return;

      const focusableElements = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusableElements?.length) return;

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyboard);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, [closeMenu, isOpen]);

  return (
    <>
      <nav className="relative z-50">
        <div className="navBarShadow kasa-glass hidden items-center rounded-full p-2 md:flex md:gap-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              prefetch="intent"
              className={`rounded-full px-5 py-2 text-base font-semibold tracking-wide transition-colors ${
                isActive(item.path)
                  ? "bg-blue text-white shadow"
                  : "text-blue hover:bg-rose-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          ref={triggerRef}
          type="button"
          className="flex items-center rounded-xl px-1 text-blue transition-colors hover:bg-blue/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 md:hidden"
          onClick={() => setIsOpen(true)}
          aria-label="Open mobile menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <span className="text-sm font-black tracking-[0.16em]">MENU</span>
          <Cheeseburger
            isToggled={isOpen}
            rounded
            color="#2b3467"
            width={42}
            height={42}
          />
        </button>
      </nav>

      {typeof document !== "undefined" &&
        createPortal(
          <div
            className={`fixed inset-0 z-[1000] bg-[#fffaf4] transition-[visibility] duration-0 md:hidden ${
              isOpen ? "visible delay-0" : "invisible delay-300"
            }`}
            aria-hidden={!isOpen}
          >
            <aside
              ref={panelRef}
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className={`flex h-[100dvh] w-full flex-col bg-[#fffaf4] px-3 pb-[max(12px,env(safe-area-inset-bottom))] pt-[max(12px,env(safe-area-inset-top))] transition-transform duration-300 ease-out ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex shrink-0 items-center justify-between rounded-2xl border border-blue/10 bg-white/90 px-4 py-3 shadow-[0_10px_30px_rgba(43,52,103,0.10)]">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                >
                  <img
                    src={logo}
                    alt=""
                    className="h-11 w-11 object-contain"
                  />
                  <div>
                    <p className="text-xl font-black leading-none text-blue">KASA</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                      Northwestern
                    </p>
                  </div>
                </Link>

                <button
                  ref={closeRef}
                  type="button"
                  onClick={() => closeMenu()}
                  aria-label="Close mobile menu"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-blue/10 bg-white text-blue shadow-sm transition-colors hover:bg-rose-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                >
                  <X aria-hidden="true" className="h-6 w-6" strokeWidth={2.25} />
                </button>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto px-2 py-6">
                <p className="mb-3 px-2 text-xs font-black uppercase tracking-[0.2em] text-rose-500">
                  Explore
                </p>
                <ul className="space-y-2">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    const active = isActive(item.path);

                    return (
                      <li key={item.path}>
                        <Link
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          prefetch="viewport"
                          className={`group flex items-center gap-4 rounded-2xl px-3 py-3.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 ${
                            active
                              ? "bg-blue text-white shadow-[0_12px_28px_rgba(43,52,103,0.22)]"
                              : "text-blue hover:bg-white hover:shadow-sm"
                          }`}
                        >
                          <span
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                              active
                                ? "bg-white/15 text-white"
                                : "bg-blue/[0.08] text-blue group-hover:bg-rose-50 group-hover:text-rose-500"
                            }`}
                          >
                            <Icon
                              aria-hidden="true"
                              className="h-5 w-5"
                              strokeWidth={2.25}
                            />
                          </span>
                          <span className="min-w-0 text-left">
                            <span className="block text-lg font-black leading-tight">
                              {item.label}
                            </span>
                            <span
                              className={`mt-1 block text-xs font-medium ${
                                active ? "text-white/70" : "text-slate-500"
                              }`}
                            >
                              {item.description}
                            </span>
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="shrink-0 rounded-2xl border border-blue/10 bg-white/75 p-4 shadow-[0_8px_24px_rgba(43,52,103,0.08)]">
                <p className="mb-3 text-sm font-semibold text-slate-600">
                  Ready to join the KASA community?
                </p>
                <Link
                  to="/apply"
                  onClick={() => setIsOpen(false)}
                  className="kasa-btn-primary flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-lg font-black text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
                >
                  Apply to KASA
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-5 w-5"
                    strokeWidth={2.5}
                  />
                </Link>
              </div>
            </aside>
          </div>,
          document.body
        )}
    </>
  );
}
