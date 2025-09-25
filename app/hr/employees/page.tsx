import { DashboardLayout } from "@/components/hr/dashboard-layout"
import { EmployeesTable } from "@/components/hr/employees-table"

export default function HREmployeesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        <div className="grid grid-cols-1 gap-8">
          <EmployeesTable />
        </div>
      </div>
    </DashboardLayout>
  )
}


