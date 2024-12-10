"use client";

import InvestmentDashboard from "@/components/InvestmentDashboard";

export default function InvestorsPage() {
  return (
    <main>
      <div className="p-8">
        <InvestmentDashboard initialTab="investors" />
      </div>
    </main>
  );
}