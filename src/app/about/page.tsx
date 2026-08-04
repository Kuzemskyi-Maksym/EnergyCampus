import type { Metadata } from "next";
import { Target, Compass, SunMedium, Users2, Handshake, FileText } from "lucide-react";
import Teapot from "@/components/Teapot";
import { roadmap, team, partners } from "@/lib/data";

export const metadata: Metadata = { title: "Про нас — ЕнергоКампус" };

const anchors = [
  { href: "#project", label: "Про проєкт" },
  { href: "#mission", label: "Місія і мета" },
  { href: "#udepp", label: "UDEPP" },
  { href: "#roadmap", label: "Дорожня карта" },
  { href: "#team", label: "Команда" },
  { href: "#documents", label: "Партнери й документи" },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b" style={{ borderColor: "var(--color-line)", background: "var(--color-leaf-tint-2)" }}>
        <div className="container-page py-12 md:py-16">
          <h1 className="font-display font-extrabold text-[32px] md:text-[42px] tracking-tight" style={{ color: "var(--color-forest)" }}>Про нас</h1>
          <p className="mt-3 text-[15.5px] max-w-[620px]" style={{ color: "var(--color-slate)" }}>
            Історія, місія та команда проєкту «ЕнергоКампус» — студентської ініціативи з енергоефективності КПІ.
          </p>
          <nav className="mt-7 flex flex-wrap gap-2">
            {anchors.map((a) => (
              <a key={a.href} href={a.href} className="text-[13px] font-medium px-3.5 py-2 rounded-full bg-white border" style={{ borderColor: "var(--color-line)", color: "var(--color-forest)" }}>
                {a.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* PROJECT */}
      <section id="project" className="container-page py-14 grid md:grid-cols-[1fr_260px] gap-10 items-start">
        <div>
          <div className="text-[13px] font-semibold uppercase tracking-wide" style={{ color: "var(--color-leaf-dark)" }}>Про проєкт</div>
          <h2 className="mt-2 font-display font-extrabold text-[26px] tracking-tight" style={{ color: "var(--color-forest)" }}>Від фізичних скриньок до цифрової платформи</h2>
          <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "var(--color-slate)" }}>
            Проєкт виник із простої проблеми: тепловтрати, перевитрати електроенергії та води в навчальних
            корпусах і гуртожитках рідко доходили до тих, хто міг би їх усунути. «Скриньки пропозицій» працювали,
            але повільно й без зворотного зв&apos;язку.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "var(--color-slate)" }}>
            ЕнергоКампус об&apos;єднує Telegram-бота для оперативних звернень, банк ідей для пропозицій студентів
            і відкриту статистику для прозорого моніторингу — актуальність теми лише зростає разом із вартістю
            ресурсів і потребою університету в енергонезалежності.
          </p>
        </div>
        <Teapot className="w-[200px] mx-auto" mood="calm" />
      </section>

      {/* MISSION */}
      <section id="mission" className="py-14" style={{ background: "var(--color-leaf-tint-2)" }}>
        <div className="container-page grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white p-7 border" style={{ borderColor: "var(--color-line)" }}>
            <Compass size={20} style={{ color: "var(--color-leaf)" }} />
            <h3 className="mt-3 font-display font-bold text-[18px]" style={{ color: "var(--color-forest)" }}>Місія</h3>
            <p className="mt-2 text-[14px] leading-relaxed" style={{ color: "var(--color-slate)" }}>
              Формувати культуру енергоефективності серед студентів, викладачів та працівників університету —
              так, щоб ощадливе ставлення до ресурсів стало звичкою, а не разовою акцією.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-7 border" style={{ borderColor: "var(--color-line)" }}>
            <Target size={20} style={{ color: "var(--color-leaf)" }} />
            <h3 className="mt-3 font-display font-bold text-[18px]" style={{ color: "var(--color-forest)" }}>Мета проєкту</h3>
            <ul className="mt-3 space-y-2 text-[14px]" style={{ color: "var(--color-slate)" }}>
              {["Зменшення енергоспоживання", "Цифровізація процесів енергоменеджменту", "Популяризація енергоефективності", "Впровадження європейського досвіду", "Залучення студентської молоді"].map((g) => (
                <li key={g} className="flex gap-2"><span style={{ color: "var(--color-leaf)" }}>—</span>{g}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* UDEPP */}
      <section id="udepp" className="container-page py-14 grid md:grid-cols-[220px_1fr] gap-8 items-start">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl" style={{ background: "var(--color-leaf-tint)" }}>
          <SunMedium size={26} style={{ color: "var(--color-leaf)" }} />
        </span>
        <div>
          <h2 className="font-display font-extrabold text-[24px] tracking-tight" style={{ color: "var(--color-forest)" }}>Програма UDEPP</h2>
          <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "var(--color-slate)" }}>
            Навесні команда проєкту пройшла стажування в Данії за програмою UDEPP, вивчаючи практики
            енергоменеджменту у партнерстві з DTU та DEA. Європейський підхід — прозорий моніторинг,
            залучення студентів і поступова цифровізація — адаптовано під реалії КПІ.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {partners.map((p) => (
              <span key={p} className="text-[12.5px] px-3 py-1.5 rounded-full border" style={{ borderColor: "var(--color-line)", color: "var(--color-forest)" }}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="py-14" style={{ background: "var(--color-forest)" }}>
        <div className="container-page">
          <h2 className="font-display font-extrabold text-[26px] tracking-tight text-white">Дорожня карта впровадження</h2>
          <p className="mt-2 text-[14px] text-white/60 max-w-[520px]">Чотири послідовні етапи — кожен наступний спирається на результати попереднього.</p>
          <div className="mt-9 grid md:grid-cols-4 gap-5">
            {roadmap.map((r) => (
              <div key={r.stage} className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <span className="font-display font-extrabold text-[13px] px-2.5 py-1 rounded-full" style={{ background: "var(--color-leaf)", color: "white" }}>
                  Етап {r.stage}
                </span>
                <h3 className="mt-4 font-display font-bold text-[17px] text-white">{r.title}</h3>
                <ul className="mt-3 space-y-2">
                  {r.items.map((it) => (
                    <li key={it} className="text-[13px] text-white/65 leading-snug">{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="container-page py-14">
        <div className="flex items-center gap-2.5">
          <Users2 size={20} style={{ color: "var(--color-leaf)" }} />
          <h2 className="font-display font-extrabold text-[26px] tracking-tight" style={{ color: "var(--color-forest)" }}>Команда</h2>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((m) => (
            <div key={m.name} className="rounded-2xl border p-6" style={{ borderColor: "var(--color-line)" }}>
              <div className="h-12 w-12 rounded-full grid place-items-center font-display font-bold text-[15px]" style={{ background: "var(--color-leaf-tint)", color: "var(--color-leaf-dark)" }}>
                {m.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h3 className="mt-3.5 font-display font-bold text-[14.5px]" style={{ color: "var(--color-forest)" }}>{m.name}</h3>
              <div className="text-[12.5px] font-medium" style={{ color: "var(--color-leaf-dark)" }}>{m.role}</div>
              <p className="mt-2 text-[13px] leading-relaxed" style={{ color: "var(--color-slate)" }}>{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNERS + DOCS */}
      <section id="documents" className="py-14" style={{ background: "var(--color-leaf-tint-2)" }}>
        <div className="container-page grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white p-7 border" style={{ borderColor: "var(--color-line)" }}>
            <Handshake size={20} style={{ color: "var(--color-leaf)" }} />
            <h3 className="mt-3 font-display font-bold text-[17px]" style={{ color: "var(--color-forest)" }}>Партнери</h3>
            <ul className="mt-3 space-y-2 text-[14px]" style={{ color: "var(--color-slate)" }}>
              {partners.map((p) => <li key={p} className="flex gap-2"><span style={{ color: "var(--color-leaf)" }}>—</span>{p}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-7 border" style={{ borderColor: "var(--color-line)" }}>
            <FileText size={20} style={{ color: "var(--color-leaf)" }} />
            <h3 className="mt-3 font-display font-bold text-[17px]" style={{ color: "var(--color-forest)" }}>Документи</h3>
            <ul className="mt-3 space-y-2 text-[14px]" style={{ color: "var(--color-slate)" }}>
              {["Нормативно-правові акти України", "Європейські директиви", "Державні стандарти", "Дорожня карта та звіти КПІ"].map((d) => (
                <li key={d} className="flex gap-2"><span style={{ color: "var(--color-leaf)" }}>—</span>{d}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
