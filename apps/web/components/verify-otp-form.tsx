"use client"

import { cn } from "@workspace/ui/lib/utils"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent } from "@workspace/ui/components/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
} from "@workspace/ui/components/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@workspace/ui/components/input-otp"
import { IconLoader2, IconArrowLeft, IconShieldCheck } from "@tabler/icons-react"
import { useState } from "react"

export function VerifyOtpForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [isLoading, setIsLoading] = useState(false)
  const [otp, setOtp] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (otp.length < 6) return
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/change-password"
    }, 3000)
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0 shadow-xl">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-10" onSubmit={handleSubmit}>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <IconShieldCheck className="size-8" />
                </div>
                <h1 className="text-2xl font-bold">Verify your email</h1>
                <p className="text-balance text-muted-foreground">
                  Enter the 6-digit code sent to your email address
                </p>
              </div>

              <Field>
                <div className="flex justify-center py-4">
                  <InputOTP
                    maxLength={6}
                    value={otp}
                    onChange={(value) => setOtp(value)}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} className="size-12 text-base" />
                      <InputOTPSlot index={1} className="size-12 text-base" />
                      <InputOTPSlot index={2} className="size-12 text-base" />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={3} className="size-12 text-base" />
                      <InputOTPSlot index={4} className="size-12 text-base" />
                      <InputOTPSlot index={5} className="size-12 text-base" />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </Field>

              <Field>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading || otp.length < 6}
                >
                  {isLoading ? (
                    <>
                      <IconLoader2 className="size-4 animate-spin" />
                      Please wait...
                    </>
                  ) : (
                    "Verify code"
                  )}
                </Button>
              </Field>

              <FieldDescription className="text-center">
                Didn&apos;t receive a code?{" "}
                <button
                  type="button"
                  className="font-medium text-primary underline-offset-2 hover:underline"
                >
                  Resend code
                </button>
              </FieldDescription>

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
