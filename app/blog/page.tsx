"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { User, Calendar, Clock, Heart, MessageSquare, Eye, PenSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

// Mock data for blog posts
const initialPosts = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    excerpt: "Learn how to use React Hooks to simplify your functional components",
    content:
      "React Hooks are a powerful feature that allows you to use state and other React features without writing a class. In this post, we'll explore the most commonly used hooks like useState, useEffect, and useContext...",
    category: "Technical",
    tags: ["react", "hooks", "javascript"],
    date: "2024-05-28",
    readTime: "5 min read",
    author: "Manan",
    likes: 24,
    comments: 8,
    views: 156,
  },
  {
    id: 2,
    title: "Building Responsive Layouts with Tailwind CSS",
    excerpt: "A comprehensive guide to creating beautiful responsive designs with Tailwind",
    content:
      "Tailwind CSS has revolutionized the way we approach CSS by providing a utility-first framework. In this tutorial, we'll build a fully responsive layout using Tailwind's responsive modifiers and explore best practices...",
    category: "Tutorial",
    tags: ["tailwind", "css", "responsive-design"],
    date: "2024-05-20",
    readTime: "8 min read",
    author: "Manan",
    likes: 42,
    comments: 15,
    views: 230,
  },
]

export default function BlogPage() {
  const [posts, setPosts] = useState(initialPosts)
  const [profileVisits, setProfileVisits] = useState(5)
  const [isNewPostOpen, setIsNewPostOpen] = useState(false)
  const [newPost, setNewPost] = useState({
    title: "",
    category: "",
    content: "",
  })
  const [isAdmin, setIsAdmin] = useState(true) // In a real app, this would be determined by authentication
  const { toast } = useToast()

  // Simulate profile visit count
  useEffect(() => {
    // In a real app, this would be an API call to track visits
    const storedVisits = localStorage.getItem("profileVisits")
    if (!storedVisits) {
      localStorage.setItem("profileVisits", "5")
    }
  }, [])

  const handleNewPostSubmit = () => {
    if (!newPost.title || !newPost.category || !newPost.content) {
      toast({
        title: "Missing fields",
        description: "Please fill in all fields before publishing",
        variant: "destructive",
      })
      return
    }

    const newPostObj = {
      id: posts.length + 1,
      title: newPost.title,
      excerpt: newPost.content.substring(0, 120) + "...",
      content: newPost.content,
      category: newPost.category,
      tags: newPost.category
        .toLowerCase()
        .split(",")
        .map((tag) => tag.trim()),
      date: new Date().toISOString().split("T")[0],
      readTime: `${Math.max(1, Math.ceil(newPost.content.length / 1000))} min read`,
      author: "Manan",
      likes: 0,
      comments: 0,
      views: 0,
    }

    setPosts([newPostObj, ...posts])
    setNewPost({ title: "", category: "", content: "" })
    setIsNewPostOpen(false)

    toast({
      title: "Post published!",
      description: "Your post has been published successfully",
    })
  }

  const handleLike = (postId: number) => {
    setPosts(posts.map((post) => (post.id === postId ? { ...post, likes: post.likes + 1 } : post)))
  }

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Blog Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-3">
            <User className="h-8 w-8 text-pink-500" />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Manan's Blog</h1>
              <p className="text-gray-600 dark:text-gray-300">Thoughts, tutorials, daily progress & feedback!</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Badge className="bg-pink-500 text-white px-3 py-1">{profileVisits} Profile Visits</Badge>

            {isAdmin && (
              <Button onClick={() => setIsNewPostOpen(true)} className="bg-pink-500 hover:bg-pink-600 text-white">
                <PenSquare className="h-4 w-4 mr-2" />
                Write New Post
              </Button>
            )}
          </div>
        </div>

        <div className="border-b border-gray-200 dark:border-gray-700 mb-8"></div>

        {/* Blog Posts */}
        {posts.length > 0 ? (
          <div className="space-y-8">
            {posts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">{post.title}</h2>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleLike(post.id)}
                        className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                      >
                        <Heart className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </button>

                      <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
                        <MessageSquare className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </div>

                      <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
                        <Eye className="h-4 w-4" />
                        <span>{post.views}</span>
                      </div>
                    </div>

                    <Button variant="link" className="text-purple-600 dark:text-purple-400 p-0">
                      Read More
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500 dark:text-gray-400">
            <p className="text-xl">No posts available yet. Click "Write New Post" to start!</p>
          </div>
        )}
      </div>

      {/* New Post Dialog */}
      <Dialog open={isNewPostOpen} onOpenChange={setIsNewPostOpen}>
        <DialogContent className="bg-gray-900 text-white border-gray-800 max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">New Blog Post</DialogTitle>
            <DialogDescription className="text-gray-400">Share your thoughts with the world</DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">
                Post Title
              </label>
              <Input
                id="title"
                placeholder="Enter an engaging title for your post..."
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="category" className="text-sm font-medium">
                Category
              </label>
              <Input
                id="category"
                placeholder="e.g., Tech, Personal, Tutorial, Career"
                value={newPost.category}
                onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="content" className="text-sm font-medium">
                Content
              </label>
              <Textarea
                id="content"
                placeholder="Write your blog content here... You can use line breaks to separate paragraphs."
                rows={10}
                value={newPost.content}
                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500"
              />
            </div>

            <div className="text-sm text-gray-400">
              Estimated read time: {Math.max(1, Math.ceil(newPost.content.length / 1000))} min
            </div>

            <div className="flex justify-between">
              <Button onClick={handleNewPostSubmit} className="bg-pink-500 hover:bg-pink-600 text-white">
                <PenSquare className="h-4 w-4 mr-2" />
                Publish Post
              </Button>

              <Button
                variant="outline"
                onClick={() => setIsNewPostOpen(false)}
                className="border-gray-700 text-gray-300 hover:bg-gray-800"
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
