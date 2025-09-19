import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  FileText, 
  Calculator, 
  Users, 
  Package, 
  FileImage,
  BarChart3, 
  Settings,
  Building2
} from "lucide-react";

const navigationItems = [
  { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { name: "Invoices", path: "/admin/invoices", icon: FileText },
  { name: "Estimates", path: "/admin/estimates", icon: Calculator },
  { name: "Customers", path: "/admin/customers", icon: Users },
  { name: "Products", path: "/admin/products", icon: Package },
  { name: "Blueprint Editor", path: "/admin/blueprints", icon: FileImage },
  { name: "Reports", path: "/admin/reports", icon: BarChart3 },
  { name: "Settings", path: "/admin/settings", icon: Settings },
];

export const AdminSidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 bg-card border-r min-h-screen">
      <div className="p-6 border-b">
        <div className="flex items-center gap-2">
          <Building2 className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">Admin Portal</span>
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