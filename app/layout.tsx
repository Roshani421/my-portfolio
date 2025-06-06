import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "./components/theme-provider"
import Header from "./components/Header"
import { Toaster } from "@/components/ui/toaster"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Manan - Software Engineer & Frontend Developer",
  description:
    "Portfolio of Manan, a passionate Software Engineer and Frontend Developer specializing in React.js, Next.js, and modern web technologies.",
  keywords: ["Manan", "Software Engineer", "Frontend Developer", "React", "Next.js"],
  authors: [{ name: "Manan" }],
  openGraph: {
    title: "Manan - Software Engineer",
    description: "Passionate Software Engineer specializing in modern web development",
    type: "website",
    images: ["/images/profile.png"],
  },
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#8b5cf6" },
    { media: "(prefers-color-scheme: dark)", color: "#1e1b4b" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-purple-100 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
            <Header />
            {children}
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
