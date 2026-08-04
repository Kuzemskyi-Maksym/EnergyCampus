"use client";

import { useState } from "react";
import { X, Lightbulb, Share2 } from "lucide-react";

export default function IdeaModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sent, setSent] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center p-4" role="dialog" aria-modal="true" aria-label="Банк ідей економії">
      <div className="absolute inset-0 bg-forest/40 backdrop-blur-sm" style={{ background: "rgba(16,32,26,0.45)" }} onClick={onClose} />
      <div className="relative w-full max-w-[420px] rounded-3xl bg-white p-6 shadow-2xl">
        <button onClick={onClose} aria-label="Закрити" className="absolute right-4 top-4 h-8 w-8 grid place-items-center rounded-full hover:bg-leaf-tint-2">
          <X size={18} />
        </button>

        {!sent ? (
          <>
            <div className="flex items-center gap-2.5">
              <span className="h-9 w-9 grid place-items-center rounded-full" style={{ background: "var(--color-leaf-tint)" }}>
                <Lightbulb size={18} style={{ color: "var(--color-leaf)" }} />
              </span>
              <h3 className="font-display font-extrabold text-[18px] tracking-tight">Банк ідей економії</h3>
            </div>
            <form
              className="mt-5 space-y-3.5"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div>
                <label className="text-[13px] font-medium text-slate">Ім&apos;я</label>
                <input required className="mt-1 w-full rounded-xl border border-line px-3.5 py-2.5 text-[14px] outline-none focus:border-leaf" />
              </div>
              <div>
                <label className="text-[13px] font-medium text-slate">Факультет / група</label>
                <input required className="mt-1 w-full rounded-xl border border-line px-3.5 py-2.5 text-[14px] outline-none focus:border-leaf" />
              </div>
              <div>
                <label className="text-[13px] font-medium text-slate">Опис інноваційної пропозиції по оптимізації енергії</label>
                <textarea required rows={4} className="mt-1 w-full rounded-xl border border-line px-3.5 py-2.5 text-[14px] outline-none focus:border-leaf resize-none" />
              </div>
              <p className="text-[12px] text-slate-light leading-relaxed">
                Цей цифровий формат доповнює фізичні «Скриньки пропозицій» у корпусах.
              </p>
              <button type="submit" className="w-full rounded-xl py-3 text-white font-semibold text-[14.5px] transition-transform hover:scale-[1.01]" style={{ background: "var(--color-leaf)" }}>
                Надіслати ідею
              </button>
            </form>
          </>
        ) : (
          <div className="py-6 text-center">
            <div className="mx-auto h-14 w-14 grid place-items-center rounded-full" style={{ background: "var(--color-leaf-tint)" }}>
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="mt-4 font-display font-extrabold text-[18px]">Дякуємо за твою ідею!</h3>
            <p className="mt-2 text-[13.5px] text-slate leading-relaxed">
              Твою пропозицію розглянуть експерти та додадуть до цифрового банку.
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-[13px] text-slate">
              <Share2 size={14} /> Поділитися в соцмережах
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
