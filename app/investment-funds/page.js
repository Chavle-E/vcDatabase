"use client";

import { useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function InvestmentFundsPage() {
  const [filters, setFilters] = useState({});
  
  const { data, error } = useSWR(
    `/api/investment-funds?name=${filters.name || ""}&location=${filters.location || ""}`,
    fetcher
  );

  if (error) return <div>Error loading investment funds</div>;
  if (!data || !Array.isArray(data)) return <div>No investment funds found</div>;

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Investment Funds</h1>
      {/* Filters */}
      <div className="flex gap-4 my-4">
        <input name="name" placeholder="Fund Name" onChange={handleFilterChange} />
        <input name="location" placeholder="Location" onChange={handleFilterChange} />
      </div>
      {/* Table */}
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {data.map((fund) => (
            <tr key={fund._id}>
              <td>{fund.firmName}</td>
              <td>{fund.contactEmail}</td>
              <td>{fund.contactPhone}</td>
              <td>{fund.firmCity}</td>
              <td>{fund.firmCountry}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}