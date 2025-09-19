import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  FileText, 
  Plus, 
  Search,
  Download,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  Clock,
  AlertCircle
} from "lucide-react";

export const AdminInvoices = () => {
  const invoices = [
    {
      id: "INV-001",
      customer: "ABC Security Corp",
      project: "CCTV Installation - Main Office",
      amount: "$5,200.00",
      status: "paid",
      date: "2024-01-15",
      dueDate: "2024-01-30"
    },
    {
      id: "INV-002", 
      customer: "TechGuard Solutions",
      project: "WiFi Network Infrastructure",
      amount: "$3,800.00",
      status: "pending",
      date: "2024-01-14",
      dueDate: "2024-01-29"
    },
    {
      id: "INV-003",
      customer: "SafeHome Systems", 
      project: "Access Control Integration",
      amount: "$7,500.00",
      status: "overdue",
      date: "2024-01-10",
      dueDate: "2024-01-25"
    },
    {
      id: "INV-004",
      customer: "ProSec Installation",
      project: "Home Automation Setup",
      amount: "$2,300.00",
      status: "draft",
      date: "2024-01-12",
      dueDate: "2024-01-27"
    },
    {
      id: "INV-005",
      customer: "Metro Security Inc",
      project: "Audio/Video Conference Room",
      amount: "$4,100.00", 
      status: "paid",
      date: "2024-01-08",
      dueDate: "2024-01-23"
    }
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
          <h1 className="heading-lg">Invoices</h1>
          <p className="text-muted-foreground">Manage all your invoices and billing</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Invoice
        </Button>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Invoice Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search invoices..." className="pl-9" />
            </div>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>

          {/* Invoice Table */}
          <div className="overflow-x-auto">
            <div className="space-y-4">
              {invoices.map((invoice) => (
                <div key={invoice.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-smooth">
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold">{invoice.id}</h3>
                      {getStatusBadge(invoice.status)}
                    </div>
                    <p className="text-sm text-muted-foreground">{invoice.customer}</p>
                    <p className="text-sm">{invoice.project}</p>
                    <p className="text-xs text-muted-foreground">
                      Created: {invoice.date} • Due: {invoice.dueDate}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="font-bold text-lg">{invoice.amount}</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};