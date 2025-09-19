import { Outlet } from "react-router-dom";
import { CustomerSidebar } from "@/components/customer/CustomerSidebar";

export const CustomerLayout = () => {
  return (
    <div className="flex min-h-screen">
      <CustomerSidebar />
      <main className="flex-1 bg-muted/20">
        <Outlet />
      </main>
    </div>
  );
};