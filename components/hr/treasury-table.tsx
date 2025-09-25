"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Minus, Wallet, ExternalLink, TrendingUp, TrendingDown, Check } from "lucide-react"

interface Transaction {
  id: string
  type: "payout" | "funding"
  amount: number
  description: string
  hash: string
  status: "completed" | "pending" | "failed"
  date: string
  icon: "payout" | "funding"
}

export function Treasury() {
  const [transactions] = useState<Transaction[]>([
    {
      id: "1",
      type: "payout",
      amount: -2,
      description: "Payout batch 68cf9854907a1e47cfa56703 - 2 employee(s) paid out",
      hash: "0xf36c7a3b0ea6c5d063e396fc3cc2bb01ea146d8d2940ed1311944a684678f9e0",
      status: "completed",
      date: "9/21/2025",
      icon: "payout"
    },
    {
      id: "2",
      type: "funding",
      amount: 3,
      description: "additional funds",
      hash: "0xf8ac8dc6b1b855fdf6732aa74529d182c9c74eac0a36444c7e224900cc1d95f4",
      status: "completed",
      date: "9/21/2025",
      icon: "funding"
    },
    {
      id: "3",
      type: "funding",
      amount: 1,
      description: "funding",
      hash: "0xf05d3eb1b12f34a341e2edc7d918f92674c4d6d0a6c78801ef69dc84fce41bba",
      status: "completed",
      date: "9/21/2025",
      icon: "funding"
    }
  ])

  const treasuryBalance = 2001

  return (
    <div className="p-6 space-y-8">
      {/* Page Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-white">Treasury</h1>
        <p className="text-gray-400">Manage your organization's treasury balance and transactions.</p>
      </div>

      {/* Treasury Balance Card */}
      <Card className="bg-gradient-to-r from-green-900/20 to-green-800/20 border-green-800/30">
        <CardContent className="p-8">
          <div className="flex items-center justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Wallet className="h-6 w-6 text-green-400" />
                </div>
                <h2 className="text-xl font-semibold text-white">Treasury Balance</h2>
              </div>
              <div className="space-y-1">
                <p className="text-4xl font-bold text-white">${treasuryBalance.toLocaleString()}</p>
                <p className="text-green-300">Available for payouts</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button className="gap-2 bg-green-600 hover:bg-green-700 text-white">
                <Plus className="h-4 w-4" />
                Fund
              </Button>
              <Button variant="outline" className="gap-2 border-red-600 text-red-400 hover:bg-red-900/20">
                <Minus className="h-4 w-4" />
                Withdraw
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Transaction History */}
      <Card className="bg-gray-900/50 border-gray-700/50">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl text-white">Transaction History</CardTitle>
        </CardHeader>
        <CardContent className="px-4 pb-0">
          <div className="max-h-[500px] overflow-y-auto">
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-4 rounded-lg bg-gray-800/30 border border-gray-700/30 hover:bg-gray-800/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg ${
                      transaction.type === 'payout' 
                        ? 'bg-red-900/30' 
                        : 'bg-green-900/30'
                    }`}>
                      {transaction.type === 'payout' ? (
                        <TrendingDown className="h-5 w-5 text-red-400" />
                      ) : (
                        <TrendingUp className="h-5 w-5 text-green-400" />
                      )}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <p className={`text-lg font-semibold ${
                          transaction.type === 'payout' ? 'text-red-400' : 'text-green-400'
                        }`}>
                          {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount)}
                        </p>
                      </div>
                      <p className="text-sm text-gray-300">{transaction.description}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <code className="bg-gray-800 px-2 py-1 rounded font-mono">
                          {transaction.hash}
                        </code>
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-gray-500 hover:text-gray-300">
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <Badge variant="secondary" className="bg-green-900/30 text-green-300 border-green-700/30">
                        Completed
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-400 min-w-[80px] text-right">{transaction.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}