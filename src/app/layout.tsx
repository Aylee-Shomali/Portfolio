import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-eight-zeta-67.vercel.app"),
  title: {
    default: "Aylee Shomali — Full-Stack Developer",
    template: "%s | Aylee Shomali",
  },
  description:
    "Aylee Shomali — Full-stack developer based in Portland, OR specializing in Angular, C#, UI/UX, and SQL Server. Design and development — UI, back-end services, and deployment.",
  keywords: [
    "Aylee Shomali",
    "full-stack developer",
    "software engineer",
    "Portland OR",
    "Angular",
    "C#",
    "UI/UX",
    "web developer",
  ],
  authors: [{ name: "Aylee Shomali" }],
  creator: "Aylee Shomali",
  openGraph: {
    title: "Aylee Shomali — Full-Stack Developer",
    description:
      "Full-stack developer based in Portland, OR — Angular, C#, UI/UX. Design and development, end to end.",
    type: "website",
    locale: "en_US",
    url: "https://portfolio-eight-zeta-67.vercel.app",
    siteName: "Aylee Shomali",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${hanken.variable} ${plexMono.variable} antialiased`}
    >
      <body className="flex flex-col bg-canvas text-ink font-body">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
