import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";  
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Calculator, 
  Plus, 
  Search,
  Eye,
  Edit,
  Send,
  Copy,
  CheckCircle,
  Clock,
  FileText
} from "lucide-react";

export const AdminEstimates = () => {
  const estimates = [
    {
      id: "EST-001",
      customer: "New Client Corp",
      project: "Complete Security System Overhaul",
      amount: "$12,500.00",
      status: "draft",
      date: "2024-01-16",
      expiryDate: "2024-02-15",
      items: 15
    },
    {
      id: "EST-002", 
      customer: "Tech Startup LLC",
      project: "Office WiFi & Security Setup",
      amount: "$8,200.00",
      status: "sent",
      date: "2024-01-14",
      expiryDate: "2024-02-13",
      items: 8
    },
    {
      id: "EST-003",
      customer: "Retail Chain Inc",
      project: "Multi-Location Security Integration",
      amount: "$25,800.00",
      status: "approved",
      date: "2024-01-12",
      expiryDate: "2024-02-11", 
      items: 32
    },
    {
      id: "EST-004",
      customer: "Manufacturing Co",
      project: "Warehouse Access Control",
      amount: "$6,750.00",
      status: "rejected",
      date: "2024-01-10",
      expiryDate: "2024-02-09",
      items: 6
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge variant="secondary" className="bg-success/10 text-success"><CheckCircle className="w-3 h-3 mr-1" />Approved</Badge>;
      case 'sent':
        return <Badge variant="secondary" className="bg-primary/10 text-primary"><Send className="w-3 h-3 mr-1" />Sent</Badge>;
      case 'rejected':
        return <Badge variant="destructive">Rejected</Badge>;
      default:
        return <Badge variant="outline"><Clock className="w-3 h-3 mr-1" />Draft</Badge>;
    }
  };

  const getActionButtons = (estimate: any) => {
    switch (estimate.status) {
      case 'draft':
        return (
          <>
            <Button variant="outline" size="sm">
              <Edit className="h-4 w-4" />
            </Button>
            <Button size="sm">
              <Send className="h-4 w-4" />
            </Button>
          </>
        );
      case 'sent':
        return (
          <>
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Copy className="h-4 w-4" />
            </Button>
          </>
        );
      case 'approved':
        return (
          <>
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4" />
            </Button>
            <Button size="sm" className="bg-success">
              <FileText className="mr-1 h-3 w-3" />
              Create Invoice
            </Button>
          </>
        );
      default:
        return (
          <Button variant="outline" size="sm">
            <Eye className="h-4 w-4" />
          </Button>
        );
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="heading-lg">Estimates</h1>
          <p className="text-muted-foreground">Create and manage project estimates</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Estimate
        </Button>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Draft</p>
                <p className="text-2xl font-bold">1</p>
              </div>
              <Clock className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Sent</p>
                <p className="text-2xl font-bold">1</p>
              </div>
              <Send className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Approved</p>
                <p className="text-2xl font-bold">1</p>
              </div>
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Value</p>
                <p className="text-2xl font-bold">$53K</p>
              </div>
              <Calculator className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Estimates Table */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg">All Estimates</CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search estimates..." className="pl-9 w-64" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {estimates.map((estimate) => (
              <div key={estimate.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-smooth">
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold">{estimate.id}</h3>
                    {getStatusBadge(estimate.status)}
                  </div>
                  <p className="text-sm text-muted-foreground">{estimate.customer}</p>
                  <p className="text-sm font-medium">{estimate.project}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>Created: {estimate.date}</span>
                    <span>Expires: {estimate.expiryDate}</span>
                    <span>{estimate.items} items</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="font-bold text-lg">{estimate.amount}</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {getActionButtons(estimate)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};