"use client";

import { Zap, Leaf, Users2, Thermometer, ClipboardCheck } from "lucide-react";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { homeStats, consumptionSeries, corpsStats, achievements } from "@/lib/data";

const ratingColor: Record<string, string> = {
  A: "var(--color-leaf)",
  B: "var(--color-sun)",
  C: "var(--color-clay)",
};

export default function StatsPage() {
  return (
    <>
      <section className="border-b" style={{ borderColor: "var(--color-line)", background: "var(--color-leaf-tint-2)" }}>
        <div className="container-page py-12 md:py-14">
          <h1 className="font-display font-extrabold text-[32px] md:text-[42px] tracking-tight" style={{ color: "var(--color-forest)" }}>Статистика</h1>
          <p className="mt-2 text-[15px] max-w-[600px]" style={{ color: "var(--color-slate)" }}>
            Відкрита аналітика діяльності проєкту: результати студентських енергоаудитів, дані з Telegram-бота
            та динаміка вирішення проблем по корпусах. Наведені цифри — орієнтовні заглушки для макета.
          </p>
        </div>
      </section>

      {/* MAIN INDICATORS */}
      <section className="container-page py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {homeStats.map((s) => (
            <div key={s.label} className="rounded-2xl border p-6" style={{ borderColor: "var(--color-line)" }}>
              <div className="font-display font-extrabold text-[28px]" style={{ color: "var(--color-forest)" }}>{s.value}</div>
              <div className="mt-1 text-[13px] leading-snug" style={{ color: "var(--color-slate)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DASHBOARD CHARTS */}
      <section id="dashboard" className="container-page pb-14 grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border p-6" style={{ borderColor: "var(--color-line)" }}>
          <div className="flex items-center gap-2">
            <Zap size={16} style={{ color: "var(--color-leaf)" }} />
            <h3 className="font-display font-bold text-[15px]" style={{ color: "var(--color-forest)" }}>Споживання електроенергії та води</h3>
          </div>
          <div className="mt-4 h-56">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={consumptionSeries}>
                <defs>
                  <linearGradient id="elec" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1f9d55" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#1f9d55" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="wat" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2aa9e0" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#2aa9e0" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} stroke="#e3ebe4" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#8a988f" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12, fill: "#8a988f" }} axisLine={false} tickLine={false} width={30} />
                <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e3ebe4", fontSize: 12.5 }} />
                <Area type="monotone" dataKey="electricity" stroke="#1f9d55" fill="url(#elec)" strokeWidth={2} name="Електроенергія" />
                <Area type="monotone" dataKey="water" stroke="#2aa9e0" fill="url(#wat)" strokeWidth={2} name="Вода" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl border p-6" style={{ borderColor: "var(--color-line)" }}>
          <div className="flex items-center gap-2">
            <Users2 size={16} style={{ color: "var(--color-leaf)" }} />
            <h3 className="font-display font-bold text-[15px]" style={{ color: "var(--color-forest)" }}>Оброблено заявок з Telegram-бота</h3>
          </div>
          <div className="mt-4 h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={consumptionSeries}>
                <CartesianGrid vertical={false} stroke="#e3ebe4" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#8a988f" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12, fill: "#8a988f" }} axisLine={false} tickLine={false} width={30} />
                <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e3ebe4", fontSize: 12.5 }} />
                <Bar dataKey="requests" fill="#1f9d55" radius={[6, 6, 0, 0]} name="Заявок" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* CORPS TABLE */}
      <section id="corps" className="container-page pb-14">
        <div className="flex items-center gap-2.5">
          <Thermometer size={18} style={{ color: "var(--color-leaf)" }} />
          <h2 className="font-display font-extrabold text-[22px] tracking-tight" style={{ color: "var(--color-forest)" }}>Статистика за корпусами</h2>
        </div>
        <div className="mt-6 overflow-x-auto rounded-2xl border" style={{ borderColor: "var(--color-line)" }}>
          <table className="w-full text-[13.5px]">
            <thead>
              <tr style={{ background: "var(--color-leaf-tint-2)" }}>
                {["Корпус", "Електроенергія, %", "Вода, %", "Тепловтрати", "Рейтинг"].map((h) => (
                  <th key={h} className="text-left font-semibold px-5 py-3" style={{ color: "var(--color-forest)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {corpsStats.map((c) => (
                <tr key={c.corp} className="border-t" style={{ borderColor: "var(--color-line)" }}>
                  <td className="px-5 py-3 font-medium" style={{ color: "var(--color-ink)" }}>{c.corp}</td>
                  <td className="px-5 py-3" style={{ color: "var(--color-slate)" }}>{c.electricity}</td>
                  <td className="px-5 py-3" style={{ color: "var(--color-slate)" }}>{c.water}</td>
                  <td className="px-5 py-3" style={{ color: "var(--color-slate)" }}>{c.heatLoss}</td>
                  <td className="px-5 py-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full text-[12px] font-bold text-white" style={{ background: ratingColor[c.rating] }}>
                      {c.rating}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* AUDITS */}
      <section id="audits" className="py-14" style={{ background: "var(--color-leaf-tint-2)" }}>
        <div className="container-page grid md:grid-cols-[1fr_1fr] gap-8 items-center">
          <div>
            <div className="flex items-center gap-2.5">
              <ClipboardCheck size={18} style={{ color: "var(--color-leaf)" }} />
              <h2 className="font-display font-extrabold text-[22px] tracking-tight" style={{ color: "var(--color-forest)" }}>Енергоаудити</h2>
            </div>
            <p className="mt-3 text-[14.5px] leading-relaxed" style={{ color: "var(--color-slate)" }}>
              Студентська команда енергоаудиторів проводить тепловізійні обстеження корпусів і гуртожитків,
              фіксує зони тепловтрат і формує рекомендації щодо модернізації. Статус робіт публікується тут
              після кожного циклу перевірок.
            </p>
            <button className="mt-5 inline-flex items-center gap-2 rounded-full px-5 py-3 text-[13.5px] font-semibold text-white" style={{ background: "var(--color-leaf)" }}>
              Доєднатися до команди аудиторів
            </button>
          </div>
          <div className="rounded-2xl overflow-hidden h-52" style={{ background: "linear-gradient(90deg,#2aa9e0 0%, #1f9d55 45%, #f5b94a 75%, #e8734a 100%)" }}>
            <div className="h-full w-full grid place-items-center text-white/90 text-[13px] font-medium">Теплова карта фасаду — приклад візуалізації</div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="container-page py-14">
        <div className="flex items-center gap-2.5">
          <Leaf size={18} style={{ color: "var(--color-leaf)" }} />
          <h2 className="font-display font-extrabold text-[22px] tracking-tight" style={{ color: "var(--color-forest)" }}>Досягнення проєкту</h2>
        </div>
        <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {achievements.map((a) => (
            <div key={a.label} className="rounded-2xl border p-6 text-center" style={{ borderColor: "var(--color-line)" }}>
              <div className="font-display font-extrabold text-[26px]" style={{ color: "var(--color-leaf-dark)" }}>{a.value}+</div>
              <div className="mt-1.5 text-[12.5px] leading-snug" style={{ color: "var(--color-slate)" }}>{a.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
