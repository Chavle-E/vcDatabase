// components/InvestmentDashboard.js
"use client";

import React, { useState, useEffect } from 'react';
import { Popover } from '@headlessui/react';
import _ from 'lodash';

const InvestmentDashboard = ({ initialTab = 'funds' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filters, setFilters] = useState({
    search: '',
    country: '',
    industry: '',
    stage: ''
  });

  useEffect(() => {
    fetchData();
  }, [activeTab, page, filters]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      
      // Build query string
      const params = new URLSearchParams({
        page,
        limit: 50,
        ...filters
      });
      
      const response = await fetch(`/api/${activeTab}?${params}`);
      const result = await response.json();
      
      if (result.error) {
        throw new Error(result.error);
      }
      
      setData(result[activeTab === 'funds' ? 'funds' : 'investors']);
      setTotalPages(result.pagination.totalPages);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          {activeTab === 'funds' ? 'Investment Funds' : 'Investors'}
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-base-300">
        <button 
          onClick={() => {
            setActiveTab('funds');
            setPage(1);
          }}
          className={`pb-2 px-1 ${activeTab === 'funds' ? 'border-b-2 border-primary font-semibold' : ''}`}
        >
          Investment Funds
        </button>
        <button 
          onClick={() => {
            setActiveTab('investors');
            setPage(1);
          }}
          className={`pb-2 px-1 ${activeTab === 'investors' ? 'border-b-2 border-primary font-semibold' : ''}`}
        >
          Investors
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered w-full max-w-xs"
          value={filters.search}
          onChange={(e) => setFilters(prev => ({...prev, search: e.target.value}))}
        />
        
        <select 
          className="select select-bordered"
          value={filters.country}
          onChange={(e) => setFilters(prev => ({...prev, country: e.target.value}))}
        >
          <option value="">All Countries</option>
          {_.uniq(data.map(item => activeTab === 'funds' ? item.firmCountry : item.country)).filter(Boolean).map(country => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>

        <select 
          className="select select-bordered"
          value={filters.industry}
          onChange={(e) => setFilters(prev => ({...prev, industry: e.target.value}))}
        >
          <option value="">All Industries</option>
          {_.uniq(data.flatMap(item => item.industryPreferences || [])).filter(Boolean).map(industry => (
            <option key={industry} value={industry}>{industry}</option>
          ))}
        </select>
      </div>

      {/* Data Table */}
      {isLoading ? (
        <div className="flex justify-center py-12">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="overflow-x-auto bg-base-100 rounded-box shadow-sm">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Contact</th>
                <th>Investment Range</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="hover">
                  <td>
                    {activeTab === 'funds' ? item.firmName : `${item.firstName} ${item.lastName}`}
                    {item.firmName && <div className="text-sm opacity-60">{item.firmName}</div>}
                  </td>
                  <td>
                    {activeTab === 'funds' ? item.firmCity : item.city}
                    <div className="text-sm opacity-60">
                      {activeTab === 'funds' ? item.firmCountry : item.country}
                    </div>
                  </td>
                  <td>
                    <a href={`mailto:${item.contactEmail || item.email}`} className="link link-primary">
                      {item.contactEmail || item.email}
                    </a>
                    {item.contactPhone && (
                      <div className="text-sm opacity-60">{item.contactPhone}</div>
                    )}
                  </td>
                  <td>
                    {(item.minInvestment || item.maxInvestment) && (
                      <div className="text-sm">
                        {item.minInvestment && `$${item.minInvestment.toLocaleString()}`}
                        {item.minInvestment && item.maxInvestment && ' - '}
                        {item.maxInvestment && `$${item.maxInvestment.toLocaleString()}`}
                      </div>
                    )}
                  </td>
                  <td>
                    <Popover className="relative">
                      <Popover.Button className="btn btn-sm">View Details</Popover.Button>
                      <Popover.Panel className="absolute z-10 right-0 mt-2 bg-base-100 p-4 rounded-box shadow-lg w-80">
                        <div className="space-y-4">
                          <h3 className="font-semibold border-b pb-2">Investment Preferences</h3>
                          
                          {item.industryPreferences?.length > 0 && (
                            <div>
                              <div className="text-sm font-medium mb-1">Industries:</div>
                              <div className="flex flex-wrap gap-1">
                                {item.industryPreferences.map(industry => (
                                  <span key={industry} className="badge badge-sm">{industry}</span>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {item.stagePreferences?.length > 0 && (
                            <div>
                              <div className="text-sm font-medium mb-1">Stages:</div>
                              <div className="flex flex-wrap gap-1">
                                {item.stagePreferences.map(stage => (
                                  <span key={stage} className="badge badge-sm">{stage}</span>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {item.geographicPreferences?.length > 0 && (
                            <div>
                              <div className="text-sm font-medium mb-1">Geographic Focus:</div>
                              <div className="flex flex-wrap gap-1">
                                {item.geographicPreferences.map(geo => (
                                  <span key={geo} className="badge badge-sm">{geo}</span>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {item.capitalManaged > 0 && (
                            <div>
                              <div className="text-sm font-medium mb-1">Capital Managed:</div>
                              <div className="text-sm">
                                ${item.capitalManaged.toLocaleString()}
                              </div>
                            </div>
                          )}
                        </div>
                      </Popover.Panel>
                    </Popover>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center gap-2">
        <button
          className="btn btn-sm"
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span className="flex items-center px-4">
          Page {page} of {totalPages}
        </span>
        <button
          className="btn btn-sm"
          onClick={() => setPage(p => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default InvestmentDashboard;