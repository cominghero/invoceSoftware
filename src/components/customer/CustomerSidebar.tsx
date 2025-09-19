import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  FileText, 
  Calculator, 
  CreditCard, 
  User,
  Building2
} from "lucide-react";

const navigationItems = [
  { name: "Dashboard", path: "/customer", icon: LayoutDashboard },
  { name: "My Invoices", path: "/customer/invoices", icon: FileText },
  { name: "Estimates", path: "/customer/estimates", icon: Calculator },
  { name: "Payments", path: "/customer/payments", icon: CreditCard },
  { name: "Profile", path: "/customer/profile", icon: User },
];

export const CustomerSidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 bg-card border-r min-h-screen">
      <div className="p-6 border-b">
        <div className="flex items-center gap-2">
          <Building2 className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">Customer Portal</span>
        </div>
      </div>
      
      <nav className="p-4">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-smooth ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};