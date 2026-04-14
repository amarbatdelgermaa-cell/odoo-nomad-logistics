import { createContext, useContext, useState, useEffect } from 'react';

const MainContext = createContext();

export const useMainContext = () => {
  const context = useContext(MainContext);
  if (!context) throw new Error('useMainContext must be used within MainProvider');
  return context;
};

export const MainProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const companyInfo = {
    name: "Nomad Logistics",
    nameMn: "Нүүдэлчин Ложистик",
    email: "info@nomadlogistics.mn",
    phone: "+976 11 123456",
    address: "Чингэлтэй дүүрэг, 1-р хороо, Төв байр"
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ id: 1, name: "Туршилтын хэрэглэгч", role: "user" });
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    setUser({ id: 1, name: "Туршилтын хэрэглэгч", role: "user" });
    localStorage.setItem('token', 'fake-token');
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <MainContext.Provider value={{ user, loading, login, logout, companyInfo }}>
      {children}
    </MainContext.Provider>
  );
};