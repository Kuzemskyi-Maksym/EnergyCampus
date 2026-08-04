"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Eye } from "lucide-react";
import { news, newsCategories } from "@/lib/data";

const gradients = [
  "linear-gradient(135deg,#1f9d55,#123522)",
  "linear-gradient(135deg,#f5b94a,#e8734a)",
  "linear-gradient(135deg,#2aa9e0,#123522)",
];

export default function NewsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return news.filter((n) => {
      const matchesCat = !cat || n.category === cat;
      const matchesQ = !q || (n.title + n.excerpt).toLowerCase().includes(q.toLowerCase());
      return matchesCat && matchesQ;
    });
  }, [q, cat]);

  return (
    <>
      <section className="border-b" style={{ borderColor: "var(--color-line)", background: "var(--color-leaf-tint-2)" }}>
        <div className="container-page py-12 md:py-14">
          <h1 className="font-display font-extrabold text-[32px] md:text-[42px] tracking-tight" style={{ color: "var(--color-forest)" }}>Новини</h1>
          <p className="mt-2 text-[15px]" style={{ color: "var(--color-slate)" }}>Усі події, оновлення та результати, що стосуються енергоефективності університету.</p>

          <div className="mt-7 flex flex-col md:flex-row gap-3 md:items-center">
            <div className="relative flex-1 max-w-[360px]">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: "var(--color-slate-light)" }} />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Пошук за назвою чи ключовим словом"
                className="w-full rounded-full border pl-10 pr-4 py-2.5 text-[13.5px] bg-white outline-none focus:border-leaf"
                style={{ borderColor: "var(--color-line)" }}
              />
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={() => setCat(null)}
              className="text-[12.5px] font-medium px-3.5 py-1.5 rounded-full border transition-colors"
              style={cat === null ? { background: "var(--color-leaf)", color: "white", borderColor: "var(--color-leaf)" } : { borderColor: "var(--color-line)", color: "var(--color-forest)" }}
            >
              Усі
            </button>
            {newsCategories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className="text-[12.5px] font-medium px-3.5 py-1.5 rounded-full border transition-colors"
                style={cat === c ? { background: "var(--color-leaf)", color: "white", borderColor: "var(--color-leaf)" } : { borderColor: "var(--color-line)", color: "var(--color-forest)" }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        {filtered.length === 0 ? (
          <div className="py-16 text-center" style={{ color: "var(--color-slate)" }}>
            Нічого не знайдено. Спробуйте інший запит або категорію.
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-5">
            {filtered.map((n, i) => (
              <Link key={n.slug} href={`/news/${n.slug}`} className="group rounded-2xl overflow-hidden bg-white border" style={{ borderColor: "var(--color-line)" }}>
                <div className="h-36 relative" style={{ background: gradients[i % 3] }}>
                  <span className="absolute left-3 top-3 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/90" style={{ color: "var(--color-forest)" }}>{n.category}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between text-[12px]" style={{ color: "var(--color-slate-light)" }}>
                    <span>{new Date(n.date).toLocaleDateString("uk-UA", { day: "numeric", month: "long", year: "numeric" })}</span>
                    <span className="inline-flex items-center gap-1"><Eye size={12} />{n.views}</span>
                  </div>
                  <h3 className="mt-2 font-display font-bold text-[15.5px] leading-snug group-hover:underline" style={{ color: "var(--color-forest)" }}>{n.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed line-clamp-2" style={{ color: "var(--color-slate)" }}>{n.excerpt}</p>
                  <div className="mt-3 text-[12px]" style={{ color: "var(--color-slate-light)" }}>{n.author}</div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
