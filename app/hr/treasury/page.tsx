import { DashboardLayout } from "@/components/hr/dashboard-layout"
// import {PayoutsPage} from "@/components/hr/payouts-table"
import {TreasuryPage} from "@/components/hr/treasury"

export default function HREsopsPage() {
  return (
    <DashboardLayout>
      <TreasuryPage />
      <></>
    </DashboardLayout>
  )
}


