import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const payouts = [
  {
    id: 1,
    amount: "$2",
    hash: "0xf36c...f9e0",
    time: "4 days ago",
  },
  {
    id: 2,
    amount: "$2",
    hash: "0x89f8...73cf",
    time: "4 days ago",
  },
  {
    id: 3,
    amount: "$4",
    hash: "0x4e9e...f20a",
    time: "4 days ago",
  },
]

export function RecentPayouts() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-card-foreground">Recent Payouts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {payouts.map((payout) => (
          <div key={payout.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">$</span>
              </div>
              <div>
                <p className="font-medium text-card-foreground">{payout.amount}</p>
                <p className="text-sm text-muted-foreground font-mono">{payout.hash}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">{payout.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
