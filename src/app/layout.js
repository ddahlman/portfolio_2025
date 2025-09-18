import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import { NavLink } from "./shared/NavLink";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

export const metadata = {
  title: "Daniel Acuña Dahlman — Frontend Developer",
  description: "Portfolio showcasing React, Vue, and modern UI engineering.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${grotesk.variable} font-sans box-border`}
    >
      <body className="grid min-h-dvh grid-rows-[auto,1fr,auto] items-start text-gray-100 bg-neon">
        <header className="sticky top-0 z-50 bg-black/10 backdrop-blur">
          <nav className="mx-auto max-w-6xl px-4 py-3">
            <div className="flex justify-between text-base w-1/2">
              <NavLink nav="Home" href={"/"} />
              <NavLink nav="About" href={"/about"} />
              <NavLink nav="Projects" href={"/projects"} />
            </div>
          </nav>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-12">{children}</main>

        <footer className="py-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Daniel Acuña Dahlman
        </footer>
      </body>
    </html>
  );
}
