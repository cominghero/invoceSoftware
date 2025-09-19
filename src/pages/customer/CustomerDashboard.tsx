import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  CreditCard, 
  Clock,
  CheckCircle,
  AlertCircle,
  DollarSign,
  Calendar
} from "lucide-react";

export const CustomerDashboard = () => {
  const accountSummary = {
    totalInvoices: 12,
    paidInvoices: 8,
    pendingInvoices: 3,
    overdueInvoices: 1,
    totalAmount: "$45,230",
    paidAmount: "$32,150",
    pendingAmount: "$13,080"
  };

  const recentInvoices = [
    { 
      id: "INV-001", 
      project: "Security Camera Installation", 
      amount: "$5,200", 
      status: "paid", 
      date: "2024-01-15",
      dueDate: "2024-01-30"
    },
    { 
      id: "INV-002", 
      project: "WiFi Network Setup", 
      amount: "$3,800", 
      status: "pending", 
      date: "2024-01-14",
      dueDate: "2024-01-29"
    },
    { 
      id: "INV-003", 
      project: "Access Control System", 
      amount: "$7,500", 
      status: "overdue", 
      date: "2024-01-10",
      dueDate: "2024-01-25"
    }
  ];

  const upcomingPayments = [
    { id: "INV-002", amount: "$3,800", dueDate: "2024-01-29", project: "WiFi Network Setup" },
    { id: "INV-004", amount: "$2,300", dueDate: "2024-02-05", project: "Home Automation" }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'paid':
        return <Badge variant="secondary" className="bg-success/10 text-success"><CheckCircle className="w-3 h-3 mr-1" />Paid</Badge>;
      case 'pending':
        return <Badge variant="secondary" className="bg-warning/10 text-warning"><Clock className="w-3 h-3 mr-1" />Pending</Badge>;
      case 'overdue':
        return <Badge variant="destructive"><AlertCircle className="w-3 h-3 mr-1" />Overdue</Badge>;
      default:
        return <Badge variant="outline">Draft</Badge>;
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="heading-lg">Customer Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your account overview.</p>
        </div>
        <Button>
          <CreditCard className="mr-2 h-4 w-4" />
          Make Payment
        </Button>
      </div>

      {/* Account Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Invoices</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{accountSummary.totalInvoices}</div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Paid Amount</CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{accountSummary.paidAmount}</div>
            <p className="text-xs text-muted-foreground">{accountSummary.paidInvoices} invoices paid</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Amount</CardTitle>
            <Clock className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{accountSummary.pendingAmount}</div>
            <p className="text-xs text-muted-foreground">{accountSummary.pendingInvoices} invoices pending</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overdue</CardTitle>
            <AlertCircle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{accountSummary.overdueInvoices}</div>
            <p className="text-xs text-muted-foreground">Requires attention</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Invoices */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Invoices</CardTitle>
            <CardDescription>Your latest billing information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentInvoices.map((invoice) => (
                <div key={invoice.id} className="flex items-center justify-between p-4 rounded-lg border">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{invoice.id}</p>
                      {getStatusBadge(invoice.status)}
                    </div>
                    <p className="text-sm text-muted-foreground">{invoice.project}</p>
                    <p className="text-xs text-muted-foreground">Due: {invoice.dueDate}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">{invoice.amount}</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Payments */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Payments</CardTitle>
            <CardDescription>Payments due soon</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingPayments.map((payment) => (
              <div key={payment.id} className="flex items-center justify-between p-4 rounded-lg bg-warning/5 border border-warning/20">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-warning" />
                    <p className="font-medium">{payment.id}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{payment.project}</p>
                  <p className="text-xs text-warning font-medium">Due: {payment.dueDate}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg">{payment.amount}</p>
                  <Button size="sm" className="mt-2">
                    <CreditCard className="mr-1 h-3 w-3" />
                    Pay Now
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};