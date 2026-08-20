"use client"

import { Separator } from "@workspace/ui/components/separator"
import { SidebarTrigger } from "@workspace/ui/components/sidebar"
import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import { IconSun, IconMoon, IconBell, IconCheck } from "@tabler/icons-react"
import { useTheme } from "next-themes"

export function SiteHeader() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ms-1" />
        <Separator
          orientation="vertical"
          className="mx-2 h-4 data-vertical:self-auto"
        />
        <h1 className="text-base font-medium">Dashboard</h1>

        <div className="ms-auto flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {resolvedTheme === "dark" ? (
              <IconSun className="size-5" />
            ) : (
              <IconMoon className="size-5" />
            )}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative"
                  aria-label="Notifications"
                >
                  <IconBell className="size-5" />
                  <span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-primary" />
                </Button>
              }
            />
            <DropdownMenuContent align="end" className="w-72">
              <div className="flex items-center justify-between px-2 py-1.5">
                <span className="text-sm font-semibold">Notifications</span>
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                  3 new
                </span>
              </div>
              <DropdownMenuItem className="flex flex-col items-start gap-1 py-2">
                <div className="flex w-full items-center gap-2">
                  <IconCheck className="size-4 text-primary" />
                  <span className="text-sm font-medium">New user registered</span>
                </div>
                <span className="ps-6 text-xs text-muted-foreground">
                  A new team member just joined
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start gap-1 py-2">
                <div className="flex w-full items-center gap-2">
                  <IconCheck className="size-4 text-primary" />
                  <span className="text-sm font-medium">Report ready</span>
                </div>
                <span className="ps-6 text-xs text-muted-foreground">
                  Your monthly report is available
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start gap-1 py-2">
                <div className="flex w-full items-center gap-2">
                  <IconCheck className="size-4 text-primary" />
                  <span className="text-sm font-medium">System update</span>
                </div>
                <span className="ps-6 text-xs text-muted-foreground">
                  New version available for download
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
