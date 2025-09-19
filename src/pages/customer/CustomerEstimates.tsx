import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Calculator, 
  Search,
  Eye,
  Download,
  CheckCircle,
  Clock,
  AlertCircle,
  Calendar,
  DollarSign
} from "lucide-react";

export const CustomerEstimates = () => {
  const estimates = [
    {
      id: "EST-001",
      project: "Complete Security System Overhaul",
      description: "Comprehensive security upgrade including 16 cameras, access control, and alarm system",
      amount: "$12,500.00",
      status: "approved",
      issueDate: "2024-01-16",
      expiryDate: "2024-02-15",
      validDays: 30,
      services: ["Security Cameras", "Access Control", "Alarm System", "Installation"]
    },
    {
      id: "EST-002", 
      project: "Office WiFi & Security Setup",
      description: "Enterprise WiFi infrastructure with basic security camera coverage",
      amount: "$8,200.00",
      status: "pending",
      issueDate: "2024-01-14",
      expiryDate: "2024-02-13",
      validDays: 30,
      services: ["WiFi Installation", "Security Cameras", "Network Setup"]
    },
    {
      id: "EST-003",
      project: "Home Automation Integration",
      description: "Smart home setup with lighting, climate, and security integration",
      amount: "$6,750.00",
      status: "draft",
      issueDate: "2024-01-12",
      expiryDate: "2024-02-11",
      validDays: 30,
      services: ["Home Automation", "Smart Lighting", "Climate Control", "Security Integration"]
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge variant="secondary" className="bg-success/10 text-success"><CheckCircle className="w-3 h-3 mr-1" />Approved</Badge>;
      case 'pending':
        return <Badge variant="secondary" className="bg-warning/10 text-warning"><Clock className="w-3 h-3 mr-1" />Under Review</Badge>;
      case 'expired':
        return <Badge variant="destructive"><AlertCircle className="w-3 h-3 mr-1" />Expired</Badge>;
      default:
        return <Badge variant="outline">Draft</Badge>;
    }
  };

  const getActionButton = (estimate: any) => {
    if (estimate.status === 'approved') {
      return (
        <Button size="sm" className="bg-success">
          <CheckCircle className="mr-1 h-3 w-3" />
          Accept Estimate
        </Button>
      );
    }
    
    if (estimate.status === 'pending') {
      return (
        <Button variant="outline" size="sm">
          <Clock className="mr-1 h-3 w-3" />
          Awaiting Review
        </Button>
      );
    }
    
    return (
      <Button variant="outline" size="sm">
        <Eye className="mr-1 h-3 w-3" />
        View Details
      </Button>
    );
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="heading-lg">My Estimates</h1>
          <p className="text-muted-foreground">Review project estimates and proposals</p>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Download All
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Estimates</CardTitle>
            <Calculator className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Active proposals</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Approved Value</CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,500</div>
            <p className="text-xs text-muted-foreground">Ready to proceed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
            <Clock className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$8,200</div>
            <p className="text-xs text-muted-foreground">Under consideration</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">All Estimates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative mb-6">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search estimates by project or ID..." className="pl-9" />
          </div>

          {/* Estimates List */}
          <div className="space-y-4">
            {estimates.map((estimate) => (
              <Card key={estimate.id} className="hover:shadow-md transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-3">
                        <h3 className="font-bold text-lg">{estimate.id}</h3>
                        {getStatusBadge(estimate.status)}
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-primary">{estimate.project}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{estimate.description}</p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {estimate.services.map((service, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>Issued: {estimate.issueDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          <span>Expires: {estimate.expiryDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>Valid for {estimate.validDays} days</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right space-y-3">
                      <div>
                        <p className="text-2xl font-bold">{estimate.amount}</p>
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
                        {getActionButton(estimate)}
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