import { redirect } from "next/navigation";

import { PatientForm } from "@/components/forms/PatientForm";
import { getPatient } from "@/lib/actions/patient.actions";

export default async function RegisterPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  // If you have a way to get the current user (e.g., from cookies/session), do it here
  // Example: const userId = getCurrentUserId();
  // For now, this is a placeholder
  const userId = undefined; // Replace with real logic
  if (userId) {
    const patient = await getPatient(userId);
    if (patient) {
      redirect(`/patients/${userId}/new-appointment`); // or dashboard
    }
  }
  return <PatientForm />;
} 