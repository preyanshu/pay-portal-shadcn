import { Card, CardContent } from "@/components/ui/card"
import { Users, Vault, DollarSign, TrendingUp } from "lucide-react"

const stats = [
  {
    name: "Total Employees",
    value: "1",
    description: "Active employee count",
    icon: Users,
    color: "text-primary",
  },
  {
    name: "Treasury Balance",
    value: "$2,001",
    description: "Available for payouts",
    icon: Vault,
    color: "text-primary",
  },
  {
    name: "Total Payouts",
    value: "$8",
    description: "All-time payout amount",
    icon: DollarSign,
    color: "text-primary",
  },
  {
    name: "Average Salary",
    value: "$1",
    description: "Annual average",
    icon: TrendingUp,
    color: "text-primary",
  },
]

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.name} className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">{stat.name}</p>
                  <p className="text-3xl font-bold text-card-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                </div>
                <div className={`${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
