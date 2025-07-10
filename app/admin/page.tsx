import Image from "next/image"
import Link from "next/link"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { StatCard } from "@/components/StatCard"
import { columns } from "@/components/table/columns"
import { DataTable } from "@/components/table/DataTable"
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions"
import { PasskeyModal } from "@/components/PasskeyModal";
import AdminGate from "@/components/AdminGate";

const AdminPage = async () => {
  const data = (await getRecentAppointmentList()) || {
    scheduledCount: 0,
    pendingCount: 0,
    cancelledCount: 0,
    totalCount: 0,
    documents: [],
  };

  return (
    <AdminGate>
      <div className="mx-auto flex max-w-7xl flex-col space-y-14">
        <header className="admin-header">
          <Link href="/" className="cursor-pointer">
            <Image src="/assets/icons/logo-full.svg" height={32} width={162} alt="logo" className="h-8 w-fit" />
          </Link>
          <p className="text-16-semibold">Admin Dashboard</p>
        </header>
        <main className="admin-main">
          <section className="w-full space-y-4">
            <h1 className="header">Welcome 👋</h1>
            <p className="text-dark-700">Start the day with managing new appointments</p>
          </section>
          <section className="admin-stat">
            <StatCard
              type="appointments"
              count={data.scheduledCount}
              label="Scheduled appointments"
              icon={"/assets/icons/appointments.svg"}
            />
            <StatCard
              type="pending"
              count={data.pendingCount}
              label="Pending appointments"
              icon={"/assets/icons/pending.svg"}
            />
            <StatCard
              type="cancelled"
              count={data.cancelledCount}
              label="Cancelled appointments"
              icon={"/assets/icons/cancelled.svg"}
            />
          </section>
          <DataTable columns={columns} data={data.documents} />
        </main>
      </div>
    </AdminGate>
  );
};

export default AdminPage;
