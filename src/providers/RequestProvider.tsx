"use client";

import { createContext, useContext, useEffect, useState } from "react";

const initialRequest = {};

const ServiceContext = createContext();

export default function RequestProvider({ children }: { children: React.ReactNode }) {
  const [requests, setRequests] = useState(initialRequest);

  useEffect(() => {
    const stored = localStorage.getItem("requests");
    if (stored) setRequests(JSON.parse(stored));
  }, []);

  useEffect(() => {
    if (requests) localStorage.setItem("requests", JSON.stringify(requests));
  }, [requests]);

  return <ServiceContext.Provider value={""}>{children}</ServiceContext.Provider>;
}

export const useService = () => {
  const context = useContext(ServiceContext);
  if (!context) throw new Error("useService must be used within a ServiceProvider");
  return context;
};
