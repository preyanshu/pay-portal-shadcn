import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DollarSign, FileText, TrendingUp, Users, Eye, ExternalLink } from "lucide-react"

export function PayoutsPage() {
  const payoutBatches = [
    {
      id: 1,
      transactionHash: "0xf36c7a3b...4678f9e0",
      totalAmount: 2,
      created: "4 days ago",
    },
    {
      id: 2,
      transactionHash: "0x89f8d847...625873cf",
      totalAmount: 2,
      created: "4 days ago",
    },
    {
      id: 3,
      transactionHash: "0x4e9e14de...1b97f20a",
      totalAmount: 4,
      created: "4 days ago",
    },
  ]

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Payouts</h1>
            <p className="text-muted-foreground">Track and manage employee payment batches.</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Users className="mr-2 h-4 w-4" />
            Manage Employees
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Payouts</CardTitle>
              <DollarSign className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">$8</div>
              <p className="text-xs text-muted-foreground">All-time amount</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Batch Count</CardTitle>
              <FileText className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">3</div>
              <p className="text-xs text-muted-foreground">Total transactions</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Average Batch</CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">$3</div>
              <p className="text-xs text-muted-foreground">Per transaction</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Employees</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">1</div>
              <p className="text-xs text-muted-foreground">Eligible for payouts</p>
            </CardContent>
          </Card>
        </div>

        {/* Payout Batches Table */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-foreground">Payout Batches</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="max-h-96 overflow-y-auto">
              <Table>
                <TableHeader className="sticky top-0 z-10 bg-card">
                  <TableRow className="border-border hover:bg-muted/50">
                    <TableHead className="text-muted-foreground font-medium">Transaction Hash</TableHead>
                    <TableHead className="text-muted-foreground font-medium">Total Amount</TableHead>
                    <TableHead className="text-muted-foreground font-medium">Created</TableHead>
                    <TableHead className="text-muted-foreground font-medium">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payoutBatches.map((batch) => (
                    <TableRow key={batch.id} className="border-border hover:bg-muted/50">
                      <TableCell className="font-mono text-sm text-foreground">
                        <div className="flex items-center gap-2">
                          {batch.transactionHash}
                          <ExternalLink className="h-3 w-3 text-muted-foreground" />
                        </div>
                      </TableCell>
                      <TableCell className="text-foreground font-medium">${batch.totalAmount}</TableCell>
                      <TableCell className="text-muted-foreground">{batch.created}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
