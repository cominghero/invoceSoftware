import React, { createContext, useContext, useState } from 'react';

type UserRole = 'admin' | 'customer' | null;

interface UserContextType {
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  userData: any;
  setUserData: (data: any) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [userData, setUserData] = useState(null);

  return (
    <UserContext.Provider value={{ userRole, setUserRole, userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};