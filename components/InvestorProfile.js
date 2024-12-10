// components/InvestorProfile.js
const InvestorProfile = ({ data }) => {
    return (
      <div className="bg-base-100 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-bold">{data.firstName} {data.lastName}</h1>
            <p className="text-base-content/70">
              {data.contactTitle} at {data.firmName}
            </p>
            <p className="text-sm text-base-content/60">
              Private Equity Fund in {data.city}, {data.country}
            </p>
          </div>
          <button className="btn btn-outline btn-sm">About</button>
        </div>
  
        {/* Key Metrics Grid */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          <MetricCard
            label="AUM"
            value={data.capitalManaged}
          />
          <MetricCard
            label="MIN INVESTMENT"
            value={data.minInvestment}
          />
          <MetricCard
            label="MAX INVESTMENT"
            value={data.maxInvestment}
          />
        </div>
  
        {/* Preferences Section */}
        <div className="space-y-6">
          <PreferenceSection
            title="Location Preferences"
            items={data.geographicPreferences}
          />
          <PreferenceSection
            title="Stage Preferences"
            items={data.stagePreferences}
          />
          <PreferenceSection
            title="Industry Preferences"
            items={data.industryPreferences}
          />
        </div>
      </div>
    );
  };