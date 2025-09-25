import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Wallet, ArrowUpCircle, ArrowDownCircle, Activity, Eye, ExternalLink, Plus, Minus } from "lucide-react"

export function TreasuryPage() {
  const treasuryTransactions = [
    {
      id: 1,
      type: "withdrawal",
      transactionHash: "0xf36c7a3b...4678f9e0",
      amount: -2,
      description: "Payout batch 68cf9854907a1e47cfa56703 - 2 employee(s) paid out",
      status: "completed",
      date: "9/21/2025",
    },
    {
      id: 2,
      type: "deposit",
      transactionHash: "0x89f8d847...625873cf",
      amount: 5,
      description: "Treasury funding from company wallet",
      status: "completed",
      date: "9/20/2025",
    },
    {
      id: 3,
      type: "withdrawal",
      transactionHash: "0x4e9e14de...1b97f20a",
      amount: -1.5,
      description: "Emergency withdrawal for operational costs",
      status: "pending",
      date: "9/19/2025",
    },
  ]

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Treasury</h1>
            <p className="text-muted-foreground">Manage treasury balance and track all treasury transactions.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="border-border text-foreground hover:bg-muted bg-transparent">
              <Minus className="mr-2 h-4 w-4" />
              Withdraw
            </Button>
            <Button className="bg-primary hover:bg-primary-1/90">
              <Plus className="mr-2 h-4 w-4" />
              Fund Treasury
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Treasury Balance</CardTitle>
              <Wallet className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">$12.5</div>
              <p className="text-xs text-muted-foreground">Available funds</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Deposits</CardTitle>
              <ArrowUpCircle className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">$15</div>
              <p className="text-xs text-muted-foreground">All-time funding</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Withdrawals</CardTitle>
              <ArrowDownCircle className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">$2.5</div>
              <p className="text-xs text-muted-foreground">All-time outflow</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Transactions</CardTitle>
              <Activity className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">1</div>
              <p className="text-xs text-muted-foreground">Pending operations</p>
            </CardContent>
          </Card>
        </div>

        {/* Treasury Transactions Table */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-foreground">Treasury Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="max-h-96 overflow-y-auto">
              <Table>
                <TableHeader className="sticky top-0 z-10 bg-card">
                  <TableRow className="border-border hover:bg-muted/50">
                    <TableHead className="text-muted-foreground font-medium">Type</TableHead>
                    <TableHead className="text-muted-foreground font-medium">Amount</TableHead>
                    <TableHead className="text-muted-foreground font-medium">Description</TableHead>
                    <TableHead className="text-muted-foreground font-medium">Status</TableHead>
                    <TableHead className="text-muted-foreground font-medium">Date</TableHead>
                    {/* <TableHead className="text-muted-foreground font-medium">Actions</TableHead> */}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {treasuryTransactions.map((transaction) => (
                    <TableRow key={transaction.id} className="border-border hover:bg-muted/50">
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {transaction.type === "deposit" ? (
                            <ArrowUpCircle className="h-4 w-4 text-chart-1" />
                          ) : (
                            <ArrowDownCircle className="h-4 w-4 text-red-500" />
                          )}
                          <span className="capitalize text-foreground">{transaction.type}</span>
                        </div>
                      </TableCell>
                      <TableCell className={`font-medium ${transaction.amount > 0 ? "text-chart-1" : "text-red-500"}`}>
                        ${Math.abs(transaction.amount)}
                      </TableCell>
                      <TableCell className="text-foreground max-w-xs">
                        <div className="truncate" title={transaction.description}>
                          {transaction.description}
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          <span className="font-mono text-xs text-muted-foreground">{transaction.transactionHash}</span>
                          <ExternalLink className="h-3 w-3 text-muted-foreground" />
                        </div>
                      </TableCell>
                      <TableCell>
                      <Badge variant="secondary" className="bg-primary-1/20 text-primary border-primary-1/20 text-xs">
                     Completed
                    </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{transaction.date}</TableCell>
                      {/* <TableCell>
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </Button>
                      </TableCell> */}
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
