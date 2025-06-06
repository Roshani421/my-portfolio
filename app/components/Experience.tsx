"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      type: "work",
      title: "Frontend Developer (Freelancer)",
      company: "Upwork",
      location: "Remote",
      period: "2020 - Present",
      description: [
        "Design and build responsive, user-focused web interfaces using React.js, HTML, CSS, and JavaScript",
        "Work closely with clients to understand their goals and deliver custom web applications",
        "Create clean, maintainable, and efficient code, ensuring websites are optimized for performance",
        "Implement and integrate third-party APIs and services, ensuring smooth functionality",
        "Stay up-to-date with the latest technologies and trends, continuously improving development practices",
        "Provide ongoing support and maintenance after project completion",
      ],
      skills: ["React.js", "JavaScript", "HTML/CSS", "API Integration", "Client Communication"],
    },
    {
      type: "work",
      title: "Event Coordinator",
      company: "Gandaki College of Engineering and Science (GCES)",
      location: "Pokhara, Nepal",
      period: "Jun-Aug, 2024",
      description: [
        "Coordinated and successfully executed the 10th GCES IT Expo, focusing on digital solutions",
        "Developed and implemented an online QR-based voting system, enhancing event efficiency",
        "Ensured the event's success through strategic planning, effective delegation, and problem-solving",
      ],
      skills: ["Event Management", "Project Coordination", "Team Leadership", "Digital Solutions"],
    },
    {
      type: "work",
      title: "Python Intern",
      company: "MoreTech Global",
      location: "Pokhara, Nepal",
      period: "6 months",
      description: [
        "Completed a 6-month internship focused on Python development",
        "Gained hands-on experience in coding, debugging, and optimizing Python-based applications",
        "Collaborated with senior developers on various projects, enhancing technical skills",
      ],
      skills: ["Python", "Debugging", "Application Development", "Team Collaboration"],
    },
  ]

  const education = [
    {
      degree: "Bachelor in Software Engineering",
      institution: "Pokhara University, Gandaki College of Engineering and Science",
      location: "Pokhara, Nepal",
      period: "Sep, 2024",
      status: "Graduated",
    },
    {
      degree: "Higher Secondary Education (Science Major)",
      institution: "Pokhara Secondary School",
      location: "Pokhara, Nepal",
      period: "Jul, 2018",
      status: "Completed",
    },
    {
      degree: "School Leaving Certificate",
      institution: "Dhawalagiri Secondary School",
      location: "Milanchowk Hemja, Pokhara, Nepal",
      period: "Apr, 2016",
      status: "Completed",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience & Education</h2>
          <p className="text-lg text-gray-600 dark:text-white/80 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              Work Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 backdrop-blur-sm hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-gray-900 dark:text-white text-lg">{exp.title}</CardTitle>
                        <CardDescription className="text-purple-600 dark:text-purple-300 font-medium">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="border-purple-400/30 text-purple-300">
                        {exp.period}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-white/60 text-sm">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-600 dark:text-white/80 text-sm flex items-start gap-2">
                          <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-white/90 text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-white text-lg">{edu.degree}</CardTitle>
                        <CardDescription className="text-purple-300 font-medium">{edu.institution}</CardDescription>
                      </div>
                      <Badge
                        className={`${
                          edu.status === "Graduated" ? "bg-green-500/20 text-green-300" : "bg-blue-500/20 text-blue-300"
                        }`}
                      >
                        {edu.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-white/60 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {edu.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
