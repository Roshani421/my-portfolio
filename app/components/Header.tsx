"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Menu, X, Sun, Moon, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { href: "/timeline", label: "timeline", badge: "4" },
    { href: "/work", label: "work" },
    { href: "/about", label: "about" },
    { href: "/blog", label: "story" },
    { href: "/tips", label: "tips", badge: "3" },
    { href: "/eva-assistant", label: "eva assistant" },
  ]

  const socialLinks = [
    { href: "https://www.linkedin.com/in/roshni-subedi-525b8b1a0/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://github.com/Roshani421", icon: Github, label: "GitHub" },
    { href: "mailto:subediroshani19@gmail.com", icon: Mail, label: "Email" },
  ]

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-black/20 backdrop-blur-xl z-50 border-b border-gray-200 dark:border-white/10">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
          >
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Manan
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white transition-colors group"
              >
                {item.label}
                {item.badge && (
                  <Badge className="absolute -top-2 -right-3 bg-pink-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                    {item.badge}
                  </Badge>
                )}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Social Links & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => (
              <Button
                key={social.href}
                variant="ghost"
                size="icon"
                asChild
                className="text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10"
              >
                <Link href={social.href} target="_blank" rel="noopener noreferrer">
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              </Button>
            ))}

            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-900 dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-white/10 pt-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                  {item.badge && (
                    <Badge className="bg-pink-500 text-white text-xs px-1.5 py-0.5 rounded-full">{item.badge}</Badge>
                  )}
                </Link>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-white/10">
                {socialLinks.map((social) => (
                  <Button
                    key={social.href}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white"
                  >
                    <Link href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-5 w-5" />
                    </Link>
                  </Button>
                ))}
                {mounted && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white"
                  >
                    {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
