import Link from "next/link";
import { Send, Camera, Globe2, Mail } from "lucide-react";
import { site } from "@/lib/data";

const columns = [
  {
    title: "Навігація",
    links: [
      { href: "/", label: "Головна" },
      { href: "/news", label: "Новини" },
      { href: "/about", label: "Про нас" },
      { href: "/tips", label: "Поради" },
      { href: "/stats", label: "Статистика" },
      { href: "/contacts", label: "Контакти" },
    ],
  },
  {
    title: "Корисне",
    links: [
      { href: "/tips#materials", label: "Матеріали" },
      { href: "/stats#audits", label: "Енергоаудит" },
      { href: "/about#documents", label: "Документи" },
      { href: "/contacts#faq", label: "FAQ" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="text-white" style={{ background: "var(--color-forest)" }}>
      <div className="container-page py-14 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="4" fill="var(--color-leaf)" />
              </svg>
            </span>
            <span className="font-display font-extrabold text-[17px]">{site.name}</span>
          </div>
          <p className="mt-3 text-[13.5px] leading-relaxed text-white/65 max-w-[260px]">
            Інформаційна кампанія з енергоефективності серед студентів і співробітників КПІ ім. Ігоря Сікорського.
          </p>
          <div className="mt-5 flex gap-2.5">
            <a href={site.botUrl} target="_blank" rel="noreferrer" aria-label="Telegram" className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"><Send size={16} /></a>
            <a href="#" aria-label="Instagram" className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"><Camera size={16} /></a>
            <a href="#" aria-label="Facebook" className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"><Globe2 size={16} /></a>
            <a href={`mailto:${site.email}`} aria-label="Email" className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"><Mail size={16} /></a>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <div className="text-[13px] font-semibold uppercase tracking-wide text-white/50">{col.title}</div>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.href}><Link href={l.href} className="text-[14px] text-white/80 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <div className="text-[13px] font-semibold uppercase tracking-wide text-white/50">Контакти</div>
          <ul className="mt-4 space-y-2.5 text-[14px] text-white/80">
            <li>{site.email}</li>
            <li>{site.telegramChannel}</li>
            <li className="text-white/60">{site.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 text-[12.5px] text-white/50">
          © 2026 {site.name}. Усі права захищені. Проєкт реалізується на базі досвіду програми UDEPP.
        </div>
      </div>
    </footer>
  );
}
