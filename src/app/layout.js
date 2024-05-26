import LayoutContainer from "@/components/LayoutContainer"
import { Inter } from "next/font/google";
import Header from "@/components/Header"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Searching Repos",
  description: "Hello, dears, feel free to explore and search Github repos ad save your favs ones for later use.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning={true}>
      <body className={`m-0 p-0 ${inter.className}`}>
        <LayoutContainer>
          {/* page wrapper */}
          <div className="p-wrapper md:py-5 w-full min-h-screen bg-stone-200 dark:bg-stone-900 transition-all text-stone-800 dark:text-stone-100 sm:p-5">
            {/* main container */}
            <div className="max-w-[870px] w-full m-auto border bg-white dark:bg-stone-800 shadow-sm border-stone-200 rounded-lg dark:border-stone-700 p-4 md:p-6">
              <div className="flex flex-col gap-5 justify-between">
                <Header appName="Github Searcher" />
                <main className="app-content mt-5">{children}</main>
              </div>
            </div>
            {/* end container */}
          </div>
          {/* end p wrapper */}
        </LayoutContainer>
      </body>
    </html>
  )
}
