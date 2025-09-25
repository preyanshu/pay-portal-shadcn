import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const employees = [
  {
    id: 1,
    name: "Utkarsh",
    role: "software engineer",
    salary: "$1",
    avatar: "U",
    avatarColor: "bg-green-500",
  },
]

export function RecentEmployees() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-card-foreground">Recent Employees</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {employees.map((employee) => (
          <div key={employee.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar className="w-10 h-10">
                <AvatarFallback className={`bg-primary text-primary-foreground font-medium`}>
                  {employee.avatar}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-card-foreground">{employee.name}</p>
                <p className="text-sm text-muted-foreground">{employee.role}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-card-foreground">{employee.salary}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
