"use client";
import { PatientRequestType } from "@/types/patientTypes";
import { RequestItemType } from "@/types/requestTypes";

import { createContext, useContext, useEffect, useState } from "react";

const initialRequest: PatientRequestType = {
  patientId: "",
  requestsList: [],
};

type ServiceContextType = {
  updateRequest: (data: RequestItemType) => void;
  updateRequestList: (data: RequestItemType) => void;
  requestList: RequestItemType[]|[];
  removeRequest: () => void;
};

const ServiceContext = createContext<ServiceContextType>();

export default function RequestProvider({ children }: { children: React.ReactNode }) {
  const [requests, setRequests] = useState<PatientRequestType>(initialRequest);

  useEffect(() => {
    const stored = localStorage.getItem("requests");
    if (stored) setRequests(JSON.parse(stored));
  }, []);

  useEffect(() => {
    if (requests) localStorage.setItem("requests", JSON.stringify(requests));
  }, [requests]);

  const updateRequest = (data: Partial<PatientRequestType>) => {
    setRequests((prev) => {
      const updated = { ...prev, ...data };
      localStorage.setItem("requests", JSON.stringify(updated));
      return updated;
    });
  };

  const removeRequest = () => {
    setRequests(initialRequest);
    localStorage.removeItem("request");
  };

  const updateRequestList = (data: ServiceItemType) => {
    const newRequest = { ...requests };
    requests.requestsList?.push(data);
    setRequests(newRequest);
  };

  const requestList = requests.requestsList;

  return (
    <ServiceContext.Provider
      value={{ requestList, removeRequest, updateRequest, updateRequestList }}
    >
      {children}
    </ServiceContext.Provider>
  );
}

export const useService = () => {
  const context = useContext(ServiceContext);
  if (!context) throw new Error("useService must be used within a ServiceProvider");
  return context;
};
