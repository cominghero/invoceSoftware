import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  FileText, 
  Search,
  Download,
  CreditCard,
  Eye,
  CheckCircle,
  Clock,
  AlertCircle,
  Calendar
} from "lucide-react";

export const CustomerInvoices = () => {
  const invoices = [
    {
      id: "INV-001",
      project: "CCTV Installation - Main Office",
      description: "Installation of 8 security cameras with NVR system",
      amount: "$5,200.00",
      status: "paid",
      issueDate: "2024-01-15",
      dueDate: "2024-01-30",
      paidDate: "2024-01-28",
      services: ["Security Cameras", "Installation", "Configuration"]
    },
    {
      id: "INV-002", 
      project: "WiFi Network Infrastructure",
      description: "Enterprise WiFi setup with 4 access points",
      amount: "$3,800.00",
      status: "pending",
      issueDate: "2024-01-14",
      dueDate: "2024-01-29",
      services: ["WiFi Installation", "Network Configuration"]
    },
    {
      id: "INV-003",
      project: "Access Control Integration",
      description: "Door access control system with biometric readers",
      amount: "$7,500.00",
      status: "overdue",
      issueDate: "2024-01-10",
      dueDate: "2024-01-25",
      services: ["Access Control", "Biometric Systems", "Integration"]
    },
    {
      id: "INV-004",
      project: "Home Automation Setup",
      description: "Smart home automation with lighting and climate control",
      amount: "$2,300.00",
      status: "pending",
      issueDate: "2024-01-12",
      dueDate: "2024-01-27",
      services: ["Home Automation", "Smart Lighting", "Climate Control"]
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

  const getPaymentButton = (invoice: any) => {
    if (invoice.status === 'paid') {
      return (
        <Button variant="outline" size="sm" disabled>
          <CheckCircle className="mr-1 h-3 w-3" />
          Paid
        </Button>
      );
    }
    
    if (invoice.status === 'overdue' || invoice.status === 'pending') {
      return (
        <Button size="sm" className="bg-success">
          <CreditCard className="mr-1 h-3 w-3" />
          Pay Now
        </Button>
      );
    }
    
    return null;
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="heading-lg">My Invoices</h1>
          <p className="text-muted-foreground">View and manage your invoices</p>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Download All
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Invoice History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative mb-6">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search invoices by project or ID..." className="pl-9" />
          </div>

          {/* Invoice List */}
          <div className="space-y-4">
            {invoices.map((invoice) => (
              <Card key={invoice.id} className="hover:shadow-md transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-3">
                        <h3 className="font-bold text-lg">{invoice.id}</h3>
                        {getStatusBadge(invoice.status)}
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-primary">{invoice.project}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{invoice.description}</p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {invoice.services.map((service, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>Issued: {invoice.issueDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>Due: {invoice.dueDate}</span>
                        </div>
                        {invoice.paidDate && (
                          <div className="flex items-center gap-1">
                            <CheckCircle className="h-3 w-3" />
                            <span>Paid: {invoice.paidDate}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="text-right space-y-3">
                      <div>
                        <p className="text-2xl font-bold">{invoice.amount}</p>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="mr-1 h-3 w-3" />
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="mr-1 h-3 w-3" />
                          Download PDF
                        </Button>
                        {getPaymentButton(invoice)}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};