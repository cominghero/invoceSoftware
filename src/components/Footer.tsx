import { Building2, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">InvoicePro</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Professional invoicing software for security system providers. 
              Manage invoices, estimates, and blueprints with ease.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@invoicepro.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>New York, NY 10001</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Invoice Management</li>
              <li>Estimate Creation</li>
              <li>Blueprint Editor</li>
              <li>Customer Portal</li>
              <li>Payment Tracking</li>
              <li>Reports & Analytics</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Security Cameras</li>
              <li>WiFi Installation</li>
              <li>Access Control</li>
              <li>Home Automation</li>
              <li>Audio/Video</li>
              <li>Consulting</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          © 2024 InvoicePro. All rights reserved. Built for security professionals.
        </div>
      </div>
    </footer>
  );
};