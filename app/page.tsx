import { DashboardLayout } from "@/components/hr/dashboard-layout"
import { DashboardStats } from "@/components/hr/dashboard-stats"
import { RecentEmployees } from "@/components/hr/recent-employees"
import { RecentPayouts } from "@/components/hr/recent-payouts"

export default function HRDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-2">Overview of your employee payouts and ESOP management.</p>
        </div>

        <DashboardStats />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RecentEmployees />
          <RecentPayouts />
        </div>
      </div>
    </DashboardLayout>
  )
}
