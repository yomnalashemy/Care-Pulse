"use client";

import { useEffect, useState } from "react";

import { PasskeyModal } from "./PasskeyModal";

export default function AdminGate({ children }: { children: React.ReactNode }) {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    // Check for the admin_access cookie on the client
    const isAdminCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("admin_access="))
      ?.split("=")[1];
    setIsAdmin(isAdminCookie === "true");
  }, []);

  if (isAdmin === null) return null; // or a loading spinner

  if (!isAdmin) return <PasskeyModal />;
  return <>{children}</>;
} 