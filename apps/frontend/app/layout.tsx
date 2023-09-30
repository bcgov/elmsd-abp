import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "../components/UI/Header/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ABP",
  description: "Annual Business Plan",
  icons: {
    icon: "./BCFavIcon.png"
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="tw-pt-14">
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
