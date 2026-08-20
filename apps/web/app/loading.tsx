import { Skeleton } from "@workspace/ui/components/skeleton"
import { Card, CardContent } from "@workspace/ui/components/card"

export default function LoginSkeleton() {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/27312130_green_halftone_border_background.jpg')" }}
      />
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      <div className="relative w-full max-w-sm md:max-w-4xl">
        <Card className="overflow-hidden p-0 shadow-xl">
          <CardContent className="grid p-0 md:grid-cols-2">
            <div className="p-6 md:p-10">
              <div className="flex flex-col items-center gap-2 text-center">
                <Skeleton className="size-16 rounded-full" />
                <Skeleton className="h-7 w-40" />
                <Skeleton className="h-4 w-56" />
              </div>
              <div className="mt-6 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-9 w-full" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                  <Skeleton className="h-9 w-full" />
                </div>
                <Skeleton className="h-9 w-full" />
                <Skeleton className="mx-auto h-4 w-48" />
              </div>
            </div>
            <div className="relative hidden bg-muted md:block">
              <Skeleton className="absolute inset-0 h-full w-full" />
            </div>
          </CardContent>
        </Card>
        <Skeleton className="mx-auto mt-6 h-4 w-72" />
      </div>
    </div>
  )
}
