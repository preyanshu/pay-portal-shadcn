"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus, Users, DollarSign, Wallet, Calendar, Edit, Trash2, Play } from "lucide-react"

interface Employee {
  id: string
  name: string
  email: string
  designation: string
  salary: number
  wallet: string
  joinedDate: string
  avatar: string
  selected: boolean
}

export  function EmployeesTable() {
  const [employees, setEmployees] = useState<Employee[]>([
    {
      id: "1",
      name: "Utkarsh",
      email: "utkarsh@gmail.com",
      designation: "Software Engineer",
      salary: 1,
      wallet: "0xa983...77D7",
      joinedDate: "4 days ago",
      avatar: "U",
      selected: false,
    }, {
        id: "2",
        name: "Utkarsh",
        email: "utkarsh@gmail.com",
        designation: "Software Engineer",
        salary: 1,
        wallet: "0xa983...77D7",
        joinedDate: "4 days ago",
        avatar: "U",
        selected: false,
      }, {
        id: "3",
        name: "Utkarsh",
        email: "utkarsh@gmail.com",
        designation: "Software Engineer",
        salary: 1,
        wallet: "0xa983...77D7",
        joinedDate: "4 days ago",
        avatar: "U",
        selected: false,
      }, {
        id: "4",
        name: "Utkarsh",
        email: "utkarsh@gmail.com",
        designation: "Software Engineer",
        salary: 1,
        wallet: "0xa983...77D7",
        joinedDate: "4 days ago",
        avatar: "U",
        selected: false,
      }
  ])

  const selectedCount = employees.filter((emp) => emp.selected).length
  const totalMonthly = employees.filter((emp) => emp.selected).reduce((sum, emp) => sum + emp.salary, 0)

  const toggleEmployee = (id: string) => {
    setEmployees((prev) => prev.map((emp) => (emp.id === id ? { ...emp, selected: !emp.selected } : emp)))
  }

  const selectAll = () => {
    const allSelected = employees.every((emp) => emp.selected)
    setEmployees((prev) => prev.map((emp) => ({ ...emp, selected: !allSelected })))
  }

  return (
    <div className="p-6 space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-balance">Employees</h1>
          <p className="text-muted-foreground text-balance">Manage your employees and view recent additions.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" onClick={selectAll}>
            Select All for Payout
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Employee
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-border/50">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Selected</p>
                <p className="text-2xl font-bold">{selectedCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <DollarSign className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Monthly</p>
                <p className="text-2xl font-bold">${totalMonthly}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Wallet className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Treasury</p>
                <p className="text-2xl font-bold">$2,001</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Employees</p>
                <p className="text-2xl font-bold">{employees.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Employee Directory - Now with proper scrolling */}
      <Card className="border-border/50">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl">Employee Directory</CardTitle>
            <div className="text-sm text-muted-foreground">
              {selectedCount > 0 && <span>Select employees to process payouts</span>}
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-4 pb-0">
          <div className="max-h-[600px] overflow-y-auto">
            <table className="w-full">
              <thead className="sticky top-0 bg-card z-10">
                <tr className="border-b border-border/50">
                  <th className="text-left p-4 font-medium text-muted-foreground align-middle">
                    <Checkbox
                      checked={employees.length > 0 && employees.every((emp) => emp.selected)}
                      onCheckedChange={selectAll}
                    />
                  </th>
                  <th className="text-left p-4 font-medium text-muted-foreground align-middle">Employee</th>
                  <th className="text-left p-4 font-medium text-muted-foreground align-middle">Designation</th>
                  <th className="text-left p-4 font-medium text-muted-foreground align-middle">Salary</th>
                  <th className="text-left p-4 font-medium text-muted-foreground align-middle">Wallet</th>
                  <th className="text-left p-4 font-medium text-muted-foreground align-middle">Joined</th>
                  <th className="text-right p-4 font-medium text-muted-foreground align-middle">Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id} className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                    <td className="p-4 align-middle">
                      <Checkbox checked={employee.selected} onCheckedChange={() => toggleEmployee(employee.id)} />
                    </td>
                    <td className="p-4 align-middle">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-primary text-primary-foreground font-medium">
                            {employee.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{employee.name}</p>
                          <p className="text-sm text-muted-foreground">{employee.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 align-middle">
                      <Badge variant="secondary" className="font-normal">
                        {employee.designation}
                      </Badge>
                    </td>
                    <td className="p-4 align-middle">
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="font-mono">{employee.salary}/month</span>
                      </div>
                    </td>
                    <td className="p-4 align-middle">
                      <div className="flex items-center gap-2">
                        <Wallet className="h-4 w-4 text-primary" />
                        <code className="text-sm bg-muted px-2 py-1 rounded font-mono">{employee.wallet}</code>
                      </div>
                    </td>
                    <td className="p-4 align-middle">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-sm leading-none">{employee.joinedDate}</span>
                      </div>
                    </td>
                    <td className="p-4 align-middle">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="sm" className="gap-2 leading-none">
                          <Edit className="h-4 w-4 text-primary" />
                          <span className="leading-none">Edit</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-2 text-destructive hover:text-destructive leading-none">
                          <Trash2 className="h-4 w-4" />
                          <span className="leading-none">Delete</span>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Action Bar */}
      {selectedCount > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2">
          <Card className="bg-card border-border/50 shadow-xl rounded-4xl">
            <CardContent className="px-6 py-4">
              <div className="flex items-center gap-4">
                <div className="text-sm">
                  <span className="font-medium">{selectedCount}</span>
                  <span className="text-muted-foreground"> employees selected</span>
                </div>
                <div className="h-4 w-px bg-border"></div>
                <Button variant="destructive" size="sm" className="gap-2 px-4">
                  <Trash2 className="h-4 w-4 text-destructive-foreground" />
                  Delete Selected
                </Button>
                <Button size="sm" className="gap-2 px-6 bg-primary text-primary-foreground">
                  <Play className="h-4 w-4 text-primary-foreground" />
                  Start Payout
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
                )}
    </div>
  )
}