import type { Metadata } from "next";
import { ClientWrapper } from "./components/ClientWrapper";
import "./globals.css";

export const metadata: Metadata = {
  title: "JL Joias",
  description: "Joias exclusivas e minimalistas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-[#FAFAFA] antialiased">
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}