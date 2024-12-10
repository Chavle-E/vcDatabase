"use client";

import { useState } from 'react';
import { investorFilterSchema, fundFilterSchema } from '@/schemas/filters';

const FilterSection = ({ title, options, value, onChange, showCount = true }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const optionsArray = options || [];
  const shouldShowToggle = optionsArray.length > 10;
  const displayOptions = isExpanded ? optionsArray : optionsArray.slice(0, 10);

  return (
    <div className="space-y-2">
      <h4 className="font-medium text-base">{title}</h4>
      <div className="space-y-1">
        {displayOptions.map((option) => (
          <label key={option.value} className="flex items-center gap-2 cursor-pointer hover:bg-base-200 p-1 rounded-lg">
            <input
              type="checkbox"
              className="checkbox checkbox-sm"
              checked={value?.includes(option.value)}
              onChange={(e) => {
                if (e.target.checked) {
                  onChange([...(value || []), option.value]);
                } else {
                  onChange(value.filter(v => v !== option.value));
                }
              }}
            />
            <span className="flex-1">{option.label}</span>
            {showCount && option.count !== undefined && (
              <span className="text-xs opacity-60">{option.count.toLocaleString()}</span>
            )}
          </label>
        ))}
      </div>
      
      {shouldShowToggle && (
        <button
          className="btn btn-ghost btn-xs w-full text-base-content/60 hover:text-base-content"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          Show {isExpanded ? 'Less' : 'More'}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      )}
    </div>
  );
};

const FilterPanel = ({ type = 'investors', onFilterChange, currentFilters = {} }) => {
  const schema = type === 'investors' ? investorFilterSchema : fundFilterSchema;
  const [filters, setFilters] = useState(currentFilters);

  const handleChange = (category, field, value) => {
    const newFilters = {
      ...filters,
      [category]: {
        ...(filters[category] || {}),
        [field]: value
      }
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleClearAll = () => {
    setFilters({});
    onFilterChange({});
  };

  return (
    <div className="bg-base-100 rounded-box border border-base-200 divide-y divide-base-200">
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <h3 className="font-semibold">Filters</h3>
        <button 
          className="btn btn-ghost btn-xs"
          onClick={handleClearAll}
        >
          Clear all
        </button>
      </div>

      {/* Filter Sections */}
      <div className="divide-y divide-base-200">
        {/* Contact Info Section */}
        <div className="p-4 space-y-4">
          <h4 className="font-medium">Contact Information</h4>
          {Object.entries(schema.contactInfo || {}).map(([field, config]) => (
            <div key={field} className="form-control">
              <label className="label cursor-pointer justify-start gap-3">
                <input
                  type="checkbox"
                  className="toggle toggle-sm"
                  checked={filters?.contactInfo?.[field] || false}
                  onChange={(e) => handleChange('contactInfo', field, e.target.checked)}
                />
                <span className="label-text flex-1">{config.label}</span>
              </label>
            </div>
          ))}
        </div>

        {/* Location Section */}
        {schema.location && (
          <div className="p-4 space-y-4">
            {Object.entries(schema.location).map(([field, config]) => (
              <FilterSection
                key={field}
                title={config.label}
                options={config.options || []}
                value={filters?.location?.[field] || []}
                onChange={(value) => handleChange('location', field, value)}
              />
            ))}
          </div>
        )}

        {/* Industry Section */}
        {schema.industry && (
          <div className="p-4">
            <FilterSection
              title="Industry Preferences"
              options={schema.industry.options || []}
              value={filters?.industry?.industries || []}
              onChange={(value) => handleChange('industry', 'industries', value)}
            />
          </div>
        )}

        {/* Investment Stage Section */}
        {schema.stages && (
          <div className="p-4">
            <FilterSection
              title="Investment Stage"
              options={schema.stages.stages?.options || []}
              value={filters?.stages?.stages || []}
              onChange={(value) => handleChange('stages', 'stages', value)}
            />
          </div>
        )}

        {/* Investment Range Section */}
        <div className="p-4 space-y-4">
          {schema.investmentRanges && (
            <>
              {schema.investmentRanges.assetsUnderManagement && (
                <FilterSection
                  title="Assets Under Management"
                  options={schema.investmentRanges.assetsUnderManagement.options || []}
                  value={filters?.investmentRanges?.assetsUnderManagement || []}
                  onChange={(value) => handleChange('investmentRanges', 'assetsUnderManagement', value)}
                />
              )}
              {schema.investmentRanges.minInvestment && (
                <FilterSection
                  title="Minimum Investment"
                  options={schema.investmentRanges.minInvestment.options || []}
                  value={filters?.investmentRanges?.minInvestment || []}
                  onChange={(value) => handleChange('investmentRanges', 'minInvestment', value)}
                />
              )}
            </>
          )}
        </div>

        {/* Conditional Sections based on type */}
        {type === 'investors' ? (
          <>
            {/* Gender Section - Investors Only */}
            {schema.gender && (
              <div className="p-4">
                <FilterSection
                  title="Gender"
                  options={schema.gender.gender?.options || []}
                  value={filters?.gender?.gender || []}
                  onChange={(value) => handleChange('gender', 'gender', value)}
                />
              </div>
            )}
          </>
        ) : (
          <>
            {/* Gender Ratio Section - Funds Only */}
            {schema.genderRatio && (
              <div className="p-4">
                <FilterSection
                  title="Gender Ratio"
                  options={schema.genderRatio.ratio?.options || []}
                  value={filters?.genderRatio?.ratio || []}
                  onChange={(value) => handleChange('genderRatio', 'ratio', value)}
                />
              </div>
            )}
          </>
        )}

        {/* Applied Filters Count */}
        <div className="p-4 text-sm text-base-content/70">
          {Object.values(filters).some(value => 
            value && typeof value === 'object' && Object.keys(value).length > 0
          ) ? (
            <span>
              {Object.values(filters).reduce((count, value) => {
                if (value && typeof value === 'object') {
                  return count + Object.keys(value).length;
                }
                return count;
              }, 0)} filters applied
            </span>
          ) : (
            <span>No filters applied</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;