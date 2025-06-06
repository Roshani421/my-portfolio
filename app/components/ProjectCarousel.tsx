"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Github, Globe, Sparkles, Star } from "lucide-react";
import React from "react";

// Add your key projects here with name, description, tech stack, links, etc.
const projects = [
  {
    title: "DevConnect",
    desc: "A vibrant social platform empowering women in tech to showcase skills, find mentors, and collaborate on projects.",
    tech: ["React", "Shadcn/UI", "TypeScript", "Node.js"],
    repo: "https://github.com/yourusername/devconnect",
    live: "https://devconnect.live",
    icon: <Sparkles className="text-pink-400 w-7 h-7" />
  },
  {
    title: "Artify Store",
    desc: "A pastel-themed e-commerce store for unique digital art, coded for accessibility and delight.",
    tech: ["Next.js", "Tailwind", "Stripe", "MongoDB"],
    repo: "https://github.com/yourusername/artify-store",
    live: "https://artifystore.com",
    icon: <Star className="text-yellow-400 w-7 h-7" />
  },
  {
    title: "CodeTrail Blog",
    desc: "A developer blog template focused on designer-centric articles, code demos, and beautiful content layouts.",
    tech: ["Astro", "Markdown", "PrismJS"],
    repo: "https://github.com/yourusername/codetrail-blog",
    live: "https://codetrail.blog",
    icon: <Globe className="text-purple-500 w-7 h-7" />
  }
];

const ProjectCarousel = () => (
  <div className="relative px-2">
    <Carousel className="w-full max-w-2xl mx-auto animate-fade-in">
      <CarouselContent>
        {projects.map((project, idx) => (
          <CarouselItem key={project.title} className="md:basis-1/2 lg:basis-1/3">
            <div className="group bg-gradient-to-br from-softPink to-softPurple/80 dark:from-[#27103a]/80 dark:to-[#4e2564]/70 backdrop-blur-lg rounded-2xl shadow-xl p-6 flex flex-col h-full border border-pink-100 dark:border-purple-800 transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative">
              <div className="absolute -top-5 right-6">{project.icon}</div>
              <h4 className="text-lg font-playfair font-bold mb-1 text-pink-700 dark:text-pink-200 tracking-tight flex items-center gap-2">
                {project.title}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 line-clamp-3 mb-3 text-[15px] transition">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded bg-softPurple/60 dark:bg-purple-900 text-xs text-purple-700 dark:text-purple-200 font-semibold font-mono shadow">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-auto pt-2">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener"
                  aria-label="View source code"
                  className="text-purple-600 dark:text-pink-300 hover:underline flex items-center gap-1"
                >
                  <Github className="w-5 h-5 mr-1" /> Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener"
                  aria-label="View project live"
                  className="inline-flex items-center gap-1 text-pink-600 hover:text-pink-700 dark:text-yellow-300 dark:hover:text-yellow-400 underline underline-offset-4 font-semibold"
                >
                  Live <Globe className="w-4 h-4 inline" />
                </a>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-pink-200 dark:bg-purple-700/20 text-pink-700 dark:text-pink-100" />
      <CarouselNext className="bg-pink-200 dark:bg-purple-700/20 text-pink-700 dark:text-pink-100" />
    </Carousel>
  </div>
);

export default ProjectCarousel;
