import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Upload, 
  FileImage, 
  Camera,
  Wifi,
  Shield,
  Home,
  Volume2,
  Plus,
  Edit,
  Download,
  Trash2
} from "lucide-react";

export const AdminBlueprints = () => {
  const blueprints = [
    {
      id: "BP-001",
      name: "Office Building - Floor 1",
      project: "ABC Security Corp Installation",
      uploadDate: "2024-01-15",
      items: [
        { type: "camera", count: 8, icon: Camera, color: "text-blue-600" },
        { type: "wifi", count: 4, icon: Wifi, color: "text-green-600" },
        { type: "access", count: 2, icon: Shield, color: "text-purple-600" }
      ]
    },
    {
      id: "BP-002", 
      name: "Residential Home Layout",
      project: "SafeHome Systems Project",
      uploadDate: "2024-01-12",
      items: [
        { type: "camera", count: 12, icon: Camera, color: "text-blue-600" },
        { type: "automation", count: 6, icon: Home, color: "text-orange-600" },
        { type: "audio", count: 3, icon: Volume2, color: "text-red-600" }
      ]
    },
    {
      id: "BP-003",
      name: "Warehouse Security Plan", 
      project: "TechGuard Solutions",
      uploadDate: "2024-01-10",
      items: [
        { type: "camera", count: 24, icon: Camera, color: "text-blue-600" },
        { type: "access", count: 8, icon: Shield, color: "text-purple-600" },
        { type: "wifi", count: 12, icon: Wifi, color: "text-green-600" }
      ]
    }
  ];

  const serviceIcons = [
    { name: "Security Cameras", icon: Camera, color: "bg-blue-100 text-blue-600 border-blue-200" },
    { name: "WiFi Points", icon: Wifi, color: "bg-green-100 text-green-600 border-green-200" },
    { name: "Access Control", icon: Shield, color: "bg-purple-100 text-purple-600 border-purple-200" },
    { name: "Home Automation", icon: Home, color: "bg-orange-100 text-orange-600 border-orange-200" },
    { name: "Audio/Video", icon: Volume2, color: "bg-red-100 text-red-600 border-red-200" }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="heading-lg">Blueprint Editor</h1>
          <p className="text-muted-foreground">Upload and annotate building blueprints with security systems</p>
        </div>
        <Button>
          <Upload className="mr-2 h-4 w-4" />
          Upload Blueprint
        </Button>
      </div>

      {/* Drawing Tools */}
      <Card>
        <CardHeader>
          <CardTitle>Drawing Tools</CardTitle>
          <CardDescription>Select tools to mark your blueprint</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {serviceIcons.map((tool, index) => (
              <Button
                key={index}
                variant="outline"
                className={`h-16 flex-col gap-2 ${tool.color} hover:opacity-80`}
              >
                <tool.icon className="h-6 w-6" />
                <span className="text-xs font-medium">{tool.name}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Blueprint Canvas */}
      <Card>
        <CardHeader>
          <CardTitle>Blueprint Canvas</CardTitle>
          <CardDescription>
            Upload a blueprint image and use the tools above to mark security system locations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-12 text-center">
            <FileImage className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Blueprint Loaded</h3>
            <p className="text-muted-foreground mb-4">
              Upload a blueprint image to start marking security system locations
            </p>
            <Button>
              <Upload className="mr-2 h-4 w-4" />
              Upload Blueprint Image
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Saved Blueprints */}
      <Card>
        <CardHeader>
          <CardTitle>Saved Blueprints</CardTitle>
          <CardDescription>Your previously created blueprint annotations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blueprints.map((blueprint) => (
              <Card key={blueprint.id} className="hover:shadow-lg transition-smooth">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{blueprint.name}</CardTitle>
                      <CardDescription>{blueprint.project}</CardDescription>
                    </div>
                    <Badge variant="outline">{blueprint.id}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-2">
                    {blueprint.items.map((item, index) => (
                      <div key={index} className="flex items-center gap-1 text-sm">
                        <item.icon className={`h-4 w-4 ${item.color}`} />
                        <span className="font-medium">{item.count}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    Uploaded: {blueprint.uploadDate}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Edit className="mr-1 h-3 w-3" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-3 w-3" />
                    </Button>
                    <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                      <Trash2 className="h-3 w-3" />
                    </Button>
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