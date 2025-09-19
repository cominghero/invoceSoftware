import { Button } from "@/components/ui/button";
import { useUser } from "@/contexts/UserContext";
import { Building2, UserCog, User, LogOut } from "lucide-react";

export const Header = () => {
  const { userRole, setUserRole } = useUser();

  const handleRoleSwitch = () => {
    if (userRole === 'admin') {
      setUserRole('customer');
    } else if (userRole === 'customer') {
      setUserRole('admin');
    }
  };

  const handleLogout = () => {
    setUserRole(null);
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Building2 className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">InvoicePro</span>
        </div>

        {userRole && (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              {userRole === 'admin' ? (
                <>
                  <UserCog className="h-4 w-4" />
                  <span>Admin Dashboard</span>
                </>
              ) : (
                <>
                  <User className="h-4 w-4" />
                  <span>Customer Portal</span>
                </>
              )}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={handleRoleSwitch}
              className="transition-smooth"
            >
              Switch to {userRole === 'admin' ? 'Customer' : 'Admin'}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="transition-smooth"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};