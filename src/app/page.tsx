"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Send, Lightbulb, Leaf, PiggyBank, Sprout, Users2, QrCode, ArrowUpRight } from "lucide-react";
import Teapot from "@/components/Teapot";
import IdeaModal from "@/components/IdeaModal";
import { values, homeStats, problemTypes, news, site } from "@/lib/data";

const valueIcons = [Leaf, PiggyBank, Sprout, Users2];

export default function Home() {
  const [ideaOpen, setIdeaOpen] = useState(false);

  return (
    <>
      <IdeaModal open={ideaOpen} onClose={() => setIdeaOpen(false)} />

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #f3faf5 0%, #fbfbf8 65%)" }}>
        <div className="container-page py-14 md:py-20 grid md:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
          <div>
            <span
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold"
              style={{ background: "var(--color-leaf-tint)", color: "var(--color-leaf-dark)" }}
            >
              UDEPP × КПІ ім. Ігоря Сікорського
            </span>
            <h1 className="mt-5 font-display font-extrabold leading-[1.05] tracking-tight text-[38px] md:text-[54px]" style={{ color: "var(--color-forest)" }}>
              Енергоефективність починається з нас
            </h1>
            <p className="mt-5 text-[16.5px] leading-relaxed max-w-[520px]" style={{ color: "var(--color-slate)" }}>
              Стратегія реалізації ініціатив з енергоефективності в КПІ на базі досвіду програми UDEPP —
              від студентських енергоаудитів до впровадження відновлюваних джерел енергії.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => setIdeaOpen(true)}
                className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-white font-semibold text-[14.5px] transition-transform hover:scale-[1.02]"
                style={{ background: "var(--color-leaf)" }}
              >
                <Lightbulb size={17} /> Запропонувати ідею
              </button>
              <a
                href={site.botUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 font-semibold text-[14.5px] border transition-colors"
                style={{ borderColor: "var(--color-line)", color: "var(--color-forest)" }}
              >
                <Send size={16} /> Повідомити про тепловтрату
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-[240px] md:w-[280px]">
            <Teapot className="w-full" />
          </div>
        </div>

        <div className="border-t" style={{ borderColor: "var(--color-line)" }}>
          <div className="container-page py-7 grid grid-cols-2 md:grid-cols-4 gap-6">
            {homeStats.map((s) => (
              <div key={s.label}>
                <div className="font-display font-extrabold text-[26px]" style={{ color: "var(--color-forest)" }}>{s.value}</div>
                <div className="mt-1 text-[13px] leading-snug" style={{ color: "var(--color-slate)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REPORT + IDEA PANELS */}
      <section className="container-page py-14 grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl p-7 md:p-8" style={{ background: "var(--color-forest)" }}>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
            <Send size={18} className="text-white" />
          </span>
          <h3 className="mt-4 font-display font-bold text-[20px] text-white">Повідомити про проблему</h3>
          <p className="mt-2 text-[14px] text-white/70 leading-relaxed">
            Приймаємо повідомлення через Telegram-бота {site.bot}: несправне освітлення, проблеми з опаленням,
            тепловтрати, протікання води, відкриті вікна в опалювальний сезон.
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {problemTypes.slice(0, 4).map((p) => (
              <li key={p} className="text-[12px] px-2.5 py-1 rounded-full bg-white/10 text-white/80">{p}</li>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-3">
            <a href={site.botUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-[14px] font-semibold" style={{ background: "var(--color-leaf)", color: "white" }}>
              <Send size={15} /> Відкрити бота
            </a>
            <Link href="/report" className="inline-flex items-center gap-1.5 text-[13.5px] text-white/70 hover:text-white">
              Немає Telegram? Заповніть форму <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <div className="rounded-3xl p-7 md:p-8 border" style={{ borderColor: "var(--color-line)" }}>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full" style={{ background: "var(--color-leaf-tint)" }}>
            <QrCode size={18} style={{ color: "var(--color-leaf)" }} />
          </span>
          <h3 className="mt-4 font-display font-bold text-[20px]" style={{ color: "var(--color-forest)" }}>Банк ідей економії</h3>
          <p className="mt-2 text-[14px] leading-relaxed" style={{ color: "var(--color-slate)" }}>
            Це цифровий формат, що доповнює фізичні «Скриньки пропозицій» у корпусах. Опиши своє інноваційне
            рішення з оптимізації енергії — найкращі ідеї потрапляють у план впровадження.
          </p>
          <button
            onClick={() => setIdeaOpen(true)}
            className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-[14px] font-semibold border"
            style={{ borderColor: "var(--color-leaf)", color: "var(--color-leaf-dark)" }}
          >
            <Lightbulb size={15} /> Подати ідею
          </button>
        </div>
      </section>

      {/* VALUES */}
      <section className="container-page py-6 pb-16">
        <h2 className="font-display font-extrabold text-[26px] tracking-tight" style={{ color: "var(--color-forest)" }}>Наші цінності</h2>
        <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => {
            const Icon = valueIcons[i];
            return (
              <div key={v.title} className="rounded-2xl p-6 bg-white border" style={{ borderColor: "var(--color-line)" }}>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full" style={{ background: "var(--color-leaf-tint)" }}>
                  <Icon size={18} style={{ color: "var(--color-leaf)" }} />
                </span>
                <h3 className="mt-4 font-display font-bold text-[15.5px]" style={{ color: "var(--color-forest)" }}>{v.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed" style={{ color: "var(--color-slate)" }}>{v.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* NEWS PREVIEW */}
      <section className="py-16" style={{ background: "var(--color-leaf-tint-2)" }}>
        <div className="container-page">
          <div className="flex items-end justify-between">
            <h2 className="font-display font-extrabold text-[26px] tracking-tight" style={{ color: "var(--color-forest)" }}>Останні новини</h2>
            <Link href="/news" className="text-[13.5px] font-semibold inline-flex items-center gap-1" style={{ color: "var(--color-leaf-dark)" }}>
              Усі новини <ArrowRight size={14} />
            </Link>
          </div>
          <div className="mt-7 grid md:grid-cols-3 gap-5">
            {news.slice(0, 3).map((n, i) => (
              <Link key={n.slug} href={`/news/${n.slug}`} className="group rounded-2xl overflow-hidden bg-white border" style={{ borderColor: "var(--color-line)" }}>
                <div
                  className="h-36 relative"
                  style={{ background: [
                    "linear-gradient(135deg,#1f9d55,#123522)",
                    "linear-gradient(135deg,#f5b94a,#e8734a)",
                    "linear-gradient(135deg,#2aa9e0,#123522)",
                  ][i % 3] }}
                >
                  <span className="absolute left-3 top-3 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/90" style={{ color: "var(--color-forest)" }}>{n.category}</span>
                </div>
                <div className="p-5">
                  <div className="text-[12px]" style={{ color: "var(--color-slate-light)" }}>
                    {new Date(n.date).toLocaleDateString("uk-UA", { day: "numeric", month: "long", year: "numeric" })}
                  </div>
                  <h3 className="mt-2 font-display font-bold text-[15.5px] leading-snug group-hover:underline" style={{ color: "var(--color-forest)" }}>{n.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed line-clamp-2" style={{ color: "var(--color-slate)" }}>{n.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-16">
        <div className="rounded-3xl p-9 md:p-12 grid md:grid-cols-[1fr_auto] items-center gap-6" style={{ background: "var(--color-forest)" }}>
          <div>
            <h2 className="font-display font-extrabold text-[24px] md:text-[28px] text-white tracking-tight">
              Разом робимо кампус енергоефективним
            </h2>
            <p className="mt-2 text-[14.5px] text-white/70 max-w-[440px]">
              Кожна ідея та кожне повідомлення про проблему наближають нас до наступного етапу дорожньої карти.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => setIdeaOpen(true)} className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-[14px] font-semibold" style={{ background: "var(--color-leaf)", color: "white" }}>
              Долучитися
            </button>
            <Link href="/about" className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-[14px] font-semibold border border-white/25 text-white">
              Про нас
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
