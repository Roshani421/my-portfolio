"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Code, Lightbulb, Heart } from "lucide-react"

export default function About() {
  const highlights = [
    {
      icon: User,
      title: "About Me",
      description:
        "I am Roshani Subedi, a graduate with a Bachelor's degree in Software Engineering. With a strong passion for technology and a proactive approach to innovation, I thrive on exploring the latest advancements in this dynamic field.",
    },
    {
      icon: Code,
      title: "Technical Expertise",
      description:
        "Committed to staying ahead in these rapidly evolving industries, my expertise and enthusiasm position me as a valuable asset to any team.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description:
        "I bring a unique perspective and a knack for creative problem-solving, inspired by my deep-seated passion for technology.",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "Passionate about creating beautiful, impactful, and meaningful digital products that make a difference in people's lives.",
    },
  ]

  const skills = {
    "Programming Languages": ["TypeScript", "JavaScript", "PHP", "Python"],
    Frontend: ["React.js", "Next.js", "HTML", "CSS"],
    Backend: ["Node.js", "Express.js", "GraphQL", "tRPC"],
    Database: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    "Tools & Services": ["Firebase", "Strapi", "Docker", "Socket.io"],
    Security: ["OWASP Top 10"],
  }

  return (
    <section id="about" className="py-20 bg-white dark:bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-white/80 max-w-2xl mx-auto">
            A passionate Software Engineer from Nepal, dedicated to creating innovative digital solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500 rounded-lg">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                      <p className="text-gray-600 dark:text-white/80 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Technical Skills</h3>
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="space-y-3">
                <h4 className="text-lg font-medium text-gray-800 dark:text-white/90">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="border-purple-600/30 dark:border-purple-400/30 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-400/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
