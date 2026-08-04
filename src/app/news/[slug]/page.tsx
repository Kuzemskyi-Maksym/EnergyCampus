import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Eye, Globe2, Send, Camera } from "lucide-react";
import { news } from "@/lib/data";

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  return { title: item ? `${item.title} — ЕнергоКампус` : "Новина — ЕнергоКампус" };
}

export default async function NewsDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  if (!item) notFound();

  const related = news.filter((n) => n.slug !== item.slug && n.category === item.category).slice(0, 3);
  const fallbackRelated = related.length ? related : news.filter((n) => n.slug !== item.slug).slice(0, 3);

  return (
    <article className="container-page py-12 max-w-[760px]">
      <Link href="/news" className="inline-flex items-center gap-1.5 text-[13.5px] font-medium" style={{ color: "var(--color-leaf-dark)" }}>
        <ArrowLeft size={15} /> Усі новини
      </Link>

      <div className="mt-5 flex items-center gap-3 text-[12.5px]" style={{ color: "var(--color-slate-light)" }}>
        <span className="px-2.5 py-1 rounded-full font-medium" style={{ background: "var(--color-leaf-tint)", color: "var(--color-leaf-dark)" }}>{item.category}</span>
        <span>{new Date(item.date).toLocaleDateString("uk-UA", { day: "numeric", month: "long", year: "numeric" })}</span>
        <span>{item.author}</span>
        <span className="inline-flex items-center gap-1"><Eye size={13} />{item.views}</span>
      </div>

      <h1 className="mt-4 font-display font-extrabold text-[28px] md:text-[36px] leading-tight tracking-tight" style={{ color: "var(--color-forest)" }}>
        {item.title}
      </h1>

      <div className="mt-7 h-56 rounded-2xl" style={{ background: "linear-gradient(135deg,#1f9d55,#123522)" }} />

      <div className="mt-8 space-y-4">
        {item.body.map((p, i) => (
          <p key={i} className="text-[15.5px] leading-relaxed" style={{ color: "var(--color-ink)" }}>{p}</p>
        ))}
      </div>

      <div className="mt-9 pt-6 border-t flex items-center gap-3" style={{ borderColor: "var(--color-line)" }}>
        <span className="text-[13px] font-medium" style={{ color: "var(--color-slate)" }}>Поширити:</span>
        <a href="#" aria-label="Telegram" className="h-8 w-8 grid place-items-center rounded-full" style={{ background: "var(--color-leaf-tint)" }}><Send size={14} style={{ color: "var(--color-leaf-dark)" }} /></a>
        <a href="#" aria-label="Facebook" className="h-8 w-8 grid place-items-center rounded-full" style={{ background: "var(--color-leaf-tint)" }}><Globe2 size={14} style={{ color: "var(--color-leaf-dark)" }} /></a>
        <a href="#" aria-label="Instagram" className="h-8 w-8 grid place-items-center rounded-full" style={{ background: "var(--color-leaf-tint)" }}><Camera size={14} style={{ color: "var(--color-leaf-dark)" }} /></a>
      </div>

      {fallbackRelated.length > 0 && (
        <div className="mt-12">
          <h2 className="font-display font-bold text-[18px]" style={{ color: "var(--color-forest)" }}>Схожі новини</h2>
          <div className="mt-4 grid sm:grid-cols-3 gap-4">
            {fallbackRelated.map((n) => (
              <Link key={n.slug} href={`/news/${n.slug}`} className="rounded-xl border p-4 hover:border-leaf transition-colors" style={{ borderColor: "var(--color-line)" }}>
                <div className="text-[12px]" style={{ color: "var(--color-slate-light)" }}>{n.category}</div>
                <div className="mt-1.5 text-[13.5px] font-semibold leading-snug" style={{ color: "var(--color-forest)" }}>{n.title}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
