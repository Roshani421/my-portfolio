"use client"; // This directive is crucial for components using client-side features like styled-jsx

import Link from "next/link"; // Import Next.js Link
import {
  Github, // Keeping Github as you had it in your Next.js version
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Mail // Keeping Mail as you had it in your Next.js version
} from "lucide-react";
import { Button } from "@/components/ui/button"; // Assuming this path is correct for your Shadcn UI Button

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: 'https://github.com/Roshani421', // Using href for Next.js Link
      icon: Github,
      label: 'GitHub',
      color: '#333333', // Default dark color for GitHub
      hoverColor: '#6e5494', // GitHub purple on hover for contrast
    },
    {
      href: 'https://www.facebook.com/roshni.subedi.520',
      icon: Facebook,
      label: 'Facebook',
      color: '#1877F2', // Facebook blue
      hoverColor: '#1877F2', // Keep brand color on hover
    },
    {
      href: 'https://x.com/dark_sun421', // Assuming X (Twitter) icon if available, otherwise Twitter
      icon: Twitter,
      label: 'Twitter',
      color: '#1DA1F2', // Twitter blue
      hoverColor: '#1DA1F2', // Keep brand color on hover
    },
    {
      href: 'https://www.instagram.com/s_roshani06/',
      icon: Instagram,
      label: 'Instagram',
      color: '#E4405F', // Instagram pink/red
      hoverColor: '#C13584', // Slightly darker pink for hover
    },
    {
      href: 'https://www.linkedin.com/in/roshni-subedi-525b8b1a0/', // Using your existing LinkedIn link
      icon: Linkedin,
      label: 'LinkedIn',
      color: '#0A66C2', // LinkedIn blue
      hoverColor: '#0A66C2', // Keep brand color on hover
    },
    {
      href: 'https://www.youtube.com/@roshnisubedi4715', // Using your existing YouTube link
      icon: Youtube,
      label: 'YouTube',
      color: '#FF0000', // YouTube red
      hoverColor: '#FF0000', // Keep brand color on hover
    },
    {
      href: "mailto:subediroshani19@gmail.com", // Keeping Mail from your Next.js version
      icon: Mail,
      label: "Email",
      color: "#EA4335", // Google Red (for Mail icon)
      hoverColor: "#EA4335", // Keep brand color on hover
    },
  ];

  // Modified quickLinks to match your Next.js example for consistency
  const quickLinks = [
    { href: "/timeline", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/work", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/eva-assistant", label: "Contact" }, // Changed back to your original "eva-assistant" for contact
  ];

  return (
    <footer className="bg-gray-800 text-white py-8"> {/* Adjusted footer background */}
      {/* Removed blob animations as they were not in the React Router version you provided */}
      {/* <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-48 h-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
        <div className="absolute top-0 right-0 w-48 h-48 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Used max-w-7xl and auto margins for centering */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Portfolio Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Portfolio</h3> {/* Adjusted heading size/font */}
            <p className="text-gray-300 mb-4"> {/* Adjusted text color */}
              A showcase of my work, skills, and professional journey.
            </p>
            <div className="flex space-x-4"> {/* Used space-x-4 for spacing */}
              {socialLinks.map((item) => (
                <a
                  key={item.href} // Use href for key as per Next.js Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200 group" // Base styling
                >
                  <item.icon
                    size={24}
                    strokeWidth={2}
                    style={{ color: item.color }} // Apply brand color directly
                    className="group-hover:scale-110 transition-transform" // Hover effect
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3> {/* Adjusted heading size/font */}
            <ul className="space-y-2"> {/* Used space-y-2 for spacing */}
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white" // Simple text and hover color
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3> {/* Adjusted heading size/font */}
            <address className="not-italic text-gray-300"> {/* Adjusted text color */}
              <p className="mb-2">Email: your.email@example.com</p>
              <p className="mb-2">Location: City, Country</p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© {currentYear} Your Portfolio. All rights reserved.</p> {/* Use currentYear from state */}
        </div>
      </div>

      {/* Removed styled jsx as it was tied to the removed blob animations */}
      {/* <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.6, 0.4, 0.4, 0.9);
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style> */}
    </footer>
  );
}