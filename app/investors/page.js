"use client";

import { useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function InvestorsPage() {
  const [filters, setFilters] = useState({});
  
  const { data, error } = useSWR(
    `/api/investors?name=${filters.name || ""}&city=${filters.city || ""}&country=${filters.country || ""}`,
    fetcher
  );

  if (error) return <div>Error loading investors</div>;
  if (!data || !Array.isArray(data)) return <div>No investors found</div>;

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Investors</h1>
      {/* Filters */}
      <div className="flex gap-4 my-4">
        <input name="name" placeholder="Name" onChange={handleFilterChange} />
        <input name="city" placeholder="City" onChange={handleFilterChange} />
        <input name="country" placeholder="Country" onChange={handleFilterChange} />
      </div>
      {/* Table */}
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Firm</th>
            <th>City</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {data.map((investor) => (
            <tr key={investor._id}>
              <td>{investor.firstName} {investor.lastName}</td>
              <td>{investor.email}</td>
              <td>{investor.firmName}</td>
              <td>{investor.city}</td>
              <td>{investor.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}