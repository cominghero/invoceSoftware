import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UserProvider, useUser } from "@/contexts/UserContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Landing } from "@/pages/Landing";
import { AdminLayout } from "@/layouts/AdminLayout";
import { CustomerLayout } from "@/layouts/CustomerLayout";
import { AdminDashboard } from "@/pages/admin/AdminDashboard";
import { AdminInvoices } from "@/pages/admin/AdminInvoices";
import { AdminEstimates } from "@/pages/admin/AdminEstimates";
import { AdminBlueprints } from "@/pages/admin/AdminBlueprints";
import { CustomerDashboard } from "@/pages/customer/CustomerDashboard";
import { CustomerInvoices } from "@/pages/customer/CustomerInvoices";
import { CustomerEstimates } from "@/pages/customer/CustomerEstimates";

const queryClient = new QueryClient();

const AppContent = () => {
  const { userRole } = useUser();

  if (!userRole) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Landing />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Routes>
          {userRole === 'admin' && (
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="invoices" element={<AdminInvoices />} />
              <Route path="estimates" element={<AdminEstimates />} />
              <Route path="customers" element={<div className="p-6"><h1 className="heading-lg">Customers (Coming Soon)</h1></div>} />
              <Route path="products" element={<div className="p-6"><h1 className="heading-lg">Products (Coming Soon)</h1></div>} />
              <Route path="blueprints" element={<AdminBlueprints />} />
              <Route path="reports" element={<div className="p-6"><h1 className="heading-lg">Reports (Coming Soon)</h1></div>} />
              <Route path="settings" element={<div className="p-6"><h1 className="heading-lg">Settings (Coming Soon)</h1></div>} />
            </Route>
          )}
          
          {userRole === 'customer' && (
            <Route path="/customer" element={<CustomerLayout />}>
              <Route index element={<CustomerDashboard />} />
              <Route path="invoices" element={<CustomerInvoices />} />
              <Route path="estimates" element={<CustomerEstimates />} />
              <Route path="payments" element={<div className="p-6"><h1 className="heading-lg">Payment History (Coming Soon)</h1></div>} />
              <Route path="profile" element={<div className="p-6"><h1 className="heading-lg">Profile Settings (Coming Soon)</h1></div>} />
            </Route>
          )}
          
          <Route path="*" element={<Navigate to={userRole === 'admin' ? '/admin' : '/customer'} replace />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <UserProvider>
          <AppContent />
        </UserProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
