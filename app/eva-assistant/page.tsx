"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Settings, Bot, Send, User, Lightbulb, Bell, Shield, Moon, Sun } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function EvaAssistantPage() {
  const { toast } = useToast()
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "eva",
      content: "Hello! I'm your AI assistant. How can I assist you today?",
      timestamp: new Date().toLocaleTimeString(),
    },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [isOnline, setIsOnline] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [fontSize, setFontSize] = useState("medium")
  const [language, setLanguage] = useState("english")
  const [autoSave, setAutoSave] = useState(true)
  const [highContrast, setHighContrast] = useState(false)
  const [notifications, setNotifications] = useState(true)

  useEffect(() => {
    // Apply theme changes
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  useEffect(() => {
    // Apply font size changes
    const sizes = { small: "14px", medium: "16px", large: "18px" }
    document.documentElement.style.fontSize = sizes[fontSize as keyof typeof sizes]
  }, [fontSize])

  useEffect(() => {
    // Apply high contrast changes
    if (highContrast) {
      document.documentElement.classList.add("high-contrast")
    } else {
      document.documentElement.classList.remove("high-contrast")
    }
  }, [highContrast])

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    const userMessage = {
      id: messages.length + 1,
      sender: "user",
      content: newMessage,
      timestamp: new Date().toLocaleTimeString(),
    }

    setMessages([...messages, userMessage])

    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        sender: "eva",
        content: "Thank you for your message! I'm processing your request and will provide you with helpful insights shortly.",
        timestamp: new Date().toLocaleTimeString(),
      }
      setMessages((prev) => [...prev, aiResponse])
    }, 1000)

    setNewMessage("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    toast({
      title: "Theme Updated",
      description: `Switched to ${!darkMode ? "dark" : "light"} mode`,
    })
  }

  const handleNotificationToggle = () => {
    setNotifications(!notifications)
    toast({
      title: "Notifications",
      description: `Notifications ${!notifications ? "enabled" : "disabled"}`,
    })
  }

  const handleAutoSaveToggle = (checked: boolean) => {
    setAutoSave(checked)
    toast({
      title: "Auto Save",
      description: `Auto save ${checked ? "enabled" : "disabled"}`,
    })
  }

  const handleHighContrastToggle = (checked: boolean) => {
    setHighContrast(checked)
    toast({
      title: "High Contrast",
      description: `High contrast mode ${checked ? "enabled" : "disabled"}`,
    })
  }

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-blue-600 rounded-xl">
              <Settings className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Settings & AI Assistant</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Customize your workspace and get professional assistance from our AI consultant
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Profile Settings */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <Card className="bg-white dark:bg-gray-800/30 backdrop-blur-sm h-full">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-gray-900 dark:text-white">
                  <div className="p-2 bg-green-600 rounded-lg">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  Profile Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Theme Mode</span>
                  <Button onClick={toggleTheme} className="bg-blue-600 hover:bg-blue-700 text-white">
                    {darkMode ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
                    {darkMode ? "Light" : "Dark"}
                  </Button>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Font Size</span>
                  <Select value={fontSize} onValueChange={setFontSize}>
                    <SelectTrigger className="w-28 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="large">Large</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Language</span>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger className="w-28 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="nepali">नेपाली</SelectItem>
                      <SelectItem value="hindi">हिन्दी</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Auto Save</span>
                  <Switch checked={autoSave} onCheckedChange={handleAutoSaveToggle} />
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">High Contrast</span>
                  <Switch checked={highContrast} onCheckedChange={handleHighContrastToggle} />
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50 dark:bg-gray-700/50 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600/50 transition-colors" onClick={handleNotificationToggle}>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Notifications</span>
                  <Bell className={`h-5 w-5 ${notifications ? 'text-blue-500' : 'text-gray-400'}`} />
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50 dark:bg-gray-700/50 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600/50 transition-colors">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Privacy & Security</span>
                  <Shield className="h-5 w-5 text-green-500" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* AI Consultant */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <Card className="bg-white dark:bg-gray-800/30 backdrop-blur-sm h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-3 text-gray-900 dark:text-white">
                    <div className="p-2 bg-blue-600 rounded-lg">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                    Eva Assistant
                  </CardTitle>
                  <Badge className={`${isOnline ? "bg-green-500" : "bg-gray-500"} text-white`}>
                    {isOnline ? "Online" : "Offline"}
                  </Badge>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Professional assistant for technical guidance</p>
              </CardHeader>
              <CardContent>
                {/* Chat Messages */}
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-3 h-48 overflow-y-auto mb-4 space-y-2">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-xs p-2 rounded-lg text-sm ${
                          message.sender === "user"
                            ? "bg-blue-600 text-white"
                            : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          {message.sender === "eva" ? (
                            <Bot className="h-3 w-3 text-blue-600" />
                          ) : (
                            <User className="h-3 w-3" />
                          )}
                          <span className="text-xs opacity-70">
                            {message.sender === "eva" ? "Eva" : "You"}
                          </span>
                        </div>
                        <p className="text-xs leading-relaxed">{message.content}</p>
                        <span className="text-xs opacity-50 mt-1 block">{message.timestamp}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="flex gap-2">
                  <Input
                    placeholder="Ask Eva anything..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-sm"
                  />
                  <Button onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-700 text-white px-3">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
