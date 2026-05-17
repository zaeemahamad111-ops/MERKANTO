"use client";

import { useState, useEffect } from "react";

export interface Admin {
  id: string;
  name: string;
  email: string;
  password?: string;
  role: "admin";
  joinedDate: string;
}

const DEFAULT_ADMINS: Admin[] = [
  {
    id: "a1",
    name: "Merkanto Executive",
    email: "admin@merkanto.com",
    password: "admin123",
    role: "admin",
    joinedDate: "2024-01-01"
  }
];

export function useAdmins() {
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("merkanto_admins");
    if (saved) {
      try {
        setAdmins(JSON.parse(saved));
      } catch (e) {
        setAdmins(DEFAULT_ADMINS);
      }
    } else {
      setAdmins(DEFAULT_ADMINS);
      localStorage.setItem("merkanto_admins", JSON.stringify(DEFAULT_ADMINS));
    }
    setIsLoaded(true);
  }, []);

  const save = (newAdmins: Admin[]) => {
    setAdmins(newAdmins);
    localStorage.setItem("merkanto_admins", JSON.stringify(newAdmins));
  };

  const addAdmin = (data: Omit<Admin, "id" | "joinedDate" | "role">) => {
    const newAdmin: Admin = {
      ...data,
      id: Math.random().toString(36).substring(2, 9),
      role: "admin",
      joinedDate: new Date().toISOString().split("T")[0]
    };
    save([...admins, newAdmin]);
  };

  const deleteAdmin = (id: string) => {
    // Prevent deleting the primary admin
    if (id === "a1") return;
    save(admins.filter(a => a.id !== id));
  };

  const updateAdmin = (id: string, updates: Partial<Admin>) => {
    save(admins.map(a => a.id === id ? { ...a, ...updates } : a));
  };

  return {
    admins,
    isLoaded,
    addAdmin,
    deleteAdmin,
    updateAdmin
  };
}
