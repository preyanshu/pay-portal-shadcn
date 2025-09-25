"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Calendar, Gift, Plus, Trash2 } from "lucide-react"

type Grant = {
  id: number
  employee: string
  email: string
  amount: number
  vesting: string
  cliff: string
  status: "Active" | "Pending" | "Revoked"
  selected?: boolean
}

export function ESOPsTable() {
  const [grants, setGrants] = useState<Grant[]>([
    { id: 1, employee: "Utkarsh", email: "utkarsh@gmail.com", amount: 1000, vesting: "4y", cliff: "1y", status: "Active", selected: false },
  ])

  const allSelected = grants.length > 0 && grants.every((g) => g.selected)
  const toggleAll = () => setGrants((prev) => prev.map((g) => ({ ...g, selected: !allSelected })))
  const toggle = (id: number) => setGrants((prev) => prev.map((g) => (g.id === id ? { ...g, selected: !g.selected } : g)))
  const deleteSelected = () => setGrants((prev) => prev.filter((g) => !g.selected))

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">ESOPs</h1>
          <p className="text-muted-foreground">Manage employee stock option grants and vesting schedules.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Gift className="h-4 w-4 text-primary" />
            Issue Grant
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Grant
          </Button>
        </div>
      </div>

      <Card className="border-border/50">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl">Grants</CardTitle>
        </CardHeader>
        <CardContent className="px-4 pb-0">
          <div className="overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left p-4">
                    <Checkbox checked={allSelected} onCheckedChange={toggleAll} />
                  </th>
                  <th className="text-left p-4">Employee</th>
                  <th className="text-left p-4">Amount</th>
                  <th className="text-left p-4">Vesting</th>
                  <th className="text-left p-4">Cliff</th>
                  <th className="text-left p-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {grants.map((g) => (
                  <tr key={g.id} className="border-b border-border/30">
                    <td className="p-4"><Checkbox checked={!!g.selected} onCheckedChange={() => toggle(g.id)} /></td>
                    <td className="p-4">
                      <div>
                        <div className="font-medium text-card-foreground">{g.employee}</div>
                        <div className="text-xs text-muted-foreground">{g.email}</div>
                      </div>
                    </td>
                    <td className="p-4">{g.amount.toLocaleString()} options</td>
                    <td className="p-4 flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" /> {g.vesting}</td>
                    <td className="p-4">{g.cliff}</td>
                    <td className="p-4"><Badge variant="secondary">{g.status}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {grants.some((g) => g.selected) && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2">
          <Card className="bg-card border-border/50 shadow-lg rounded-4xl">
            <CardContent className="px-6 py-4">
              <div className="flex items-center gap-4">
                <div className="text-sm text-muted-foreground">
                  {grants.filter((g) => g.selected).length} selected
                </div>
                <div className="h-4 w-px bg-border"></div>
                <Button variant="destructive" size="sm" className="gap-2 px-4" onClick={deleteSelected}>
                  <Trash2 className="h-4 w-4 text-destructive-foreground" />
                  Delete Selected
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}


