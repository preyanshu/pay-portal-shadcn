"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Users, TrendingUp, DollarSign, Vault, Settings, Moon, Sun } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard, current: true },
  { name: "Employees", href: "/hr/employees", icon: Users, current: false },
  { name: "ESOPs", href: "/hr/esops", icon: TrendingUp, current: false },
  { name: "Payouts", href: "#", icon: DollarSign, current: false },
  { name: "Treasury", href: "#", icon: Vault, current: false },
  { name: "Settings", href: "#", icon: Settings, current: false },
]

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-sidebar border-r border-sidebar-border">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center px-6 py-4 border-b border-sidebar-border">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">A</span>
              </div>
              <div>
                <h1 className="text-lg font-semibold text-sidebar-foreground">Acme Pay Portal</h1>
                <p className="text-xs text-muted-foreground">Powered by PayThree</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    item.current
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.name}
                </a>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="ml-64">
        {/* Header */}
        <header className="bg-background border-b border-border px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Theme toggle */}
              <Button variant="ghost" size="sm" onClick={toggleTheme} className="w-9 h-9 p-0">
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>

            <div className="flex items-center space-x-4">
              {/* USDC Balance */}
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">USDC</span>
                <span className="font-medium">5.00</span>
              </div>

              {/* Wallet Address */}
              <div className="flex items-center space-x-2 bg-muted px-3 py-1.5 rounded-lg">
                <span className="text-sm font-mono">0.019 AVAX</span>
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-xs text-primary-foreground font-medium">0x</span>
                </div>
                <span className="text-sm text-muted-foreground">0x91...B306</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
