import { LoginForm } from "@/components/login-form"
import { ChatBot } from "@/components/chat-bot"

export default function Page() {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/27312130_green_halftone_border_background.jpg')" }}
      />
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      <div className="relative w-full max-w-sm md:max-w-4xl">
        <LoginForm />
      </div>
      <ChatBot />
    </div>
  )
}
