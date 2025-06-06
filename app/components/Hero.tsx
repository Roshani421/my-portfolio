"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-10 bg-gradient-to-br from-purple-50 via-blue-50 to-purple-100 dark:bg-transparent"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mb-8"
          >
            <div className="relative inline-block">
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 dark:from-purple-400 dark:via-pink-400 dark:to-purple-600 rounded-full p-1 animate-pulse">
                  <div className="w-full h-full bg-white dark:bg-black rounded-full p-1">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Roshani Subedi"
                      fill
                      className="rounded-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="absolute -bottom-2 -right-2 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500 rounded-full p-2"
              >
                <div className="w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
              </motion.div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              Roshani Subedi
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500 text-white px-4 py-2 text-lg">
                💻 Software Engineer
              </Badge>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-8 text-gray-700 dark:text-white/80"
          >
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+977-9805226421</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>subediroshani19@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Pokhara, Nepal</span>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-gray-300 dark:border-white/20 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
            >
              <Link href="https://linkedin.com/in/roshani-subedi" target="_blank">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Link>
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-gray-300 dark:border-white/20 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
            >
              <Link href="#work">
                <ArrowRight className="h-4 w-4 mr-2" />
                View Projects
              </Link>
            </Button>
          </motion.div>

          {/* Tech Stack Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center gap-8 opacity-60"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-2">
                <span className="text-black font-bold text-xl">JS</span>
              </div>
              <span className="text-xs text-gray-600 dark:text-white/60">JavaScript</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-2">
                <span className="text-white font-bold text-xl">TS</span>
              </div>
              <span className="text-xs text-gray-600 dark:text-white/60">TypeScript</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center mb-2">
                <span className="text-black font-bold text-xl">R</span>
              </div>
              <span className="text-xs text-gray-600 dark:text-white/60">React</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-black border border-white rounded-lg flex items-center justify-center mb-2">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-xs text-gray-600 dark:text-white/60">Next.js</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
