// components/InvestmentDashboard/ResultsGrid.js
const ResultsGrid = ({ data, activeTab }) => {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <div key={item._id} className="card bg-base-100 shadow-lg hover:shadow-xl transition-all">
            <div className="card-body">
              <h3 className="card-title text-lg font-bold">
                {activeTab === 'funds' ? item.firmName : `${item.firstName} ${item.lastName}`}
              </h3>
              
              <div className="space-y-2">
                <p className="text-sm opacity-70">
                  📍 {item.firmCity || item.city}, {item.firmCountry || item.country}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  <span className="badge badge-primary">
                    {formatCurrency(item.capitalManaged)}
                  </span>
                  <span className="badge badge-secondary">
                    {item.financingType || item.typeOfFinancing}
                  </span>
                </div>
  
                <div className="divider my-2"></div>
  
                <div className="space-y-1">
                  <p className="text-sm font-medium">Investment Range:</p>
                  <div className="flex gap-2 text-sm">
                    <span>Min: {formatCurrency(item.minInvestment)}</span>
                    <span>Max: {formatCurrency(item.maxInvestment)}</span>
                  </div>
                </div>
  
                <div className="space-y-1">
                  <p className="text-sm font-medium">Industries:</p>
                  <div className="flex flex-wrap gap-1">
                    {item.industryPreferences?.map((industry, i) => (
                      <span key={i} className="badge badge-ghost badge-sm">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
  
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-primary btn-sm">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };