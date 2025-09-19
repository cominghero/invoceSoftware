import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useUser } from "@/contexts/UserContext";
import { 
  FileText, 
  Users, 
  CreditCard, 
  BarChart3, 
  Shield, 
  Wifi, 
  Camera, 
  Home,
  Volume2,
  Building2,
  CheckCircle
} from "lucide-react";
import heroImage from "@/assets/hero-invoice.jpg";

export const Landing = () => {
  const { setUserRole } = useUser();

  const features = [
    {
      icon: FileText,
      title: "Smart Invoicing",
      description: "Create professional invoices with automated calculations and customizable templates"
    },
    {
      icon: Users,
      title: "Customer Management",
      description: "Manage customer information, contact details, and project history"
    },
    {
      icon: CreditCard,
      title: "Payment Tracking",
      description: "Track payments, send reminders, and manage overdue accounts"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reports",
      description: "Get insights into your business performance with detailed reports"
    },
    {
      icon: Building2,
      title: "Blueprint Editor",
      description: "Upload blueprints and mark security system installations with precision"
    },
    {
      icon: Shield,
      title: "Security Systems",
      description: "Specialized tools for cameras, access control, and security installations"
    }
  ];

  const services = [
    { icon: Camera, name: "Security Cameras", color: "text-blue-600" },
    { icon: Wifi, name: "WiFi Installation", color: "text-green-600" },
    { icon: Shield, name: "Access Control", color: "text-purple-600" },
    { icon: Home, name: "Home Automation", color: "text-orange-600" },
    { icon: Volume2, name: "Audio/Video", color: "text-red-600" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-95" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="heading-xl mb-6">
              Professional Invoicing for<br />
              <span className="text-yellow-300">Security System Providers</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Streamline your invoicing process with specialized tools for security cameras, 
              WiFi, access control, and home automation projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => setUserRole('admin')}
                className="bg-white text-primary hover:bg-white/90 font-semibold"
              >
                <Building2 className="mr-2 h-5 w-5" />
                Admin Dashboard
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => setUserRole('customer')}
                className="border-white text-white hover:bg-white hover:text-primary font-semibold"
              >
                <Users className="mr-2 h-5 w-5" />
                Customer Portal
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Everything You Need</h2>
            <p className="text-xl text-muted-foreground">
              Complete invoicing solution built specifically for security professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="transition-smooth hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Our Specializations</h2>
            <p className="text-xl text-muted-foreground">
              Professional services with integrated invoicing and blueprint management
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 transition-smooth hover:scale-105">
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <h3 className="font-semibold text-sm">{service.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="heading-lg mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Choose your role to access the appropriate portal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => setUserRole('admin')}
              className="bg-white text-primary hover:bg-white/90"
            >
              Access Admin Dashboard
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => setUserRole('customer')}
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Customer Portal Login
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};