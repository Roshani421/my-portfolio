"use client";

import { CalendarCheck, Target, GraduationCap, Clock, BookOpenCheck, Bolt, TrendingUp, Heart, Code, Users, Star, Coffee } from "lucide-react";
import { Card } from "@/components/ui/card";

const timelineData = [
  {
    year: "2016",
    title: "The Beginning",
    icon: <Star className="text-yellow-500 w-5 h-5" />,
    description: "Completed School Leaving Certificate from Dhawalagiri Secondary School. First exposure to computers sparked my curiosity about technology.",
    achievements: ["Academic Excellence", "First Computer Interaction", "Tech Curiosity Born"]
  },
  {
    year: "2018",
    title: "Science Foundation",
    icon: <GraduationCap className="text-blue-500 w-5 h-5" />,
    description: "Completed Higher Secondary Education with Science Major from Pokhara Secondary School. Dove deeper into mathematics and logical thinking.",
    achievements: ["Science Major Graduate", "Mathematical Foundation", "Logical Problem Solving"]
  },
  {
    year: "2020",
    title: "Freelance Journey Begins",
    icon: <Code className="text-green-500 w-5 h-5" />,
    description: "Started freelancing on Upwork as a Frontend Developer. First taste of real-world projects and client interactions.",
    achievements: ["First Client Project", "React.js Mastery", "International Collaboration"]
  },
  {
    year: "2021-2023",
    title: "Growth & Learning",
    icon: <TrendingUp className="text-purple-500 w-5 h-5" />,
    description: "Expanded skills in modern web technologies, built numerous projects, and established a strong client base on Upwork.",
    achievements: ["50+ Projects Completed", "Advanced React Skills", "Client Satisfaction 98%"]
  },
  {
    year: "2024",
    title: "Engineering Graduate",
    icon: <GraduationCap className="text-pink-600 w-5 h-5" />,
    description: "Graduated with Bachelor in Software Engineering from Gandaki College of Engineering and Science, Pokhara University.",
    achievements: ["Software Engineering Degree", "Academic Excellence", "Technical Leadership"]
  },
  {
    year: "Present",
    title: "Building the Future",
    icon: <Heart className="text-red-500 w-5 h-5" />,
    description: "Continuing to create impactful web applications, mentoring other developers, and contributing to the tech community.",
    achievements: ["Ongoing Projects", "Community Mentoring", "Tech Innovation"]
  }
];

const goalsData = [
  {
    period: "Daily",
    icon: <Bolt className="text-pink-400 w-5 h-5" />,
    highlights: [
      "Morning Journal: Write 2 sentences about yesterday's learning.",
      "Code 20 minutes before breakfast.",
      "Read 10 pages from a tech or inspiration book.",
      "Share 1 positive support message in a women-in-tech community.",
    ],
  },
  {
    period: "Weekly",
    icon: <BookOpenCheck className="text-purple-500 w-5 h-5" />,
    highlights: [
      "Contribute to open source (even a tiny PR!).",
      "Publish a quick blog post (progress, struggles, or aha-moments).",
      "Network: DM one woman in tech to encourage her week.",
      "Reflect on improvements and plan next week's focus.",
    ],
  },
  {
    period: "Monthly",
    icon: <TrendingUp className="text-yellow-500 w-5 h-5" />,
    highlights: [
      "Finish a project milestone or side project demo.",
      "Teach or assist at a local code event (even online).",
      "Update portfolio with new learnings or fun UI tweaks.",
      "Reach out to a mentor for feedback.",
    ],
  },
  {
    period: "Yearly",
    icon: <GraduationCap className="text-pink-600 w-5 h-5" />,
    highlights: [
      "Take on a mentoring position for younger aspiring developers.",
      "Prepare/present a talk at a conference, local or online.",
      "Complete a major personal or professional project.",
      "Write an annual 'What I learned' blog post.",
    ],
  },
  {
    period: "Future Vision",
    icon: <Heart className="text-purple-400 w-5 h-5" />,
    highlights: [
      "Speak at global women in tech events.",
      "Create resources and fund bootcamps for underrepresented girls.",
      "Launch a successful tech startup focused on social impact.",
      "Champion inclusive teams and tech education globally.",
    ],
  },
];

const Timeline = () => (
  <div className="min-h-screen bg-gradient-to-br from-softPink via-softPurple to-pastelYellow dark:from-[#1a0d1f] dark:via-[#432451] dark:to-[#f9b5e6] py-8 px-2 sm:px-4 font-sans transition-colors duration-500">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-7 text-primary dark:text-pink-200 drop-shadow-lg hover:text-pink-600 dark:hover:text-pink-100 transition-colors duration-300 cursor-pointer">
        My Journey & Future Goals
      </h1>
      
      {/* Personal Timeline */}
      <div className="mb-12">
        <h2 className="text-2xl font-playfair font-bold text-center mb-8 text-purple-700 dark:text-purple-300 hover:text-purple-600 dark:hover:text-purple-200 transition-colors duration-300 cursor-pointer">
          Personal Timeline
        </h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-300 to-purple-400"></div>
          
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <div key={index} className="relative flex items-start gap-6 animate-fade-in">
                <div className="relative z-10 bg-white dark:bg-purple-900 border-4 border-pink-100 dark:border-purple-600 rounded-full p-3 shadow-lg hover:scale-110 hover:border-pink-200 dark:hover:border-purple-500 transition-all duration-300 cursor-pointer group">
                  <div className="hover:animate-bounce transition-all duration-300">
                    {item.icon}
                  </div>
                </div>
                <Card className="flex-1 bg-white/95 dark:bg-purple-900/70 border border-pink-100 dark:border-pink-600 px-6 py-5 rounded-xl shadow-xl hover:scale-[1.01] hover:shadow-pink-100/30 dark:hover:shadow-pink-700 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold hover:bg-pink-600 dark:hover:bg-pink-400 transition-colors duration-300 group-hover:scale-105">
                      {item.year}
                    </span>
                    <h3 className="font-playfair text-xl font-bold text-pink-700 dark:text-pink-200 hover:text-pink-600 dark:hover:text-pink-100 transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.achievements.map((achievement, i) => (
                      <span
                        key={i}
                        className="bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium hover:bg-purple-200 dark:hover:bg-purple-700 hover:scale-105 transition-all duration-300 cursor-pointer"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Goals & Action Plan */}
      <div>
        <h2 className="text-2xl font-playfair font-bold text-center mb-8 text-purple-700 dark:text-purple-300 hover:text-purple-600 dark:hover:text-purple-200 transition-colors duration-300 cursor-pointer">
          Action Timeline & Growth Dashboard
        </h2>
        <ul className="flex flex-col gap-8 animate-fade-in">
          {goalsData.map(goal => (
            <li key={goal.period} className="flex items-start gap-4 relative">
              <span className="mt-1 shrink-0 bg-white dark:bg-purple-900 border-4 border-pink-100 dark:border-purple-600 rounded-full p-2 shadow-lg hover:scale-110 hover:border-pink-200 dark:hover:border-purple-500 transition-all duration-300 cursor-pointer group">
                <div className="hover:animate-bounce transition-all duration-300">
                  {goal.icon}
                </div>
              </span>
              <Card className="flex-1 bg-white/95 dark:bg-purple-900/70 border border-pink-100 dark:border-pink-600 px-5 py-4 rounded-xl shadow-xl hover:scale-[1.01] hover:shadow-pink-100/30 dark:hover:shadow-pink-700 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                <div className="font-semibold text-pink-700 dark:text-pink-200 mb-1 hover:text-pink-600 dark:hover:text-pink-100 transition-colors duration-300">{goal.period}</div>
                <ul className="text-gray-800 dark:text-gray-200 text-base ml-3 list-disc space-y-1">
                  {goal.highlights.map((h, i) => (
                    <li key={i} className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300">{h}</li>
                  ))}
                </ul>
              </Card>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 text-center text-gray-600 dark:text-pink-100 font-mono animate-fade-in text-base italic bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20 dark:border-pink-500/20 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 cursor-pointer group">
        <p className="hover:text-gray-800 dark:hover:text-pink-50 transition-colors duration-300 text-lg">
          "Every expert was once a beginner. Every pro was once an amateur. Every icon was once an unknown."
        </p>
        <span className="text-2xl group-hover:animate-pulse">✨</span>
      </div>
    </div>

    {/* Custom animations matching About page */}
    <style jsx>{`
      @keyframes fade-in {
        0% { opacity: 0; transform: translateY(10px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in {
        animation: fade-in 0.8s cubic-bezier(.61,.05,.46,1.01) both;
      }
    `}</style>
  </div>
);

export default Timeline;
