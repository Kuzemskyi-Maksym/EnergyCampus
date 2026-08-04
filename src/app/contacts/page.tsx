"use client";

import { useState } from "react";
import { Mail, Send, MapPin, Clock, Paperclip, ChevronDown } from "lucide-react";
import { site, faq } from "@/lib/data";

export default function ContactsPage() {
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <section className="border-b" style={{ borderColor: "var(--color-line)", background: "var(--color-leaf-tint-2)" }}>
        <div className="container-page py-12 md:py-14">
          <h1 className="font-display font-extrabold text-[32px] md:text-[42px] tracking-tight" style={{ color: "var(--color-forest)" }}>Контакти</h1>
          <p className="mt-2 text-[15px] max-w-[560px]" style={{ color: "var(--color-slate)" }}>
            Пишіть координаторам проєкту або скористайтеся формою зворотного зв&apos;язку нижче.
          </p>
        </div>
      </section>

      <section className="container-page py-12 grid lg:grid-cols-[1fr_1.2fr] gap-10">
        <div>
          <div className="space-y-4">
            <div className="rounded-2xl border p-5 flex gap-3.5" style={{ borderColor: "var(--color-line)" }}>
              <Mail size={18} style={{ color: "var(--color-leaf)" }} className="shrink-0 mt-0.5" />
              <div>
                <div className="text-[12.5px] font-semibold" style={{ color: "var(--color-slate-light)" }}>Пошта</div>
                <div className="text-[14.5px] font-medium" style={{ color: "var(--color-forest)" }}>{site.email}</div>
              </div>
            </div>
            <div className="rounded-2xl border p-5 flex gap-3.5" style={{ borderColor: "var(--color-line)" }}>
              <Send size={18} style={{ color: "var(--color-leaf)" }} className="shrink-0 mt-0.5" />
              <div>
                <div className="text-[12.5px] font-semibold" style={{ color: "var(--color-slate-light)" }}>Telegram-канал</div>
                <div className="text-[14.5px] font-medium" style={{ color: "var(--color-forest)" }}>{site.telegramChannel}</div>
              </div>
            </div>
            <div className="rounded-2xl border p-5 flex gap-3.5" style={{ borderColor: "var(--color-line)" }}>
              <MapPin size={18} style={{ color: "var(--color-leaf)" }} className="shrink-0 mt-0.5" />
              <div>
                <div className="text-[12.5px] font-semibold" style={{ color: "var(--color-slate-light)" }}>Адреса</div>
                <div className="text-[14.5px] font-medium" style={{ color: "var(--color-forest)" }}>{site.address}</div>
              </div>
            </div>
            <div className="rounded-2xl border p-5 flex gap-3.5" style={{ borderColor: "var(--color-line)" }}>
              <Clock size={18} style={{ color: "var(--color-leaf)" }} className="shrink-0 mt-0.5" />
              <div>
                <div className="text-[12.5px] font-semibold" style={{ color: "var(--color-slate-light)" }}>Години роботи</div>
                <div className="text-[14.5px] font-medium" style={{ color: "var(--color-forest)" }}>Пн–Пт, 10:00–18:00</div>
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-2xl overflow-hidden h-48 border grid place-items-center" style={{ borderColor: "var(--color-line)", background: "var(--color-leaf-tint-2)" }}>
            <div className="text-center">
              <MapPin size={22} className="mx-auto" style={{ color: "var(--color-leaf)" }} />
              <div className="mt-2 text-[13px]" style={{ color: "var(--color-slate)" }}>Інтерактивна карта — офіс проєкту в КПІ</div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border p-7 md:p-8" style={{ borderColor: "var(--color-line)" }}>
          <h2 className="font-display font-bold text-[19px]" style={{ color: "var(--color-forest)" }}>Форма зворотного зв&apos;язку</h2>
          {!sent ? (
            <form className="mt-5 space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[13px] font-medium" style={{ color: "var(--color-slate)" }}>Ім&apos;я</label>
                  <input required className="mt-1 w-full rounded-xl border px-3.5 py-2.5 text-[14px] outline-none focus:border-leaf" style={{ borderColor: "var(--color-line)" }} />
                </div>
                <div>
                  <label className="text-[13px] font-medium" style={{ color: "var(--color-slate)" }}>Електронна пошта</label>
                  <input required type="email" className="mt-1 w-full rounded-xl border px-3.5 py-2.5 text-[14px] outline-none focus:border-leaf" style={{ borderColor: "var(--color-line)" }} />
                </div>
              </div>
              <div>
                <label className="text-[13px] font-medium" style={{ color: "var(--color-slate)" }}>Тема звернення</label>
                <input required className="mt-1 w-full rounded-xl border px-3.5 py-2.5 text-[14px] outline-none focus:border-leaf" style={{ borderColor: "var(--color-line)" }} />
              </div>
              <div>
                <label className="text-[13px] font-medium" style={{ color: "var(--color-slate)" }}>Повідомлення</label>
                <textarea required rows={5} className="mt-1 w-full rounded-xl border px-3.5 py-2.5 text-[14px] outline-none focus:border-leaf resize-none" style={{ borderColor: "var(--color-line)" }} />
              </div>
              <button type="button" className="inline-flex items-center gap-2 text-[13px] font-medium" style={{ color: "var(--color-slate)" }}>
                <Paperclip size={15} /> Прикріпити файл
              </button>
              <button type="submit" className="w-full rounded-xl py-3.5 text-white font-semibold text-[14.5px]" style={{ background: "var(--color-leaf)" }}>
                Надіслати повідомлення
              </button>
            </form>
          ) : (
            <div className="mt-6 rounded-xl p-5 text-[14px]" style={{ background: "var(--color-leaf-tint)", color: "var(--color-leaf-dark)" }}>
              Дякуємо! Ваше повідомлення надіслано координаторам проєкту.
            </div>
          )}
        </div>
      </section>

      <section id="faq" className="py-14" style={{ background: "var(--color-leaf-tint-2)" }}>
        <div className="container-page max-w-[760px]">
          <h2 className="font-display font-extrabold text-[24px] tracking-tight" style={{ color: "var(--color-forest)" }}>Часті запитання</h2>
          <div className="mt-6 space-y-3">
            {faq.map((f, i) => (
              <div key={f.q} className="rounded-2xl bg-white border overflow-hidden" style={{ borderColor: "var(--color-line)" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-[14.5px] font-medium" style={{ color: "var(--color-forest)" }}>{f.q}</span>
                  <ChevronDown size={17} className="shrink-0 transition-transform" style={{ color: "var(--color-slate)", transform: openFaq === i ? "rotate(180deg)" : "none" }} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-[13.5px] leading-relaxed" style={{ color: "var(--color-slate)" }}>{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
