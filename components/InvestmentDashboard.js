import { useState, useEffect } from 'react';
import { Popover } from '@headlessui/react';
import Papa from 'papaparse';
import _ from 'lodash';

const InvestmentDashboard = () => {
  const [activeTab, setActiveTab] = useState('funds');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: '',
    country: '',
    industry: '',
    stage: ''
  });

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/${activeTab === 'funds' ? 'investment-funds' : 'investors'}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredData = data.filter(item => {
    const searchMatch = item.firmName?.toLowerCase().includes(filters.search.toLowerCase()) ||
                       item.fullName?.toLowerCase().includes(filters.search.toLowerCase()) ||
                       item.firstName?.toLowerCase().includes(filters.search.toLowerCase());
    
    const countryMatch = !filters.country || item.firmCountry === filters.country || item.country === filters.country;
    
    const industryMatch = !filters.industry || 
      (item.industryPreferences && item.industryPreferences.includes(filters.industry));
    
    const stageMatch = !filters.stage || 
      (item.stagePreferences && item.stagePreferences.includes(filters.stage));
    
    return searchMatch && countryMatch && industryMatch && stageMatch;
  });

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Tabs */}
      <div className="flex gap-4 border-b border-base-300">
        <button 
          onClick={() => setActiveTab('funds')}
          className={`pb-2 px-1 ${activeTab === 'funds' ? 'border-b-2 border-primary font-semibold' : ''}`}
        >
          Investment Funds
        </button>
        <button 
          onClick={() => setActiveTab('investors')}
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
          {_.uniq(data.map(item => item.firmCountry || item.country)).filter(Boolean).map(country => (
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

        <select 
          className="select select-bordered"
          value={filters.stage}
          onChange={(e) => setFilters(prev => ({...prev, stage: e.target.value}))}
        >
          <option value="">All Stages</option>
          {_.uniq(data.flatMap(item => item.stagePreferences || [])).filter(Boolean).map(stage => (
            <option key={stage} value={stage}>{stage}</option>
          ))}
        </select>
      </div>

      {/* Data Table */}
      {isLoading ? (
        <div className="flex justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
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
              {filteredData.map((item, index) => (
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
                    {item.minInvestment && (
                      <div>${item.minInvestment.toLocaleString()} - ${item.maxInvestment.toLocaleString()}</div>
                    )}
                  </td>
                  <td>
                    <Popover className="relative">
                      <Popover.Button className="btn btn-sm">View Details</Popover.Button>
                      <Popover.Panel className="absolute z-10 bg-base-100 p-4 rounded-box shadow-lg w-80">
                        <div className="space-y-2">
                          <h3 className="font-semibold">Investment Preferences</h3>
                          {item.industryPreferences?.length > 0 && (
                            <div>
                              <div className="text-sm opacity-60">Industries:</div>
                              <div className="flex flex-wrap gap-1">
                                {item.industryPreferences.map(industry => (
                                  <span key={industry} className="badge badge-sm">{industry}</span>
                                ))}
                              </div>
                            </div>
                          )}
                          {item.stagePreferences?.length > 0 && (
                            <div>
                              <div className="text-sm opacity-60">Stages:</div>
                              <div className="flex flex-wrap gap-1">
                                {item.stagePreferences.map(stage => (
                                  <span key={stage} className="badge badge-sm">{stage}</span>
                                ))}
                              </div>
                            </div>
                          )}
                          {item.geographicPreferences?.length > 0 && (
                            <div>
                              <div className="text-sm opacity-60">Geographic Focus:</div>
                              <div className="flex flex-wrap gap-1">
                                {item.geographicPreferences.map(geo => (
                                  <span key={geo} className="badge badge-sm">{geo}</span>
                                ))}
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
    </div>
  );
};

export default InvestmentDashboard;