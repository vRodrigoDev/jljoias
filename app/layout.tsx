import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JLJoias | Elegância & Presença",
  description: "Joias masculinas banhadas a ouro 18k com design exclusivo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      {/* O suppressHydrationWarning impede que extensões do navegador causem aquele erro vermelho */}
      <body className="min-h-full flex flex-col bg-[var(--color-brand-black)] text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}