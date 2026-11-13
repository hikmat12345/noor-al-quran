"use client";

import { useEffect, useState } from "react";
import { waLink } from "@/lib/site";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "./Icons";

const links = [
  { href: "#courses", label: "Courses" },
  { href: "#why-us", label: "Why Us" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""} ${open ? "nav-open" : ""}`}>
      <div className="container nav-inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden>
            <svg viewBox="0 0 48 48" width="40" height="40">
              <path d="M24 3 29 9h8v8l6 7-6 7v8h-8l-5 6-5-6h-8v-8l-6-7 6-7V9h8Z" fill="var(--green)" />
              <path d="M24 9.5 27.6 14H33v5.4L37.5 24 33 28.6V34h-5.4L24 38.5 20.4 34H15v-5.4L10.5 24 15 19.4V14h5.4Z" fill="none" stroke="var(--gold)" strokeWidth="1.4" />
              <path d="M15 28c3-1 6-1 9 1 3-2 6-2 9-1v-8c-3-1-6-1-9 1-3-2-6-2-9-1Z" fill="var(--gold)" />
            </svg>
          </span>
          <span className="brand-text">
            <strong>Noor Al-Quran</strong>
            <small>Online Academy</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-sm nav-cta">
            <WhatsAppIcon width={18} height={18} /> Free Trial
          </a>
        </nav>

        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
}
