"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, ThumbsUp, MessageSquare, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function TipsPage() {
  const [tips, setTips] = useState([
    {
      id: 1,
      title: "Optimize React Renders",
      content: "Use React.memo, useMemo, and useCallback to prevent unnecessary re-renders in your React components.",
      category: "React",
      likes: 24,
      comments: 5,
      author: "Manan",
      date: "2 days ago",
    },
    {
      id: 2,
      title: "CSS Grid Layout Tip",
      content:
        "For complex layouts, combine CSS Grid with Flexbox. Use Grid for the overall layout structure and Flexbox for alignment within grid items.",
      category: "CSS",
      likes: 18,
      comments: 3,
      author: "Manan",
      date: "1 week ago",
    },
    {
      id: 3,
      title: "TypeScript Type Narrowing",
      content:
        "Use type guards like 'typeof', 'instanceof', and custom type predicates to narrow down types in TypeScript for better type safety.",
      category: "TypeScript",
      likes: 32,
      comments: 7,
      author: "Manan",
      date: "2 weeks ago",
    },
  ])

  const [newComment, setNewComment] = useState("")
  const [activeCommentId, setActiveCommentId] = useState<number | null>(null)

  const handleLike = (tipId: number) => {
    setTips(tips.map((tip) => (tip.id === tipId ? { ...tip, likes: tip.likes + 1 } : tip)))
  }

  const handleComment = (tipId: number) => {
    if (activeCommentId === tipId) {
      setActiveCommentId(null)
    } else {
      setActiveCommentId(tipId)
    }
  }

  const submitComment = (tipId: number) => {
    if (!newComment.trim()) return

    setTips(tips.map((tip) => (tip.id === tipId ? { ...tip, comments: tip.comments + 1 } : tip)))

    setNewComment("")
    setActiveCommentId(null)
  }

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Lightbulb className="h-8 w-8 text-yellow-500" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Developer Tips</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Quick tips and tricks to improve your development workflow and coding skills
          </p>
        </motion.div>

        <div className="space-y-6">
          {tips.map((tip, index) => (
            <motion.div
              key={tip.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white dark:bg-gray-800/30 backdrop-blur-sm overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">{tip.category}</Badge>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{tip.date}</div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white mt-2">{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">{tip.content}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="bg-purple-200 text-purple-800 text-xs">
                          {tip.author.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{tip.author}</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleLike(tip.id)}
                        className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400"
                      >
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        <span>{tip.likes}</span>
                      </Button>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleComment(tip.id)}
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                      >
                        <MessageSquare className="h-4 w-4 mr-1" />
                        <span>{tip.comments}</span>
                      </Button>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400"
                      >
                        <Share2 className="h-4 w-4 mr-1" />
                        <span>Share</span>
                      </Button>
                    </div>
                  </div>

                  {activeCommentId === tip.id && (
                    <div className="mt-4 flex gap-2">
                      <Input
                        placeholder="Add a comment..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                      />
                      <Button
                        onClick={() => submitComment(tip.id)}
                        className="bg-purple-600 hover:bg-purple-700 text-white"
                      >
                        Post
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
