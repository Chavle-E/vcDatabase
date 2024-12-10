"use client";

import React, { useState, useEffect } from 'react';
import { Popover } from '@headlessui/react';
import { useRouter, usePathname } from 'next/navigation';
import FilterPanel from './FilterPanel';
import _ from 'lodash';

const InvestmentDashboard = ({ initialTab = 'funds' }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(initialTab);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filters, setFilters] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  // Update URL when tab changes
  const handleTabChange = (tab) => {
    const newPath = `/${tab === 'funds' ? 'investment-funds' : 'investors'}`;
    router.push(newPath);
    setActiveTab(tab);
    setPage(1);
  };
  
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setPage(1); // Reset to first page when filters change
  };

  useEffect(() => {
    // Update active tab based on URL
    if (pathname.includes('investment-funds')) {
      setActiveTab('funds');
    } else if (pathname.includes('investors')) {
      setActiveTab('investors');
    }
  }, [pathname]);
  
  useEffect(() => {
    fetchData();
  }, [activeTab, page, filters, searchTerm]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      
      const endpoint = activeTab === 'funds' ? 'investment-funds' : 'investors';
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '50',
        search: searchTerm
      });
      
      // Add filters to params
      Object.entries(filters).forEach(([category, fields]) => {
        Object.entries(fields).forEach(([field, value]) => {
          if (value) {
            if (Array.isArray(value)) {
              value.forEach(v => params.append(`${category}.${field}[]`, v));
            } else if (typeof value === 'boolean') {
              params.append(`${category}.${field}`, value ? '1' : '0');
            } else {
              params.append(`${category}.${field}`, value);
            }
          }
        });
      });
      
      const response = await fetch(`/api/${endpoint}?${params}`);
      const result = await response.json();
      
      if (result.error) {
        throw new Error(result.error);
      }
      
      setData(result[activeTab === 'funds' ? 'funds' : 'investors'] || []);
      setTotalPages(result.pagination?.totalPages || 0);
      
    } catch (error) {
      console.error('Error fetching data:', error);
      setData([]);
      setTotalPages(0);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-8 space-y-4">
        <h1 className="text-3xl font-bold">
          {activeTab === 'funds' ? 'Investment Funds' : 'Investors'} Database
        </h1>
        <p className="text-base-content/70">
          Browse and filter through our comprehensive database of 
          {activeTab === 'funds' ? ' investment funds ' : ' investors '} 
          to find your perfect match.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div className="tabs tabs-boxed">
          <button 
            className={`tab ${activeTab === 'funds' ? 'tab-active' : ''}`}
            onClick={() => handleTabChange('funds')}
          >
            Investment Funds
          </button>
          <button 
            className={`tab ${activeTab === 'investors' ? 'tab-active' : ''}`}
            onClick={() => handleTabChange('investors')}
          >
            Investors
          </button>
        </div>

        {/* Search */}
        <div className="form-control w-full sm:w-auto">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search by name, location..."
              className="input input-bordered w-full max-w-sm"
              onChange={(e) => {
                const value = e.target.value;
                _.debounce(() => setSearchTerm(value), 300)();
              }}
            />
            <button className="btn btn-square">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filter Panel */}
        <div className="w-full lg:w-80 shrink-0">
          <FilterPanel 
            type={activeTab} 
            onFilterChange={handleFilterChange}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-8">
          {isLoading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : data.length === 0 ? (
            <div className="flex flex-col items-center justify-center min-h-[400px] text-center space-y-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold">No results found</h3>
                <p className="text-base-content/70">Try adjusting your search or filters</p>
              </div>
              <button 
                className="btn btn-primary btn-sm" 
                onClick={() => {
                  setFilters({});
                  setSearchTerm("");
                }}
              >
                Clear all filters
              </button>
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
          {data.length > 0 && (
            <div className="flex justify-between items-center">
              <span className="text-sm text-base-content/70">
                Page {page} of {totalPages}
              </span>
              <div className="join">
                <button
                  className="join-item btn btn-sm"
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                >
                  «
                </button>
                <button className="join-item btn btn-sm">Page {page}</button>
                <button
                  className="join-item btn btn-sm"
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                >
                  »
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InvestmentDashboard;