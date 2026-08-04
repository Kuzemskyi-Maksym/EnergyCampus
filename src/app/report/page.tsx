"use client";

import { useState } from "react";
import { Send, Upload, CheckCircle2 } from "lucide-react";
import { site, problemTypes } from "@/lib/data";

const buildings = ["Корпус 18", "Корпус 19", "Корпус 20", "Корпус 21", "Корпус EL", "Корпус EZ", "Корпус L3", "Гуртожиток №9", "Гуртожиток №20"];

export default function ReportPage() {
  const [sent, setSent] = useState(false);

  return (
    <section className="container-page py-14 max-w-[640px]">
      <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold" style={{ background: "var(--color-leaf-tint)", color: "var(--color-leaf-dark)" }}>
        Резервна форма
      </span>
      <h1 className="mt-4 font-display font-extrabold text-[30px] tracking-tight" style={{ color: "var(--color-forest)" }}>Повідомити про проблему</h1>
      <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "var(--color-slate)" }}>
        Немає Telegram під рукою? Ця форма дублює функціонал бота {site.bot} — заповніть її, і звернення потрапить
        у ту саму чергу обробки.
      </p>

      {!sent ? (
        <form
          className="mt-8 space-y-5 rounded-3xl border p-7"
          style={{ borderColor: "var(--color-line)" }}
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        >
          <div>
            <label className="text-[13px] font-medium" style={{ color: "var(--color-slate)" }}>Тип звернення</label>
            <select required className="mt-1 w-full rounded-xl border px-3.5 py-2.5 text-[14px] bg-white outline-none focus:border-leaf" style={{ borderColor: "var(--color-line)" }}>
              <option value="">Оберіть тип проблеми</option>
              {problemTypes.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label className="text-[13px] font-medium" style={{ color: "var(--color-slate)" }}>Гуртожиток / корпус</label>
              <select required className="mt-1 w-full rounded-xl border px-3.5 py-2.5 text-[14px] bg-white outline-none focus:border-leaf" style={{ borderColor: "var(--color-line)" }}>
                <option value="">Оберіть</option>
                {buildings.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>
            <div>
              <label className="text-[13px] font-medium" style={{ color: "var(--color-slate)" }}>Поверх</label>
              <input required type="number" min={0} className="mt-1 w-full rounded-xl border px-3.5 py-2.5 text-[14px] outline-none focus:border-leaf" style={{ borderColor: "var(--color-line)" }} />
            </div>
            <div>
              <label className="text-[13px] font-medium" style={{ color: "var(--color-slate)" }}>Аудиторія</label>
              <input className="mt-1 w-full rounded-xl border px-3.5 py-2.5 text-[14px] outline-none focus:border-leaf" style={{ borderColor: "var(--color-line)" }} />
            </div>
          </div>

          <div>
            <label className="text-[13px] font-medium" style={{ color: "var(--color-slate)" }}>Опис проблеми</label>
            <textarea required rows={4} className="mt-1 w-full rounded-xl border px-3.5 py-2.5 text-[14px] outline-none focus:border-leaf resize-none" style={{ borderColor: "var(--color-line)" }} />
          </div>

          <div>
            <label className="text-[13px] font-medium block mb-1.5" style={{ color: "var(--color-slate)" }}>Фото (розбите вікно, холодна батарея тощо)</label>
            <div className="rounded-xl border border-dashed grid place-items-center py-8 cursor-pointer" style={{ borderColor: "var(--color-line)" }}>
              <Upload size={18} style={{ color: "var(--color-slate-light)" }} />
              <span className="mt-2 text-[13px]" style={{ color: "var(--color-slate-light)" }}>Натисніть, щоб додати фото</span>
            </div>
          </div>

          <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-xl py-3.5 text-white font-semibold text-[14.5px]" style={{ background: "var(--color-leaf)" }}>
            <Send size={16} /> Надіслати звернення
          </button>
        </form>
      ) : (
        <div className="mt-8 rounded-3xl border p-8 text-center" style={{ borderColor: "var(--color-line)" }}>
          <CheckCircle2 size={32} className="mx-auto" style={{ color: "var(--color-leaf)" }} />
          <h2 className="mt-3 font-display font-bold text-[18px]" style={{ color: "var(--color-forest)" }}>Звернення прийнято</h2>
          <p className="mt-2 text-[13.5px]" style={{ color: "var(--color-slate)" }}>Дякуємо! Відповідальна команда отримає ваше звернення так само, як заявки з Telegram-бота.</p>
        </div>
      )}
    </section>
  );
}
