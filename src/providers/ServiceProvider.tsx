import { createContext, useContext, useEffect, useState } from "react";

type ServiceType = {
  patientInfo: object;
};

type ServiceContextType = {
  service: ServiceType[] | [];
  addService: () => void;
  removeService: () => void;
  updateService: () => void;
};

const ServiceContext = createContext<ServiceContextType | undefined>(undefined);

export default function ServiceProvider({ children }: { children: React.ReactNode }) {
  const [service, setService] = useState<ServiceType[] | []>([]);

  //load localstorage
  useEffect(() => {
    const stored = localStorage.getItem("service");
    if (stored) setService(JSON.parse(stored));
  }, []);

  //stor to localstorage after change service
  useEffect(() => {
    localStorage.setItem("service", JSON.stringify(service));
  }, [service]);

  const addService = () => {};

  const updateService = () => {};

  const removeService = () => {};
  return (
    <ServiceContext.Provider value={{ service, addService, removeService, updateService }}>
      {children}
    </ServiceContext.Provider>
  );
}

export const useService = () => {
  const context = useContext(ServiceContext);
  if (!context) throw new Error("useService must be used within a ServiceProvider");
  return context;
};
