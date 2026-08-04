"use client";

import { useState } from "react";
import { Zap, Droplet, Flame, Leaf, CheckCircle2, XCircle, FileText, Video, Image as ImageIcon, BookOpen } from "lucide-react";
import { tipsCategories, myths } from "@/lib/data";

const icons = { zap: Zap, droplet: Droplet, flame: Flame, leaf: Leaf } as const;

const materials = [
  { title: "Презентація: основи енергоменеджменту", type: "Презентація", icon: FileText },
  { title: "Відеолекція UDEPP: досвід Данії", type: "Відео", icon: Video },
  { title: "Інфографіка: тепловтрати будівлі", type: "Інфографіка", icon: ImageIcon },
  { title: "Методичка для старост потоків", type: "Посібник", icon: BookOpen },
];

export default function TipsPage() {
  const [active, setActive] = useState(tipsCategories[0].id);
  const activeCat = tipsCategories.find((c) => c.id === active)!;
  const ActiveIcon = icons[activeCat.icon as keyof typeof icons];

  return (
    <>
      <section className="border-b" style={{ borderColor: "var(--color-line)", background: "var(--color-leaf-tint-2)" }}>
        <div className="container-page py-12 md:py-14">
          <h1 className="font-display font-extrabold text-[32px] md:text-[42px] tracking-tight" style={{ color: "var(--color-forest)" }}>Поради</h1>
          <p className="mt-2 text-[15px] max-w-[560px]" style={{ color: "var(--color-slate)" }}>
            База знань з енергоефективності: практичні поради, спростування поширених міфів і навчальні матеріали.
          </p>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="flex flex-wrap gap-2">
          {tipsCategories.map((c) => {
            const Icon = icons[c.icon as keyof typeof icons];
            const isActive = c.id === active;
            return (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[13.5px] font-medium border transition-colors"
                style={isActive ? { background: "var(--color-leaf)", borderColor: "var(--color-leaf)", color: "white" } : { borderColor: "var(--color-line)", color: "var(--color-forest)" }}
              >
                <Icon size={15} /> {c.title}
              </button>
            );
          })}
        </div>

        <div className="mt-8 rounded-3xl border p-7 md:p-9" style={{ borderColor: "var(--color-line)" }}>
          <div className="flex items-center gap-3">
            <span className="h-11 w-11 grid place-items-center rounded-full" style={{ background: "var(--color-leaf-tint)" }}>
              <ActiveIcon size={20} style={{ color: "var(--color-leaf)" }} />
            </span>
            <h2 className="font-display font-bold text-[20px]" style={{ color: "var(--color-forest)" }}>{activeCat.title}</h2>
          </div>
          <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {activeCat.items.map((it) => (
              <li key={it} className="flex gap-2.5 text-[14.5px] leading-relaxed" style={{ color: "var(--color-ink)" }}>
                <CheckCircle2 size={17} className="shrink-0 mt-0.5" style={{ color: "var(--color-leaf)" }} />
                {it}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* MYTHS */}
      <section className="py-14" style={{ background: "var(--color-forest)" }}>
        <div className="container-page">
          <h2 className="font-display font-extrabold text-[24px] tracking-tight text-white">Міфи про енергозбереження</h2>
          <div className="mt-7 grid md:grid-cols-3 gap-5">
            {myths.map((m) => (
              <div key={m.myth} className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <div className="flex items-center gap-2 text-[13px] font-semibold text-white/50">
                  <XCircle size={16} style={{ color: "var(--color-clay)" }} /> МІФ
                </div>
                <p className="mt-2 text-[14.5px] font-medium text-white">«{m.myth}»</p>
                <div className="mt-4 flex items-center gap-2 text-[13px] font-semibold" style={{ color: "var(--color-leaf)" }}>
                  <CheckCircle2 size={16} /> ФАКТ
                </div>
                <p className="mt-2 text-[13.5px] text-white/70 leading-relaxed">{m.fact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section id="materials" className="container-page py-14">
        <h2 className="font-display font-extrabold text-[24px] tracking-tight" style={{ color: "var(--color-forest)" }}>Навчальні матеріали</h2>
        <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {materials.map((m) => (
            <div key={m.title} className="rounded-2xl border p-6" style={{ borderColor: "var(--color-line)" }}>
              <m.icon size={20} style={{ color: "var(--color-leaf)" }} />
              <div className="mt-3 text-[12px] font-semibold uppercase tracking-wide" style={{ color: "var(--color-slate-light)" }}>{m.type}</div>
              <h3 className="mt-1.5 font-display font-bold text-[14.5px] leading-snug" style={{ color: "var(--color-forest)" }}>{m.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
