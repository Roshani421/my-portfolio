import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

// This would typically come from a database or CMS
const blogPosts = [
  {
    id: "1",
    title: "My Journey into Software Engineering",
    content: `
      <h2>The Beginning</h2>
      <p>Starting my journey in software engineering has been an incredible adventure filled with challenges, discoveries, and growth. When I first enrolled at Gandaki College of Engineering and Science, I had no idea how much this field would captivate me.</p>
      
      <h2>Learning and Growing</h2>
      <p>Throughout my Bachelor's degree in Software Engineering, I discovered my passion for creating digital solutions that make a real difference. From my first "Hello World" program to building complex web applications, every step has been a learning experience.</p>
      
      <h2>Key Milestones</h2>
      <ul>
        <li>First successful web application</li>
        <li>Learning React.js and modern web development</li>
        <li>Starting freelance work on Upwork</li>
        <li>Coordinating the GCES IT Expo</li>
        <li>Building projects that solve real problems</li>
      </ul>
      
      <h2>Looking Forward</h2>
      <p>As I continue this journey, I'm excited about the possibilities ahead. Technology is constantly evolving, and I'm committed to growing with it, always learning, and contributing to meaningful projects.</p>
    `,
    category: "Personal",
    tags: ["journey", "learning", "growth"],
    date: "2024-01-15",
    readTime: "5 min read",
  },
  // Add more blog posts here
]

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Button
            variant="outline"
            asChild
            className="border-gray-300 dark:border-white/20 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
          >
            <Link href="/#blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>

        <article className="bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 backdrop-blur-sm rounded-lg p-8">
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Badge
                variant="outline"
                className="border-purple-600/30 dark:border-purple-400/30 text-purple-700 dark:text-purple-300"
              >
                {post.category}
              </Badge>
              <div className="flex items-center gap-4 text-gray-500 dark:text-white/60 text-sm">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{post.title}</h1>

            <div className="flex flex-wrap gap-2">
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
          </header>

          <div
            className="prose prose-gray dark:prose-invert prose-purple max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  )
}
