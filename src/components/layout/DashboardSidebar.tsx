"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarLinks = [
  { href: "#", icon: "dashboard", label: "Command Center" },
  { href: "#", icon: "language", label: "Trade Operations" },
  { href: "#", icon: "school", label: "Academy Hub" },
  { href: "#", icon: "conveyor_belt", label: "Logistics" },
  { href: "#", icon: "bar_chart", label: "Analytics" },
  { href: "#", icon: "settings", label: "Settings" },
];

interface DashboardSidebarProps {
  activeIndex?: number;
  brandLabel?: string;
}

export default function DashboardSidebar({ activeIndex = 0, brandLabel = "Global Operations" }: DashboardSidebarProps) {
  return (
    <aside className="hidden md:flex flex-col h-screen w-64 bg-surface-container-lowest border-r border-outline-variant/20 sticky top-0 z-50 py-8 shrink-0">
      {/* Brand */}
      <div className="px-6 mb-12">
        <Link href="/" className="block mb-2 hover:opacity-80 transition-opacity">
          <Image 
            src="/images/merkanto_logo_new.png" 
            alt="Merkanto Logo" 
            width={280} 
            height={80} 
            className="h-20 w-auto object-contain"
          />
        </Link>
        <div
          className="text-on-surface-variant uppercase tracking-widest"
          style={{ fontFamily: "Geist, monospace", fontSize: "11px" }}
        >
          {brandLabel}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {sidebarLinks.map((link, i) => {
          const isActive = i === activeIndex;
          return (
            <Link
              key={link.label}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 transition-all duration-200 ${
                isActive
                  ? "bg-secondary-container/30 text-primary border-r-2 border-primary translate-x-1"
                  : "text-on-surface-variant hover:bg-surface-container-highest/50 hover:text-on-surface"
              }`}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
                {link.icon}
              </span>
              <span style={{ fontFamily: "Geist, monospace", fontSize: "12px", letterSpacing: "0.05em" }}>
                {link.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* New Venture CTA */}
      <div className="px-6 mt-6">
        <button className="w-full bg-primary text-on-primary font-bold px-4 py-3 flex items-center justify-center gap-2 mb-4 hover:brightness-110 transition-all">
          <span className="material-symbols-outlined" style={{ fontSize: "20px", fontVariationSettings: "'FILL' 1" }}>
            add
          </span>
          <span style={{ fontFamily: "Geist, monospace", fontSize: "12px", letterSpacing: "0.05em" }}>
            New Venture
          </span>
        </button>
      </div>

      {/* Footer Links */}
      <div className="border-t border-outline-variant/10 pt-4 mt-2">
        {[
          { icon: "help", label: "Support" },
          { icon: "logout", label: "Sign Out" },
        ].map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-3 text-on-surface-variant px-4 py-2 hover:text-on-surface transition-colors w-full text-left"
          >
            <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
              {item.icon}
            </span>
            <span className="uppercase" style={{ fontFamily: "Geist, monospace", fontSize: "12px", letterSpacing: "0.05em" }}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </aside>
  );
}
