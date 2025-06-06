"use client";

import { Mail, Phone, User, Linkedin, GraduationCap, ArrowRight, Sparkles, Download } from "lucide-react";
import { Card } from "@/components/ui/card";
import React from "react";
import ProjectCarousel from "../components/ProjectCarousel";
import Image from "next/image";

const PROFILE_IMAGE = "/images/roshani-profile.jpg";

const About = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-softPink via-softPurple to-pastelYellow py-16 overflow-x-hidden font-sans dark:bg-gradient-to-br dark:from-[#150820] dark:via-[#653c87] dark:to-[#ffbefd] transition-colors duration-500">
      {/* Animated floating shape */}
      <div className="absolute -top-8 left-0 md:left-16 w-56 h-56 rounded-full bg-gradient-to-tr from-pink-300/50 to-purple-200/60 blur-3xl opacity-60 animate-float shadow-2xl pointer-events-none z-0" />

      {/* Profile / Header Section */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="bg-white/80 dark:bg-purple-950/70 shadow-2xl rounded-2xl overflow-hidden mb-10 flex flex-col md:flex-row items-center gap-5 py-9 px-7 md:px-12 animate-slide-in-right transition-all duration-300 hover:shadow-3xl hover:scale-[1.02]">
          <div className="relative group">
            <Image
              src={PROFILE_IMAGE}
              alt="Roshani Subedi Avatar"
              width={144}
              height={144}
              className="w-36 h-36 rounded-full object-cover border-4 border-pink-300 shadow-xl animate-profile-ring transition-all duration-300 group-hover:scale-110 group-hover:border-pink-400 cursor-pointer"
              style={{
                boxShadow: "0 0 0 8px #f5cdff44, 0 2px 24px #b983e666",
              }}
            />
            <User className="absolute -bottom-2 -right-2 w-10 h-10 text-primary bg-white dark:bg-purple-900 rounded-full p-1.5 shadow-lg border border-pink-200 dark:border-purple-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
          </div>
          <div className="flex-1 text-center md:text-left font-mono">
            <div className="flex flex-col md:flex-row md:items-center gap-2 justify-center md:justify-start">
              <h2 className="text-4xl font-playfair font-bold text-gray-900 dark:text-pink-100 tracking-tight flex items-center gap-3 hover:text-pink-600 dark:hover:text-pink-200 transition-colors duration-300">
                Roshani Subedi
                <span className="inline-flex items-center bg-softPink/70 dark:bg-pink-600/30 px-3 py-1 rounded-full ml-2 text-primary dark:text-pink-100 animate-pulse-badge text-base font-semibold shadow-glow hover:scale-110 hover:bg-pink-300/80 dark:hover:bg-pink-500/40 transition-all duration-300 cursor-pointer">
                  <GraduationCap className="w-5 h-5 mr-1 hover:animate-bounce" />
                  Software Engineer
                </span>
              </h2>
            </div>
            <div className="text-base text-gray-700 dark:text-gray-300 mt-2 flex flex-col md:flex-row md:items-center gap-2 font-mono">
              <span className="inline-flex items-center gap-1 hover:text-pink-600 dark:hover:text-pink-300 transition-colors duration-300 cursor-pointer hover:scale-105">
                <Phone size={17} className="text-pink-500 hover:animate-pulse" />
                +977-9805226421
              </span>
              <span className="hidden md:inline-block text-gray-400 mx-2">|</span>
              <span className="inline-flex items-center gap-1 hover:text-purple-600 dark:hover:text-purple-300 transition-colors duration-300 cursor-pointer hover:scale-105">
                <Mail size={17} className="text-purple-500 hover:animate-pulse" />
                subediroshani19@gmail.com
              </span>
            </div>
            <div className="mt-2 flex items-center justify-center md:justify-start gap-2">
              <a
                href="https://www.linkedin.com/in/roshni-subedi-525b8b1a0/"
                target="_blank"
                className="flex items-center gap-1 text-blue-700 dark:text-blue-300 hover:underline hover:scale-105 transition-transform"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <span className="animate-fade-in hidden md:inline mx-2 text-gray-300 dark:text-gray-500">|</span>
              <a
                href="#projects"
                className="flex items-center gap-1 text-pink-600 dark:text-pink-200 hover:underline animate-pulse hover:scale-110 transition-transform font-semibold"
              >
                <ArrowRight size={16} />View Projects
              </a>
              <a
                href="/RoshaniSubedi_CV.pdf" // Replace with your actual resume path
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 bg-pink-500 text-white dark:bg-purple-700 hover:bg-pink-600 dark:hover:bg-purple-800 px-2 py-1 rounded-full text-xs font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Download className="w-3 h-3 mr-1" />
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Animated GIF or Illustration */}
        <div className="flex justify-center my-3">
          <img
            src="https://media.giphy.com/media/ln7z2eWriiQAllfVcn/giphy.gif"
            alt="Coding Girl Illustration"
            className="w-36 h-20 object-contain opacity-85 rounded-xl border border-pink-100 shadow-lg animate-fade-in hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
            loading="lazy"
          />
        </div>

        {/* Introduction Section */}
        <Card className="mb-10 p-7 pt-6 bg-white/95 dark:bg-purple-900/80 shadow-xl rounded-2xl animate-fade-in font-sans border border-pink-100 dark:border-pink-900 relative overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
          <h3 className="text-xl font-playfair font-bold mb-2 flex items-center gap-2 text-primary drop-shadow-lg hover:text-pink-600 dark:hover:text-pink-300 transition-colors duration-300">
            <User className="w-6 h-6 hover:animate-bounce" />
            About Me
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-md hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300">
            {`I'm Roshani Subedi, a passionate Software Engineer who loves to craft beautiful, impactful, and meaningful digital products. My journey in technology was inspired by the endless possibilities of innovation and making a difference, particularly for empowering women in tech! I believe that a unique viewpoint, creative problem solving, and collaboration are the heart of progress. My expertise in building responsive and accessible web applications fuels my excitement to contribute to projects that inspire the next generation—especially girls and women striving for greatness in STEM!`}
          </p>
        </Card>

        {/* Education Section */}
        <Card className="p-7 bg-white/95 dark:bg-purple-900/80 shadow-xl rounded-2xl animate-fade-in flex flex-col gap-6 border border-pink-100 dark:border-pink-800 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
          <h3 className="text-xl font-playfair font-bold mb-2 flex items-center gap-2 text-purple-800 dark:text-pink-200 hover:text-purple-600 dark:hover:text-pink-100 transition-colors duration-300">
            <GraduationCap className="w-5 h-5 hover:animate-bounce" />
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-7">
            <div className="bg-gradient-to-tr from-pink-100 to-purple-100 dark:from-[#382052] dark:to-[#ffeafe0a] shadow rounded-lg p-4 border-l-4 border-pink-300 dark:border-pink-400 animate-scale-in hover:shadow-lg hover:scale-105 hover:border-pink-400 dark:hover:border-pink-300 transition-all duration-300 cursor-pointer">
              <h4 className="font-semibold flex items-center gap-2 hover:text-purple-700 dark:hover:text-pink-200 transition-colors duration-300">
                <GraduationCap className="w-5 h-5 text-purple-600 dark:text-pink-300 hover:animate-pulse" />
                Bachelor in Software Engineering
              </h4>
              <div className="text-gray-600 dark:text-gray-300 text-sm mt-1 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300">
                Pokhara University, Gandaki College of Engineering and Science, Pokhara <br />
                <span className="italic">Sep, 2024</span>
              </div>
            </div>
            <div className="bg-gradient-to-tr from-yellow-100 to-pink-100 dark:from-yellow-800 dark:to-pink-950 shadow rounded-lg p-4 border-l-4 border-yellow-300 dark:border-yellow-700 animate-scale-in hover:shadow-lg hover:scale-105 hover:border-yellow-400 dark:hover:border-yellow-600 transition-all duration-300 cursor-pointer">
              <h4 className="font-semibold flex items-center gap-2 hover:text-yellow-700 dark:hover:text-yellow-200 transition-colors duration-300">
                <GraduationCap className="w-5 h-5 text-yellow-600 dark:text-yellow-300 hover:animate-pulse" />
                Higher Secondary Education (Science Major)
              </h4>
              <div className="text-gray-600 dark:text-gray-300 text-sm mt-1 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300">
                Pokhara Secondary School, Pokhara, Nepal <br />
                <span className="italic">Jul, 2018</span>
              </div>
            </div>
            <div className="bg-gradient-to-tr from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 shadow rounded-lg p-4 md:col-span-2 border-l-4 border-purple-300 dark:border-pink-600 animate-scale-in hover:shadow-lg hover:scale-105 hover:border-purple-400 dark:hover:border-pink-500 transition-all duration-300 cursor-pointer">
              <h4 className="font-semibold flex items-center gap-2 hover:text-pink-600 dark:hover:text-pink-100 transition-colors duration-300">
                <GraduationCap className="w-5 h-5 text-pink-400 dark:text-pink-200 hover:animate-pulse" />
                School Leaving Certificate
              </h4>
              <div className="text-gray-600 dark:text-gray-300 text-sm mt-1 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300">
                Dhawalagiri Secondary School, Milanchowk Hemja, Pokhara, Nepal <br />
                <span className="italic">Apr, 2016</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Project Carousel Section */}
        <div className="mt-12 mb-4" id="projects">
          <h3 className="text-2xl font-playfair font-bold text-center text-pink-700 dark:text-pink-200 mb-6 animate-fade-in flex items-center justify-center gap-2 hover:text-pink-600 dark:hover:text-pink-100 transition-colors duration-300">
            <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse hover:animate-bounce" />
            My Projects
          </h3>
          <ProjectCarousel />
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
          100% { transform: translateY(0); }
        }
        .animate-float { animation: float 7s ease-in-out infinite; }

        @keyframes profile-ring {
          0%, 100% { box-shadow: 0 0 0 8px #f5cdff44, 0 2px 24px #b983e666; }
          50% { box-shadow: 0 0 0 18px #ebbffd44, 0 4px 32px #f590ef44; }
        }
        .animate-profile-ring { animation: profile-ring 3.5s ease-in-out infinite; }

        @keyframes pulse-badge {
          0%, 100% { box-shadow: 0 0 14px #fde4fe99; }
          50% { box-shadow: 0 0 36px #e7b4f488; }
        }
        .animate-pulse-badge { animation: pulse-badge 2.2s infinite; }

        @keyframes slide-in-right {
          0% { opacity: 0; transform: translateX(48px);}
          100% { opacity: 1; transform: translateX(0);}
        }
        .animate-slide-in-right { animation: slide-in-right 0.95s cubic-bezier(.53,.11,.47,.99) both; }

        .shadow-glow {
          box-shadow: 0 0 14px rgba(253, 228, 254, 0.6);
        }
      `}</style>
    </div>
  );
};

export default About;