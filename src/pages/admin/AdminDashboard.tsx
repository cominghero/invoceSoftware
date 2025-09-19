import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  DollarSign, 
  FileText, 
  Users, 
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  FileImage
} from "lucide-react";

export const AdminDashboard = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$125,430",
      change: "+12.5%",
      icon: DollarSign,
      color: "text-success"
    },
    {
      title: "Active Invoices",
      value: "43",
      change: "+5",
      icon: FileText,
      color: "text-primary"
    },
    {
      title: "Total Customers",
      value: "127",
      change: "+8",
      icon: Users,
      color: "text-accent"
    },
    {
      title: "Growth Rate",
      value: "23.5%",
      change: "+2.1%",
      icon: TrendingUp,
      color: "text-warning"
    }
  ];

  const recentInvoices = [
    { id: "INV-001", customer: "ABC Security Corp", amount: "$5,200", status: "paid", date: "2024-01-15" },
    { id: "INV-002", customer: "TechGuard Solutions", amount: "$3,800", status: "pending", date: "2024-01-14" },
    { id: "INV-003", customer: "SafeHome Systems", amount: "$7,500", status: "overdue", date: "2024-01-10" },
    { id: "INV-004", customer: "ProSec Installation", amount: "$2,300", status: "draft", date: "2024-01-12" }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'paid': return <CheckCircle className="h-4 w-4 text-success" />;
      case 'pending': return <Clock className="h-4 w-4 text-warning" />;
      case 'overdue': return <AlertCircle className="h-4 w-4 text-destructive" />;
      default: return <FileText className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="heading-lg">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your business overview.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <FileText className="mr-2 h-4 w-4" />
            New Invoice
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Estimate
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="transition-smooth hover:shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-success">{stat.change}</span> from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Invoices */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Invoices</CardTitle>
            <CardDescription>Latest invoice activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentInvoices.map((invoice) => (
                <div key={invoice.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(invoice.status)}
                    <div>
                      <p className="font-medium">{invoice.id}</p>
                      <p className="text-sm text-muted-foreground">{invoice.customer}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{invoice.amount}</p>
                    <p className="text-sm text-muted-foreground capitalize">{invoice.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full justify-start" variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Create New Invoice
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Users className="mr-2 h-4 w-4" />
              Add New Customer
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <FileImage className="mr-2 h-4 w-4" />
              Upload Blueprint
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <TrendingUp className="mr-2 h-4 w-4" />
              View Reports
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};