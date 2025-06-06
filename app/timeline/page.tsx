"use client";

import { Code, Calculator, Cpu, Map, Wallet, Gamepad, Scan, Music, Key, MessageSquare, ArrowRight, Star, GraduationCap, TrendingUp, Users, Bolt } from "lucide-react"; // Keeping only necessary icons for projects and timeline elements
import React, { forwardRef } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

// --- Utility function cn (for Tailwind CSS class merging) ---
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Minimal Card Component ---
const Card = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";


// Projects Data - This is the core data that will be displayed in a vertical timeline
const projectsData = [
  {
    title: "HARMONIX (Major Project)",
    year: "2022-2024",
    description: "A comprehensive project on audio source separation, leveraging the Spleeter library to intelligently split vocal and instrumental tracks from various music files. This involved advanced audio processing and machine learning concepts.",
    technologies: ["Python", "Spleeter", "Machine Learning", "Audio Processing"],
    icon: <Music className="text-pink-500 w-5 h-5" />, // Added specific color for icon
    link: "#" // Placeholder link
  },
  {
    title: "Sportify (Minor Project-II)",
    year: "2023",
    description: "Developed a dynamic sports management system for college students, enabling seamless login/signup via institutional email and selection of preferred sports. This digital solution streamlined event management, replacing traditional paper-based processes.",
    technologies: ["Node.js", "Express.js", "MongoDB", "React.js", "REST APIs"],
    icon: <Gamepad className="text-purple-500 w-5 h-5" />,
    link: "#"
  },
  {
    title: "Kharchaa (Minor Project-I)",
    year: "2023",
    description: "An intuitive expense management system designed to track daily expenditures. It provides functionalities to add and delete expenses efficiently, offering users a clear and effective way to manage personal finances.",
    technologies: ["React.js", "Firebase", "State Management"],
    icon: <Wallet className="text-yellow-500 w-5 h-5" />,
    link: "#"
  },
  {
    title: "Online QR Voting System",
    year: "2022-2023",
    description: "Engineered an online QR-based voting platform for the 10th GCES IT Expo, allowing attendees to cast up to three votes by scanning QR codes with their devices, enhancing event interactivity and data collection.",
    technologies: ["PHP", "MySQL", "QR Code Generation", "Frontend Integration"],
    icon: <Scan className="text-blue-500 w-5 h-5" />,
    link: "#"
  },
  {
    title: "Blog Application",
    year: "2021",
    description: "A full-stack blogging platform supporting CRUD operations for posts, user authentication, and interactive features like comments and likes. Focused on robust data handling and a clean user interface.",
    technologies: ["React.js", "Node.js (Express)", "MongoDB", "Authentication (JWT)"],
    icon: <MessageSquare className="text-green-500 w-5 h-5" />,
    link: "#"
  },
  {
    title: "PHP CRUD with Login",
    year: "2020",
    description: "A foundational web application demonstrating comprehensive CRUD operations alongside a secure user login and registration system, implementing basic authentication and session management in PHP.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
    icon: <Key className="text-red-500 w-5 h-5" />,
    link: "#"
  },
  {
    title: "Logical Gate Simulator",
    year: "2019",
    description: "An educational web-based simulator visualizing the behavior of fundamental digital logic gates (AND, OR, NOT, XOR, NAND, NOR). Provides interactive truth tables for learning digital electronics concepts.",
    technologies: ["JavaScript", "HTML Canvas", "CSS"],
    icon: <Cpu className="text-orange-500 w-5 h-5" />,
    link: "#"
  },
  {
    title: "Calculator Master",
    year: "2019",
    description: "A responsive and feature-rich calculator application capable of performing standard arithmetic operations. Designed with a focus on intuitive user experience and efficient calculation logic.",
    technologies: ["JavaScript", "HTML", "CSS"],
    icon: <Calculator className="text-cyan-500 w-5 h-5" />,
    link: "#"
  },
  {
    title: "Trek Model (Conceptual)",
    year: "Ongoing Research",
    description: "An ongoing conceptual research project exploring algorithms for optimizing trekking routes based on various parameters like terrain difficulty, safety, and resource allocation. Aims to develop a smart logistical planning model for expeditions.",
    technologies: ["Python", "Algorithms", "Data Modeling", "GIS Concepts"],
    icon: <Map className="text-indigo-500 w-5 h-5" />,
    link: "#"
  },
];


const Timeline = () => (
  <div className="relative min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-950 dark:to-purple-950 py-20 px-2 sm:px-4 font-sans transition-colors duration-500 overflow-hidden"> {/* Increased py to py-20 */}
    {/* Animated background circles/shapes */}
    <div className="absolute top-1/4 left-[5%] w-32 h-32 bg-purple-300/30 dark:bg-purple-700/30 rounded-full blur-3xl opacity-50 animate-blob mix-blend-multiply z-0"></div>
    <div className="absolute bottom-1/3 right-[10%] w-48 h-48 bg-pink-300/30 dark:bg-pink-700/30 rounded-full blur-3xl opacity-50 animate-blob animation-delay-2000 mix-blend-multiply z-0"></div>
    <div className="absolute top-[10%] right-[20%] w-24 h-24 bg-yellow-300/30 dark:bg-yellow-700/30 rounded-full blur-3xl opacity-50 animate-blob animation-delay-4000 mix-blend-multiply z-0"></div>

    <div className="max-w-6xl mx-auto relative z-10">
      <h1 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-7 text-primary dark:text-pink-200 drop-shadow-lg hover:text-pink-600 dark:hover:text-pink-100 transition-colors duration-300 cursor-pointer">
        My Creative Portfolio
      </h1>

      {/* My Projects Section - Vertical Timeline Structure */}
      <section className="mb-12"> {/* Section itself has no background/border */}
        <h2 className="text-2xl font-playfair font-bold text-center mb-8 text-purple-700 dark:text-purple-300 hover:text-purple-600 dark:hover:text-purple-200 transition-colors duration-300 cursor-pointer">
          Key Projects & Creations <Code className="inline-block ml-2 w-6 h-6 text-green-500" />
        </h2>
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-400 to-purple-500 rounded-full shadow-lg"></div>

          <div className="space-y-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                className="relative flex items-start gap-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="relative z-10 bg-white dark:bg-purple-900 border-4 border-pink-200 dark:border-purple-600 rounded-full p-3 shadow-lg hover:scale-110 hover:border-pink-300 dark:hover:border-purple-500 transition-all duration-300 cursor-pointer group flex-shrink-0">
                  <div className="hover:animate-spin transition-all duration-500">
                    {project.icon}
                  </div>
                </div>
                <Card
                  className="flex-1 bg-white/95 dark:bg-purple-900/70 border border-pink-100 dark:border-pink-600 px-6 py-5 rounded-xl shadow-xl hover:scale-[1.01] hover:shadow-lg hover:shadow-pink-100/30 dark:hover:shadow-pink-700 transition-all duration-300 cursor-pointer group flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold hover:bg-pink-600 dark:hover:bg-pink-400 transition-colors duration-300 group-hover:scale-105">
                      {project.year}
                    </span>
                    <h3 className="font-playfair text-xl font-bold text-pink-700 dark:text-pink-200 hover:text-pink-600 dark:hover:text-pink-100 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-gray-100 dark:border-gray-700">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-200 px-3 py-1 rounded-full text-xs font-medium hover:bg-purple-200 dark:hover:bg-purple-700 hover:scale-105 transition-all duration-300 cursor-pointer"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center text-pink-600 dark:text-pink-300 hover:underline text-sm font-semibold group-hover:text-pink-700 dark:group-hover:text-pink-100 transition-colors duration-300"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Quick Stats section has been removed as per user request */}

      <div className="mt-10 text-center text-gray-600 dark:text-pink-100 font-mono animate-fade-in text-base italic bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20 dark:border-pink-500/20 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 cursor-pointer group">
        <p className="hover:text-gray-800 dark:hover:text-pink-50 transition-colors duration-300 text-lg">
          "Every expert was once a beginner. Every pro was once an amateur. Every icon was once an unknown."
        </p>
        <span className="text-2xl group-hover:animate-pulse">✨</span>
      </div>
    </div>

    {/* Custom animations and global styles */}
    <style>{`
      @keyframes fade-in {
        0% { opacity: 0; transform: translateY(10px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in {
        animation: fade-in 0.8s cubic-bezier(.61,.05,.46,1.01) both;
      }

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
        animation: blob 8s infinite ease-in-out;
      }
      .animation-delay-2000 { animation-delay: 2s; }
      .animation-delay-4000 { animation-delay: 4s; }

      @keyframes wiggle {
        0%, 100% { transform: rotate(0deg); }
        25% { transform: rotate(-5deg); }
        50% { transform: rotate(5deg); }
        75% { transform: rotate(-2deg); }
      }
      .animate-wiggle {
        animation: wiggle 0.5s ease-in-out;
      }

      /* Base styles for dark mode compatibility (ensure these are loaded globally or via Tailwind config) */
      body {
        --tw-gradient-from: #fdf2f8; /* softPink */
        --tw-gradient-via: #e8d0f1; /* softPurple */
        --tw-gradient-to: #fff7e6; /* pastelYellow */
      }
      .dark body {
        --tw-gradient-from: #150820;
        --tw-gradient-via: #653c87;
        --tw-gradient-to: #ffbefd;
      }
    `}</style>
  </div>
);

export default Timeline;
