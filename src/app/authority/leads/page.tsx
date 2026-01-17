import React from "react";
import LeadsClient from "./LeadsClient";

export default function LeadsPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 font-sans">
      <div className="max-w-[1400px] mx-auto">
        <header className="mb-8 border-b border-white/20 pb-4">
          <h1 className="text-3xl font-bold tracking-tight">Leads Dashboard</h1>
          <p className="text-gray-400 mt-2">Manage all incoming leads from the contacts collection.</p>
        </header>

        <main>
          <LeadsClient />
        </main>
      </div>
    </div>
  );
}
