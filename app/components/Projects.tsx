"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2 } from "lucide-react"

export default function Projects() {
  const workExperiences = [
    {
      title: "Frontend Developer (Freelancer)",
      company: "Upwork",
      period: "2020 to Present",
      icon: Building2,
      responsibilities: [
        {
          text: "Design and build responsive, user-focused web interfaces using ",
          highlights: ["React.js", "HTML", "CSS", "JavaScript"],
          colors: {
            "React.js": "text-blue-500",
            HTML: "text-orange-500",
            CSS: "text-yellow-500",
            JavaScript: "text-orange-500",
          },
        },
        {
          text: "Collaborate with international clients to transform concepts into custom web applications, always aiming to exceed expectations and maximize user satisfaction.",
          highlights: [],
          colors: {},
        },
        {
          text: "Write maintainable and high-performance code, ensuring seamless experiences on mobile, tablet, and desktop devices.",
          highlights: [],
          colors: {},
        },
        {
          text: "Integrate third-party APIs and external services, delivering advanced functionality for tailored solutions.",
          highlights: [],
          colors: {},
        },
        {
          text: "Consistently adopt and explore new technologies in the frontend ecosystem to enhance project scalability and code quality.",
          highlights: [],
          colors: {},
        },
        {
          text: "Manage multiple projects simultaneously—keeping communication clear and deadlines on track for every client.",
          highlights: [],
          colors: {},
        },
        {
          text: "Provide post-launch support and continuous improvements to ensure sustained project success and client happiness.",
          highlights: [],
          colors: {},
        },
      ],
    },
    {
      title: "Event Coordinator",
      company: "Gandaki College of Engineering and Science (GCES)",
      period: "Jun-Aug, 2024",
      icon: Building2,
      responsibilities: [
        {
          text: "Coordinated and successfully executed the 10th GCES IT Expo, focusing on digital solutions and innovation.",
          highlights: [],
          colors: {},
        },
        {
          text: "Developed and implemented an online QR-based voting system using ",
          highlights: ["React.js", "Node.js"],
          colors: {
            "React.js": "text-blue-500",
            "Node.js": "text-green-500",
          },
        },
        {
          text: "Ensured the event's success through strategic planning, effective delegation, and creative problem-solving.",
          highlights: [],
          colors: {},
        },
      ],
    },
    {
      title: "Python Intern",
      company: "MoreTech Global",
      period: "6 months",
      icon: Building2,
      responsibilities: [
        {
          text: "Completed a comprehensive internship focused on ",
          highlights: ["Python"],
          colors: {
            Python: "text-blue-600",
          },
        },
        {
          text: "Gained hands-on experience in coding, debugging, and optimizing Python-based applications for real-world scenarios.",
          highlights: [],
          colors: {},
        },
        {
          text: "Collaborated with senior developers on various projects, enhancing technical skills and understanding of software development lifecycle.",
          highlights: [],
          colors: {},
        },
      ],
    },
  ]

  const renderHighlightedText = (responsibility: any) => {
    const text = responsibility.text
    const highlights = responsibility.highlights
    const colors = responsibility.colors

    if (highlights.length === 0) {
      return <span>{text}</span>
    }

    // Split text and highlight the specified terms
    const parts = []
    let lastIndex = 0

    highlights.forEach((highlight: string) => {
      const index = text.indexOf(highlight, lastIndex)
      if (index !== -1) {
        // Add text before highlight
        if (index > lastIndex) {
          parts.push(text.substring(lastIndex, index))
        }
        // Add highlighted text
        parts.push(
          <span key={highlight} className={colors[highlight] || "text-purple-500 font-medium"}>
            {highlight}
          </span>,
        )
        lastIndex = index + highlight.length
      }
    })

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex))
    }

    return <span>{parts}</span>
  }

  return (
    <section id="work" className="py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Card Container */}
          <Card className="bg-white/95 dark:bg-white/10 backdrop-blur-lg border-0 shadow-2xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8">
                Work Experience
              </CardTitle>
            </CardHeader>

            <CardContent className="px-8 pb-8">
              <div className="space-y-12">
                {workExperiences.map((experience, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    {/* Job Title */}
                    <div className="text-center">
                      <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 text-lg font-medium">
                        {experience.title}
                      </Badge>
                    </div>

                    {/* Company and Period */}
                    <div className="flex items-center justify-center gap-4 text-lg">
                      <div className="flex items-center gap-2">
                        <experience.icon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                        <span className="font-semibold text-purple-600 dark:text-purple-400">{experience.company}</span>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400">|</span>
                      <span className="text-gray-600 dark:text-gray-300">{experience.period}</span>
                    </div>

                    {/* Responsibilities */}
                    <div className="space-y-4">
                      {experience.responsibilities.map((responsibility, respIndex) => (
                        <div key={respIndex} className="flex items-start gap-3">
                          <span className="text-purple-500 mt-2 text-lg">•</span>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                            {renderHighlightedText(responsibility)}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Divider (except for last item) */}
                    {index < workExperiences.length - 1 && (
                      <div className="border-t border-gray-200 dark:border-gray-600 pt-8"></div>
                    )}
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
