"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, Thermometer, Lightbulb, SunMedium, MessageCircleWarning, Send } from "lucide-react";
import { site } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Головна" },
  { href: "/news", label: "Новини" },
  { href: "/about", label: "Про нас" },
  { href: "/tips", label: "Поради" },
  { href: "/stats", label: "Статистика" },
  { href: "/contacts", label: "Контакти" },
];

const aboutMega = [
  { href: "/about#udepp", title: "Програма UDEPP", desc: "Досвід стажування в Данії й адаптація під КПІ", icon: SunMedium },
  { href: "/about#roadmap", title: "Дорожня карта", desc: "Чотири етапи впровадження проєкту", icon: Thermometer },
  { href: "/about#team", title: "Команда і партнери", desc: "Хто відповідає за що", icon: Lightbulb },
];

const statsMega = [
  { href: "/stats#audits", title: "Теплова карта корпусів", desc: "Результати тепловізійних обстежень", icon: Thermometer },
  { href: "/stats#dashboard", title: "Заявки з Telegram-бота", desc: `Динаміка звернень до ${site.bot}`, icon: MessageCircleWarning },
  { href: "/stats#corps", title: "Рейтинг по корпусах", desc: "Електроенергія, вода, тепловтрати", icon: Lightbulb },
];

export default function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b border-line" style={{ background: "rgba(251,251,248,0.92)" }}>
      <div className="container-page flex items-center justify-between h-[68px]">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full" style={{ background: "var(--color-leaf-tint)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" stroke="var(--color-leaf)" strokeWidth="1.8" strokeLinecap="round"/>
              <circle cx="12" cy="12" r="4" fill="var(--color-leaf)" />
            </svg>
          </span>
          <span className="font-display font-extrabold text-[17px] tracking-tight" style={{ color: "var(--color-forest)" }}>{site.name}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" onMouseLeave={() => setOpen(null)}>
          {navLinks.map((l) => {
            const mega = l.label === "Про нас" ? aboutMega : l.label === "Статистика" ? statsMega : null;
            return (
              <div key={l.href} className="relative" onMouseEnter={() => setOpen(mega ? l.label : null)}>
                <Link
                  href={l.href}
                  className="flex items-center gap-1 px-3.5 py-2.5 rounded-full text-[14.5px] font-medium hover:bg-leaf-tint transition-colors"
                  style={{ color: "var(--color-ink)" }}
                >
                  {l.label}
                  {mega && <ChevronDown size={14} className="opacity-60" />}
                </Link>
                {mega && open === l.label && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[560px]">
                    <div className="rounded-2xl border border-line bg-white shadow-xl p-3 grid grid-cols-3 gap-2">
                      {mega.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="group rounded-xl p-3 hover:bg-leaf-tint-2 transition-colors"
                        >
                          <item.icon size={18} style={{ color: "var(--color-leaf)" }} />
                          <div className="mt-2 text-[13.5px] font-semibold" style={{ color: "var(--color-forest)" }}>{item.title}</div>
                          <div className="mt-1 text-[12px] leading-snug" style={{ color: "var(--color-slate)" }}>{item.desc}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <a
            href={site.botUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-[14px] font-semibold text-white transition-transform hover:scale-[1.03]"
            style={{ background: "var(--color-leaf)" }}
          >
            <Send size={15} /> Повідомити про проблему
          </a>
        </div>

        <button
          className="lg:hidden p-2 rounded-lg"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Закрити меню" : "Відкрити меню"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-line bg-white">
          <div className="container-page py-3 flex flex-col">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="py-3 border-b border-line text-[15px] font-medium">
                {l.label}
              </Link>
            ))}
            <a href={site.botUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-white font-semibold" style={{ background: "var(--color-leaf)" }}>
              <Send size={16} /> Повідомити про проблему
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
