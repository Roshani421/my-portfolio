"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, Plus, Search } from "lucide-react"
import Link from "next/link"

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const blogPosts = [
    {
      id: 1,
      title: "My Journey into Software Engineering",
      excerpt:
        "Reflecting on my path from a curious student to a passionate software engineer, and the lessons learned along the way.",
      content:
        "Starting my journey in software engineering has been an incredible adventure filled with challenges, discoveries, and growth...",
      category: "Personal",
      tags: ["journey", "learning", "growth"],
      date: "2024-01-15",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: 2,
      title: "Building Responsive Web Applications with React",
      excerpt:
        "Tips and best practices for creating beautiful, responsive web applications using React.js and modern CSS techniques.",
      content: "In today's mobile-first world, creating responsive web applications is crucial for user experience...",
      category: "Technical",
      tags: ["react", "responsive", "css"],
      date: "2024-01-10",
      readTime: "8 min read",
      featured: false,
    },
    {
      id: 3,
      title: "The Power of TypeScript in Modern Development",
      excerpt: "Why TypeScript has become my go-to language for building scalable and maintainable applications.",
      content:
        "TypeScript has revolutionized the way I approach JavaScript development, providing type safety and better tooling...",
      category: "Technical",
      tags: ["typescript", "javascript", "development"],
      date: "2024-01-05",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: 4,
      title: "Lessons from Coordinating the GCES IT Expo",
      excerpt: "What I learned about leadership, teamwork, and event management while coordinating a major tech event.",
      content:
        "Coordinating the 10th GCES IT Expo was one of the most challenging yet rewarding experiences of my academic career...",
      category: "Experience",
      tags: ["leadership", "event-management", "teamwork"],
      date: "2024-01-01",
      readTime: "7 min read",
      featured: true,
    },
  ]

  const categories = ["all", "Personal", "Technical", "Experience"]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <section id="blog" className="py-20 bg-white dark:bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Story & Thoughts</h2>
          <p className="text-lg text-gray-600 dark:text-white/80 max-w-2xl mx-auto">
            Sharing my experiences, learnings, and insights from my journey in software engineering
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-4 mb-12"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-white/40" />
            <Input
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white dark:bg-white/5 border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-white/40"
            />
          </div>
          <div className="flex gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500 text-white"
                    : "border-gray-300 dark:border-white/20 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
                }`}
              >
                {category === "all" ? "All" : category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 backdrop-blur-sm hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 h-full group ${
                  post.featured ? "ring-2 ring-purple-600/30 dark:ring-purple-400/30" : ""
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge
                      variant="outline"
                      className="border-purple-600/30 dark:border-purple-400/30 text-purple-700 dark:text-purple-300"
                    >
                      {post.category}
                    </Badge>
                    {post.featured && (
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">Featured</Badge>
                    )}
                  </div>
                  <CardTitle className="text-gray-900 dark:text-white text-lg group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-white/70">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-gray-500 dark:text-white/60 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-white/90 text-xs"
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-white/20 text-white hover:bg-white/10"
                    asChild
                  >
                    <Link href={`/blog/${post.id}`}>Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Quick Post Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Quick Thought
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-white/70">
                Share a quick update or thought
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Post title..."
                className="bg-gray-50 dark:bg-white/5 border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-white/40"
              />
              <Textarea
                placeholder="What's on your mind?"
                rows={3}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
              />
              <div className="flex gap-2">
                <Input
                  placeholder="Tags (comma separated)"
                  className="bg-gray-50 dark:bg-white/5 border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-white/40"
                />
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500 text-white">
                  Post
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
