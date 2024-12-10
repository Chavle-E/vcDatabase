// schemas.js
export const investorFilterSchema = {
    contactInfo: {
      hasEmail: { type: 'boolean', label: 'Has Email' },
      hasPhone: { type: 'boolean', label: 'Has Phone' },
      hasAddress: { type: 'boolean', label: 'Has Address' }
    },
    location: {
      city: { type: 'text', label: 'City' },
      state: { type: 'text', label: 'State' },
      country: { type: 'text', label: 'Country' },
      location_preferences: { type: 'array', label: 'Location Preferences' }
    },
    industry: {
      industries: { type: 'array', label: 'Industry Preferences' }
    },
    fundType: {
      types: { type: 'array', label: 'Fund Type' }
    },
    stages: {
      stages: { type: 'array', label: 'Stage Preferences' }
    },
    investmentRanges: {
      assetsUnderManagement: { 
        type: 'range',
        label: 'Assets Under Management',
        options: [
          { label: '$0-25M', value: '0_25M' },
          { label: '$25M-100M', value: '25M_100M' },
          { label: '$100M-500M', value: '100M_500M' },
          { label: '$500M-1B', value: '500M_1B' },
          { label: '$1B+', value: '1B_PLUS' }
        ]
      },
      minInvestment: {
        type: 'range', 
        label: 'Minimum Investment',
        options: [
          { label: '$0-25K', value: '0_25K' },
          { label: '$25K-250K', value: '25K_250K' },
          { label: '$250K-1M', value: '250K_1M' },
          { label: '$1M-5M', value: '1M_5M' },
          { label: '$5M+', value: '5M_PLUS' }
        ]
      },
      maxInvestment: {
        type: 'range',
        label: 'Maximum Investment',
        options: [
          { label: '$0-1M', value: '0_1M' },
          { label: '$1M-10M', value: '1M_10M' },
          { label: '$10M-25M', value: '10M_25M' },
          { label: '$25M-150M', value: '25M_150M' },
          { label: '$150M+', value: '150M_PLUS' }
        ]
      }
    },
    firm: {
      names: { type: 'array', label: 'Firm' }
    },
    jobTitle: {
      titles: { type: 'array', label: 'Job Title' }
    },
    investorCount: {
      range: { 
        type: 'range',
        label: 'Number of Investors',
        options: [
          { label: '1-10', value: '1_10' },
          { label: '11-20', value: '11_20' },
          { label: '21-30', value: '21_30' },
          { label: '31-40', value: '31_40' }
        ]
      }
    },
    gender: {
      gender: { 
        type: 'select',
        label: 'Gender',
        options: [
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' }
        ]
      }
    }
  };
  
  export const fundFilterSchema = {
    contactInfo: {
      hasEmail: { type: 'boolean', label: 'Has Email' },
      hasPhone: { type: 'boolean', label: 'Has Phone' },
      hasAddress: { type: 'boolean', label: 'Has Address' }
    },
    location: {
      city: { type: 'text', label: 'City' },
      state: { type: 'text', label: 'State' },
      country: { type: 'text', label: 'Country' },
      location_preferences: { type: 'array', label: 'Location Preferences' }
    },
    industry: {
      industries: { type: 'array', label: 'Industry Preferences' }
    },
    fundType: {
      types: { type: 'array', label: 'Fund Type' }
    },
    stages: {
      stages: { type: 'array', label: 'Stage Preferences' }
    },
    investmentRanges: {
      assetsUnderManagement: { 
        type: 'range',
        label: 'Assets Under Management',
        options: [
          { label: '$0-25M', value: '0_25M' },
          { label: '$25M-100M', value: '25M_100M' },
          { label: '$100M-500M', value: '100M_500M' },
          { label: '$500M-1B', value: '500M_1B' },
          { label: '$1B+', value: '1B_PLUS' }
        ]
      },
      minInvestment: {
        type: 'range',
        label: 'Minimum Investment',
        options: [
          { label: '$0-25K', value: '0_25K' },
          { label: '$25K-250K', value: '25K_250K' },
          { label: '$250K-1M', value: '250K_1M' },
          { label: '$1M-5M', value: '1M_5M' },
          { label: '$5M+', value: '5M_PLUS' }
        ]
      },
      maxInvestment: {
        type: 'range',
        label: 'Maximum Investment',
        options: [
          { label: '$0-1M', value: '0_1M' },
          { label: '$1M-10M', value: '1M_10M' },
          { label: '$10M-25M', value: '10M_25M' },
          { label: '$25M-150M', value: '25M_150M' },
          { label: '$150M+', value: '150M_PLUS' }
        ]
      }
    },
    investorCount: {
      range: {
        type: 'range',
        label: 'Number of Investors',
        options: [
          { label: '1-10', value: '1_10' },
          { label: '11-20', value: '11_20' },
          { label: '21-30', value: '21_30' },
          { label: '31-40', value: '31_40' }
        ]
      }
    },
    genderRatio: {
      ratio: {
        type: 'select',
        label: 'Gender Ratio',
        options: [
          { label: '0% Female', value: 'NO_FEMALE' },
          { label: '25% Female', value: 'FEMALE_25' },
          { label: '33% Female', value: 'FEMALE_33' },
          { label: '50% Female', value: 'FEMALE_50' },
          { label: '67% Female', value: 'FEMALE_67' },
          { label: '75% Female', value: 'FEMALE_75' },
          { label: '100% Female', value: 'FEMALE_100' }
        ]
      }
    }
  };