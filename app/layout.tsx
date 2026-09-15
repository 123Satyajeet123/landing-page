import type { Metadata } from "next";
import { Instrument_Sans, Inter } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Hizen — Show it how the work gets done",
  description:
    "An intelligence layer on your browser that learns how your team works and then does the work for them, without anyone having to build or deploy an agent.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-heading focus:px-4 focus:py-2 focus:text-mockup-ink"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
