import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ЕнергоКампус — Енергоефективний КПІ",
  description:
    "Стратегія реалізації ініціатив з енергоефективності в КПІ ім. Ігоря Сікорського на базі досвіду програми UDEPP.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
