import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Users, TrendingUp, Coins, Calendar, Trash2 } from "lucide-react"

export function ESOPManagement() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground text-balance">ESOP Management</h1>
            <p className="text-muted-foreground mt-2">Grant and track employee stock option plans.</p>
          </div>
          <Button className="bg-primary hover:bg-primary-1/90 text-primary-foreground font-medium px-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Grant ESOP
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Employees</p>
                  <p className="text-3xl font-bold text-foreground">1</p>
                  <p className="text-sm text-muted-foreground mt-1">Eligible for ESOPs</p>
                </div>
                <Users className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active ESOPs</p>
                  <p className="text-3xl font-bold text-foreground">2</p>
                  <p className="text-sm text-muted-foreground mt-1">Currently vesting</p>
                </div>
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Tokens</p>
                  <p className="text-3xl font-bold text-foreground">0.01</p>
                  <p className="text-sm text-muted-foreground mt-1">ETH granted to date</p>
                </div>
                <Coins className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg Vesting</p>
                  <p className="text-3xl font-bold text-foreground">27</p>
                  <p className="text-sm text-muted-foreground mt-1">months</p>
                </div>
                <Calendar className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content - ESOP Grants Table */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="p-6 border-b border-border">
            <h2 className="text-2xl font-bold text-foreground">ESOP Grants</h2>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {/* Table Header - Sticky */}
            <div className="grid grid-cols-12 gap-4 p-4 bg-muted/30 border-b border-border text-sm font-medium text-muted-foreground sticky top-0 z-10">
              <div className="col-span-3">Grant ID</div>
              <div className="col-span-2">Total Tokens</div>
              <div className="col-span-2">Vested</div>
              <div className="col-span-2">Period</div>
              <div className="col-span-2">Progress</div>
              <div className="col-span-1">Actions</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-border">
              {/* Grant 1 */}
              <div className="grid grid-cols-12 gap-4 p-4 hover:bg-muted/20 transition-colors items-center">
                <div className="col-span-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div>
                      <p className="font-mono text-sm text-foreground">0xA058...1D17</p>
                      <p className="text-xs text-muted-foreground">Employee</p>
                    </div>
                    <Badge variant="secondary" className="bg-primary-1/20 text-primary border-primary-1/20 text-xs">
                      Active
                    </Badge>
                    
                  </div>
                </div>

                <div className="col-span-2">
                  <p className="font-semibold text-foreground">0.001000</p>
                  <p className="text-xs text-muted-foreground">ETH</p>
                </div>

                <div className="col-span-2">
                  <p className="font-semibold text-foreground">0.000000</p>
                  <p className="text-xs text-muted-foreground">ETH (0%)</p>
                </div>

                <div className="col-span-2">
                  <p className="font-semibold text-foreground">23 months</p>
                  <p className="text-xs text-primary">Cliff: 22 days left</p>
                </div>

                <div className="col-span-2">
                  <div className="space-y-1">
                    <Progress value={0} className="h-2" />
                    <p className="text-xs text-muted-foreground">682 days remaining</p>
                  </div>
                </div>

                <div className="col-span-1">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                    <Trash2 className="w-4 h-4 text-destructive hover:text-destructive" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-4 p-4 hover:bg-muted/20 transition-colors items-center">
                <div className="col-span-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div>
                      <p className="font-mono text-sm text-foreground">0xA058...1D17</p>
                      <p className="text-xs text-muted-foreground">Employee</p>
                    </div>
                    <Badge variant="secondary" className="bg-primary-1/20 text-primary border-primary-1/20 text-xs">
                      Active
                    </Badge>
                  </div>
                </div>

                <div className="col-span-2">
                  <p className="font-semibold text-foreground">0.001000</p>
                  <p className="text-xs text-muted-foreground">ETH</p>
                </div>

                <div className="col-span-2">
                  <p className="font-semibold text-foreground">0.000000</p>
                  <p className="text-xs text-muted-foreground">ETH (0%)</p>
                </div>

                <div className="col-span-2">
                  <p className="font-semibold text-foreground">23 months</p>
                  <p className="text-xs text-primary">Cliff: 22 days left</p>
                </div>

                <div className="col-span-2">
                  <div className="space-y-1">
                    <Progress value={20} className="h-2" />
                    <p className="text-xs text-muted-foreground">682 days remaining</p>
                  </div>
                </div>

                <div className="col-span-1">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                    <Trash2 className="w-4 h-4 text-destructive hover:text-destructive" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
