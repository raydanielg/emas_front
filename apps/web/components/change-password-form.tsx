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
import {
  IconLock,
  IconLoader2,
  IconEye,
  IconEyeOff,
  IconCheck,
  IconArrowLeft,
} from "@tabler/icons-react"
import { useState } from "react"

export function ChangePasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)

  const passwordsMatch = password === confirmPassword && password.length > 0

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!passwordsMatch) return
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsSuccess(true)
      setTimeout(() => {
        window.location.href = "/"
      }, 2000)
    }, 3000)
  }

  if (isSuccess) {
    return (
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <Card className="overflow-hidden p-0 shadow-xl">
          <CardContent className="grid p-0 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center gap-4 p-6 md:p-10">
              <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <IconCheck className="size-8" />
              </div>
              <h1 className="text-2xl font-bold">Password changed!</h1>
              <p className="text-balance text-center text-muted-foreground">
                Your password has been successfully changed. Redirecting to
                login...
              </p>
            </div>
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
                <h1 className="text-2xl font-bold">Change password</h1>
                <p className="text-balance text-muted-foreground">
                  Enter your new password below
                </p>
              </div>

              <Field>
                <FieldLabel htmlFor="password">New password</FieldLabel>
                <div className="relative">
                  <IconLock className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter new password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="ps-9 pe-9"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 right-2.5 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <IconEyeOff className="size-4" />
                    ) : (
                      <IconEye className="size-4" />
                    )}
                  </button>
                </div>
              </Field>

              <Field>
                <FieldLabel htmlFor="confirmPassword">
                  Confirm password
                </FieldLabel>
                <div className="relative">
                  <IconLock className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    type={showConfirm ? "text" : "password"}
                    placeholder="Confirm new password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="ps-9 pe-9"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute top-1/2 right-2.5 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={showConfirm ? "Hide password" : "Show password"}
                  >
                    {showConfirm ? (
                      <IconEyeOff className="size-4" />
                    ) : (
                      <IconEye className="size-4" />
                    )}
                  </button>
                </div>
                {confirmPassword.length > 0 && !passwordsMatch && (
                  <p className="text-sm text-destructive">
                    Passwords do not match
                  </p>
                )}
                {confirmPassword.length > 0 && passwordsMatch && (
                  <p className="text-sm text-primary">Passwords match</p>
                )}
              </Field>

              <Field>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading || !passwordsMatch}
                >
                  {isLoading ? (
                    <>
                      <IconLoader2 className="size-4 animate-spin" />
                      Please wait...
                    </>
                  ) : (
                    "Change password"
                  )}
                </Button>
              </Field>

              <FieldDescription className="text-center">
                <a
                  href="/forgot-password"
                  className="inline-flex items-center gap-1.5 text-sm underline-offset-2 hover:underline"
                >
                  <IconArrowLeft className="size-4" />
                  Back
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
