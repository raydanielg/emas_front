"use client"

import { useState, useRef, useEffect } from "react"
import { IconX, IconSend, IconRobot, IconMoodSmile } from "@tabler/icons-react"

type Message = {
  role: "user" | "bot"
  text: string
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hi! I'm EMAS Assistant. How can I help you today?" },
  ])
  const [input, setInput] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  function handleSend(e: React.FormEvent) {
    e.preventDefault()
    if (!input.trim()) return
    setMessages((prev) => [...prev, { role: "user", text: input.trim() }])
    setInput("")
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Coming soon! This feature is under development." },
      ])
    }, 800)
  }

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-primary p-2 pe-5 text-primary-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95"
          aria-label="Need Help? Ask me"
        >
          <div className="flex size-10 items-center justify-center rounded-full bg-primary-foreground/20 text-primary-foreground">
            <IconMoodSmile className="size-6" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm font-bold leading-tight">Need Help?</span>
            <span className="text-xs text-primary-foreground/80 leading-tight">
              Ask me
            </span>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex h-[28rem] w-80 flex-col overflow-hidden rounded-2xl border bg-background shadow-2xl sm:w-96">
          {/* Header */}
          <div className="flex items-center justify-between bg-primary px-4 py-3 text-primary-foreground">
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-full bg-primary-foreground/20">
                <IconRobot className="size-5" />
              </div>
              <div>
                <p className="text-sm font-semibold">EMAS Assistant</p>
                <p className="flex items-center gap-1 text-xs text-primary-foreground/80">
                  <span className="inline-block size-2 rounded-full bg-green-400" />
                  Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1 transition-colors hover:bg-primary-foreground/20"
              aria-label="Close chat"
            >
              <IconX className="size-5" />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto bg-muted/30 p-4"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${
                    msg.role === "user"
                      ? "rounded-br-md bg-primary text-primary-foreground"
                      : "rounded-bl-md bg-background border"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSend}
            className="flex items-center gap-2 border-t bg-background p-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="What you want to ask?"
              className="flex-1 rounded-full bg-muted px-4 py-2 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-40"
              aria-label="Send message"
            >
              <IconSend className="size-4" />
            </button>
          </form>
        </div>
      )}
    </>
  )
}
