import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Settings, CreditCard, Bell, Shield } from "lucide-react"

export function SettingsPage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground">Manage your organization configuration and preferences.</p>
        </div>

        {/* Organization Settings */}
        <Card className="bg-card border-border">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              <CardTitle className="text-xl font-semibold text-foreground">Organization Settings</CardTitle>
            </div>
            <p className="text-sm text-muted-foreground">
              Configure your organization's basic information and preferences.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="org-name" className="text-foreground">
                  Organization Name
                </Label>
                <Input id="org-name" defaultValue="Acme" className="bg-background border-border text-foreground" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="network" className="text-foreground">
                  Network
                </Label>
                <Select defaultValue="avalanche">
                  <SelectTrigger className="bg-background border-border text-foreground">
                    <SelectValue placeholder="Select network" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="avalanche">Avalanche Fuji</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">Currently only Avalanche Fuji network is supported.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Token Configuration */}
        <Card className="bg-card border-border">
          <CardHeader>
            <div className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-primary" />
              <CardTitle className="text-xl font-semibold text-foreground">Token Configuration</CardTitle>
            </div>
            <p className="text-sm text-muted-foreground">
              Select the stable coin for employee salary payments and ESOP tokens.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="salary-token" className="text-foreground">
                  Employee Salary Token
                </Label>
                <Select defaultValue="usdc">
                  <SelectTrigger className="bg-background border-border text-foreground">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usdc">Circle (USDC)</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  Currently only USDC is supported. Other stable coins will be available soon.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="esop-token" className="text-foreground">
                  ESOP Token
                </Label>
                <Select defaultValue="avax">
                  <SelectTrigger className="bg-background border-border text-foreground">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="avax">Avax Coin (Native)</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">ESOPs are distributed using the native Avax coin.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Preferences */}
        <Card className="bg-card border-border">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              <CardTitle className="text-xl font-semibold text-foreground">Preferences</CardTitle>
            </div>
            <p className="text-sm text-muted-foreground">Configure application preferences and automation settings.</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-foreground">Automatic Payouts</Label>
                <p className="text-sm text-muted-foreground">Automatically process payouts when conditions are met</p>
              </div>
              <Switch defaultChecked className="data-[state=checked]:bg-primary" />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-foreground">Email Notifications</Label>
                <p className="text-sm text-muted-foreground">Receive email notifications for important events</p>
              </div>
              <Switch defaultChecked className="data-[state=checked]:bg-primary" />
            </div>
          </CardContent>
        </Card>

        {/* Security */}
        <Card className="bg-card border-border">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <CardTitle className="text-xl font-semibold text-foreground">Security</CardTitle>
            </div>
            <p className="text-sm text-muted-foreground">
              Security settings and access controls for your organization.
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="border-border text-foreground hover:bg-muted bg-transparent">
                Change Admin Password
              </Button>
              <Button variant="outline" className="border-border text-foreground hover:bg-muted bg-transparent">
                View Access Logs
              </Button>
              <Button variant="outline" className="border-border text-foreground hover:bg-muted bg-transparent">
                Export Settings
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">Save Settings</Button>
        </div>
      </div>
    </div>
  )
}
