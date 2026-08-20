"use client"

import { cn } from "@workspace/ui/lib/utils"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent } from "@workspace/ui/components/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import { IconMail, IconLoader2, IconArrowLeft } from "@tabler/icons-react"
import { useState } from "react"

export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [isLoading, setIsLoading] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/verify-otp"
    }, 3000)
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0 shadow-xl">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-10" onSubmit={handleSubmit}>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <img
                  src="/app_logo.webp"
                  alt="EMAS Logo"
                  className="size-16 object-contain"
                />
                <h1 className="text-2xl font-bold">Forgot password?</h1>
                <p className="text-balance text-muted-foreground">
                  Enter your email and we&apos;ll send you a verification code
                </p>
              </div>

              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <div className="relative">
                  <IconMail className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="ps-9"
                  />
                </div>
              </Field>
              <Field>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <IconLoader2 className="size-4 animate-spin" />
                      Please wait...
                    </>
                  ) : (
                    "Send verification code"
                  )}
                </Button>
              </Field>

              <FieldDescription className="text-center">
                <a
                  href="/"
                  className="inline-flex items-center gap-1.5 text-sm underline-offset-2 hover:underline"
                >
                  <IconArrowLeft className="size-4" />
                  Back to login
                </a>
              </FieldDescription>
            </FieldGroup>
          </form>
          <div className="relative hidden bg-muted md:block">
            <img
              src="/27312130_green_halftone_border_background.jpg"
              alt="EMAS background"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-primary/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-primary-foreground">
              <blockquote className="text-lg font-medium leading-snug">
                "Empowering teams to achieve more, together."
              </blockquote>
              <p className="mt-2 text-sm text-primary-foreground/80">
                — EMAS Platform
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
