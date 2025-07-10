import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import RegisterForm from "@/components/forms/RegisterForm";
import { getPatient } from "@/lib/actions/patient.actions";

interface SearchParamProps {
  searchParams: { [key: string]: string | string[] | undefined }
  params: { [key: string]: string }
}

const Register = async ({ params, searchParams }: SearchParamProps) => {
  const userId = params.userId;
  // Check if patient already exists
  const patient = await getPatient(userId);
  if (patient) {
    redirect(`/patients/${userId}/new-appointment`); // or dashboard if you have one
  }
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />
          <RegisterForm user={{ $id: userId, name: "", email: "", phone: "" }} />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">© 2024 CarePluse</p>
            <Link href="/register?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
};

export default Register;
