"use client";

import InvestmentDashboard from "@/components/InvestmentDashboard";

export default function InvestmentFundsPage() {
  return (
    <main>
      <div className="p-8">
        <InvestmentDashboard initialTab="funds" />
      </div>
    </main>
  );
}