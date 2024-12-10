// components/FilterPanel.js
import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { investorFilterSchema, fundFilterSchema } from '@/schemas/filters';

const FilterPanel = ({ type = 'investors', onFilterChange }) => {
  const schema = type === 'investors' ? investorFilterSchema : fundFilterSchema;
  const [filters, setFilters] = useState({});

  const handleFilterChange = (category, field, value) => {
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

  const renderFilterInput = (field, config, category) => {
    const value = filters[category]?.[field] || '';

    switch (config.type) {
      case 'boolean':
        return (
          <input
            type="checkbox"
            className="toggle"
            checked={value || false}
            onChange={(e) => handleFilterChange(category, field, e.target.checked)}
          />
        );

      case 'text':
        return (
          <input
            type="text"
            className="input input-bordered w-full"
            value={value}
            onChange={(e) => handleFilterChange(category, field, e.target.value)}
            placeholder={`Enter ${config.label.toLowerCase()}...`}
          />
        );

      case 'select':
        return (
          <select
            className="select select-bordered w-full"
            value={value}
            onChange={(e) => handleFilterChange(category, field, e.target.value)}
          >
            <option value="">Select {config.label}</option>
            {config.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case 'range':
        return (
          <select
            className="select select-bordered w-full"
            value={value}
            onChange={(e) => handleFilterChange(category, field, e.target.value)}
          >
            <option value="">Any {config.label}</option>
            {config.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case 'array':
        return (
          <input
            type="text"
            className="input input-bordered w-full"
            value={Array.isArray(value) ? value.join(', ') : value}
            onChange={(e) => handleFilterChange(
              category,
              field,
              e.target.value.split(',').map(x => x.trim()).filter(Boolean)
            )}
            placeholder={`Enter ${config.label.toLowerCase()} (comma-separated)...`}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-base-200 p-4 rounded-lg space-y-4">
      <h3 className="font-bold text-lg mb-4">Filters</h3>
      
      {Object.entries(schema).map(([category, fields]) => (
        <Disclosure key={category} defaultOpen={true}>
          {({ open }) => (
            <>
              <Disclosure.Button className="w-full flex justify-between items-center btn btn-sm mb-2">
                <span className="capitalize">{category.replace(/([A-Z])/g, ' $1').trim()}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 transform ${open ? 'rotate-180' : ''}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className="space-y-4 p-4 bg-base-100 rounded-lg">
                {Object.entries(fields).map(([field, config]) => (
                  <div key={field} className="form-control">
                    <label className="label">
                      <span className="label-text">{config.label}</span>
                    </label>
                    {renderFilterInput(field, config, category)}
                  </div>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}

      <button
        className="btn btn-sm btn-outline w-full mt-4"
        onClick={() => {
          setFilters({});
          onFilterChange({});
        }}
      >
        Clear All Filters
      </button>
    </div>
  );
};

export default FilterPanel;