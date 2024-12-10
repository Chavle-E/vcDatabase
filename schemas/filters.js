// schemas.js
export const investorFilterSchema = {
  contactInfo: {
    hasEmail: { 
      type: 'boolean', 
      label: 'Has Email',
      options: [
        { label: 'Email available', value: true, count: 36122 },
        { label: 'Email unavailable', value: false, count: 1470 }
      ]
    },
    hasPhone: { 
      type: 'boolean', 
      label: 'Has Phone',
      options: [
        { label: 'Phone available', value: true, count: 32899 },
        { label: 'Phone unavailable', value: false, count: 4693 }
      ]
    },
    hasAddress: { 
      type: 'boolean', 
      label: 'Has Address',
      options: [
        { label: 'Office address available', value: true, count: 37534 },
        { label: 'Office address unavailable', value: false, count: 56 }
      ]
    }
  },
  location: {
    city: { 
      type: 'text', 
      label: 'City',
      options: [
        { label: 'New York', value: 'new_york', count: 4377 },
        { label: 'London', value: 'london', count: 2762 },
        { label: 'San Francisco', value: 'san_francisco', count: 1593 },
        { label: 'Chicago', value: 'chicago', count: 1366 },
        { label: 'Boston', value: 'boston', count: 1245 },
        { label: 'Paris', value: 'paris', count: 1214 },
        { label: 'Toronto', value: 'toronto', count: 660 },
        { label: 'Palo Alto', value: 'palo_alto', count: 656 },
        { label: 'Menlo Park', value: 'menlo_park', count: 645 },
        { label: 'Dallas', value: 'dallas', count: 644 },
        { label: 'Los Angeles', value: 'los_angeles', count: 531 },
        { label: 'Houston', value: 'houston', count: 487 },
        { label: 'Stockholm', value: 'stockholm', count: 452 },
        { label: 'Munich', value: 'munich', count: 443 },
        { label: 'Shanghai', value: 'shanghai', count: 420 },
        { label: 'Amsterdam', value: 'amsterdam', count: 394 },
        { label: 'Beijing', value: 'beijing', count: 389 },
        { label: 'Greenwich', value: 'greenwich', count: 372 },
        { label: 'Mumbai', value: 'mumbai', count: 339 },
        { label: 'Tokyo', value: 'tokyo', count: 294 }
      ]
    },
    state: { 
      type: 'text', 
      label: 'State',
      options: [
        { label: 'California', value: 'ca', count: 5050 },
        { label: 'New York', value: 'ny', count: 4652 },
        { label: 'Massachusetts', value: 'ma', count: 1894 },
        { label: 'Illinois', value: 'il', count: 1597 },
        { label: 'Texas', value: 'tx', count: 1597 },
        { label: 'Connecticut', value: 'ct', count: 886 },
        { label: 'Ontario', value: 'on', count: 706 },
        { label: 'Pennsylvania', value: 'pa', count: 634 },
        { label: 'Florida', value: 'fl', count: 544 },
        { label: 'North Carolina', value: 'nc', count: 364 },
        { label: 'Colorado', value: 'co', count: 357 },
        { label: 'Maryland', value: 'md', count: 337 },
        { label: 'Michigan', value: 'mi', count: 326 },
        { label: 'New South Wales', value: 'nsw', count: 311 },
        { label: 'Georgia', value: 'ga', count: 305 },
        { label: 'Ohio', value: 'oh', count: 303 },
        { label: 'Virginia', value: 'va', count: 283 },
        { label: 'Minnesota', value: 'mn', count: 258 },
        { label: 'District of Columbia', value: 'dc', count: 219 },
        { label: 'Missouri', value: 'mo', count: 205 }
      ]
    },
    country: { 
      type: 'text', 
      label: 'Country',
      options: [
        { label: 'United States', value: 'us', count: 21335 },
        { label: 'United Kingdom', value: 'uk', count: 3290 },
        { label: 'France', value: 'fr', count: 1492 },
        { label: 'Germany', value: 'de', count: 1380 },
        { label: 'Canada', value: 'ca', count: 1250 },
        { label: 'China', value: 'cn', count: 873 },
        { label: 'Netherlands', value: 'nl', count: 672 },
        { label: 'India', value: 'in', count: 636 },
        { label: 'Sweden', value: 'se', count: 544 },
        { label: 'Israel', value: 'il', count: 464 },
        { label: 'Spain', value: 'es', count: 437 },
        { label: 'Australia', value: 'au', count: 419 },
        { label: 'Singapore', value: 'sg', count: 382 },
        { label: 'Belgium', value: 'be', count: 357 },
        { label: 'Finland', value: 'fi', count: 330 },
        { label: 'Japan', value: 'jp', count: 309 },
        { label: 'Hong Kong', value: 'hk', count: 300 },
        { label: 'Italy', value: 'it', count: 280 },
        { label: 'Switzerland', value: 'ch', count: 260 },
        { label: 'Norway', value: 'no', count: 258 }
      ]
    },
    location_preferences: { 
      type: 'array', 
      label: 'Location Preferences',
      options: [
        { label: 'United States', value: 'united_states', count: 23640 },
        { label: 'Europe', value: 'europe', count: 6177 },
        { label: 'Canada', value: 'canada', count: 5675 },
        { label: 'United Kingdom', value: 'united_kingdom', count: 4159 },
        { label: 'Germany', value: 'germany', count: 3004 },
        { label: 'China', value: 'china', count: 2529 },
        { label: 'France', value: 'france', count: 2473 },
        { label: 'United States (California)', value: 'us_california', count: 2030 },
        { label: 'Asia', value: 'asia', count: 1761 },
        { label: 'United States (Mid-Atlantic)', value: 'us_mid_atlantic', count: 1653 },
        { label: 'United States (Midwest)', value: 'us_midwest', count: 1493 },
        { label: 'United States (Southeast)', value: 'us_southeast', count: 1337 },
        { label: 'Israel', value: 'israel', count: 1328 },
        { label: 'Switzerland', value: 'switzerland', count: 1324 },
        { label: 'United States (Southwest)', value: 'us_southwest', count: 1294 },
        { label: 'Netherlands', value: 'netherlands', count: 1263 },
        { label: 'Sweden', value: 'sweden', count: 1207 },
        { label: 'United States (Northeast)', value: 'us_northeast', count: 1155 },
        { label: 'Finland', value: 'finland', count: 1065 },
        { label: 'Austria', value: 'austria', count: 1051 }
      ]
    }
  },
  industry: {
    industries: { 
      type: 'array', 
      label: 'Industry Preferences',
      options: [
        { label: 'IT Services', value: 'it_services', count: 14249 },
        { label: 'Communications & Networking', value: 'communications_networking', count: 12425 },
        { label: 'Healthcare Services', value: 'healthcare_services', count: 12203 },
        { label: 'Business Products & Services', value: 'business_services', count: 11635 },
        { label: 'Consumer Products & Services', value: 'consumer_services', count: 11497 },
        { label: 'Distribution/Retailing', value: 'distribution_retail', count: 10435 },
        { label: 'Financial Services', value: 'financial_services', count: 10035 },
        { label: 'Software', value: 'software', count: 9676 },
        { label: 'Diversified', value: 'diversified', count: 9459 },
        { label: 'Media & Entertainment', value: 'media_entertainment', count: 9342 },
        { label: 'Energy/Natural Resources', value: 'energy_resources', count: 9085 },
        { label: 'Manufacturing', value: 'manufacturing', count: 7388 },
        { label: 'Internet Technology', value: 'internet_technology', count: 7039 },
        { label: 'Chemicals & Materials', value: 'chemicals_materials', count: 6898 },
        { label: 'Industrial Products & Services', value: 'industrial_products', count: 6212 },
        { label: 'Electronics', value: 'electronics', count: 5942 },
        { label: 'Biotechnology', value: 'biotechnology', count: 5779 },
        { label: 'Medical Devices & Equipment', value: 'medical_devices', count: 5753 },
        { label: 'Food Services & Products', value: 'food_services', count: 5406 },
        { label: 'Education & Training', value: 'education', count: 4795 }
      ]
    }
  },
  fundType: {
    types: { 
      type: 'array', 
      label: 'Fund Type',
      options: [
        { label: 'Private Equity Fund', value: 'private_equity', count: 22059 },
        { label: 'Venture Capital Fund', value: 'venture_capital', count: 14064 },
        { label: 'Small Business Investment Company', value: 'sbic', count: 459 },
        { label: 'Investment Bank', value: 'investment_bank', count: 425 },
        { label: 'Government Organization', value: 'government', count: 232 },
        { label: 'Startup Studio', value: 'startup_studio', count: 188 }
      ]
    }
  },
  stages: {
    stages: { 
      type: 'array', 
      label: 'Stage Preferences',
      options: [
        { label: 'Expansion', value: 'expansion', count: 20358 },
        { label: 'MBO/LBO', value: 'mbo_lbo', count: 17495 },
        { label: 'Early Stage', value: 'early_stage', count: 11823 },
        { label: 'Startup', value: 'startup', count: 9776 },
        { label: 'Seed', value: 'seed', count: 8781 },
        { label: 'Recapitalization', value: 'recapitalization', count: 8457 },
        { label: 'Acquisition', value: 'acquisition', count: 7990 },
        { label: 'Later Stage', value: 'later_stage', count: 5678 },
        { label: 'Corporate Divestiture', value: 'corporate_divestiture', count: 2787 },
        { label: 'Restructuring', value: 'restructuring', count: 2565 },
        { label: 'Consolidation', value: 'consolidation', count: 2442 },
        { label: 'Going Private', value: 'going_private', count: 2286 },
        { label: 'Special Situations', value: 'special_situations', count: 1646 },
        { label: 'Turnaround', value: 'turnaround', count: 1539 },
        { label: 'PIPE', value: 'pipe', count: 1419 },
        { label: 'Spinout', value: 'spinout', count: 1346 },
        { label: 'Ownership Transition', value: 'ownership_transition', count: 816 },
        { label: 'Secondary Purchase', value: 'secondary_purchase', count: 739 },
        { label: 'Privatization', value: 'privatization', count: 454 },
        { label: 'Distressed Debt', value: 'distressed_debt', count: 421 }
      ]
    }
  },
  investmentRanges: {
    assetsUnderManagement: { 
      type: 'range',
      label: 'Assets Under Management',
      options: [
        { label: '$1B+', value: '1B_PLUS', count: 10961 },
        { label: '$100M - $500M', value: '100M_500M', count: 6841 },
        { label: '$500M - $1B', value: '500M_1B', count: 3554 },
        { label: '$25M - $100M', value: '25M_100M', count: 2009 },
        { label: '$0 - $25M', value: '0_25M', count: 561 }
      ]
    },
    minInvestment: {
      type: 'range', 
      label: 'Minimum Investment',
      options: [
        { label: '$5M - $20M', value: '5M_20M', count: 7349 },
        { label: '$20M+', value: '20M_PLUS', count: 4841 },
        { label: '$1M - $5M', value: '1M_5M', count: 4585 },
        { label: '$250K - $1M', value: '250K_1M', count: 3309 },
        { label: '$0 - $250K', value: '0_250K', count: 2010 }
      ]
    },
    maxInvestment: {
      type: 'range',
      label: 'Maximum Investment',
      options: [
        { label: '$10M - $25M', value: '10M_25M', count: 4931 },
        { label: '$100M+', value: '100M_PLUS', count: 4735 },
        { label: '$1M - $10M', value: '1M_10M', count: 4360 },
        { label: '$0 - $1M', value: '0_1M', count: 688 }
      ]
    }
  },
  firm: {
    names: { 
      type: 'array', 
      label: 'Firm',
      options: [
        { label: 'Norwest Venture Partners', value: 'norwest_venture_partners', count: 38 },
        { label: 'Ridgemont Equity Partners', value: 'ridgemont_equity_partners', count: 38 },
        { label: 'Leonard Green & Partners, L.P.', value: 'leonard_green_partners', count: 37 },
        { label: 'ABRY Partners LLC', value: 'abry_partners', count: 36 },
        { label: 'Littlejohn & Co. LLC', value: 'littlejohn', count: 36 },
        { label: 'Roark Capital Group', value: 'roark_capital', count: 36 },
        { label: 'Great Hill Partners, LLC', value: 'great_hill_partners', count: 35 },
        { label: 'Argos Wityu', value: 'argos_wityu', count: 34 },
        { label: 'Arsenal Capital Partners', value: 'arsenal_capital', count: 34 },
        { label: 'High-Tech Grunderfonds Management GmbH', value: 'high_tech_grunderfonds', count: 34 },
        { label: 'LBC Credit Partners, Inc.', value: 'lbc_credit_partners', count: 34 },
        { label: 'ACON Investments, LLC', value: 'acon_investments', count: 33 },
        { label: 'Harvest Partners, LP', value: 'harvest_partners', count: 33 },
        { label: 'Inflexion Private Equity', value: 'inflexion', count: 33 },
        { label: 'Maven Capital Partners UK LLP', value: 'maven_capital', count: 33 },
        { label: 'Thoma Bravo, LLC', value: 'thoma_bravo', count: 33 },
        { label: 'FTV Capital', value: 'ftv_capital', count: 32 },
        { label: 'Francisco Partners', value: 'francisco_partners', count: 32 },
        { label: 'Gryphon Investors', value: 'gryphon_investors', count: 32 },
        { label: 'Hancock Capital Management, LLC', value: 'hancock_capital', count: 32 }
      ]
    }
  },
  jobTitle: {
    titles: { 
      type: 'array', 
      label: 'Job Title',
      options: [
        { label: 'Partner', value: 'partner', count: 6155 },
        { label: 'Managing Director', value: 'managing_director', count: 3703 },
        { label: 'Managing Partner', value: 'managing_partner', count: 2863 },
        { label: 'Associate', value: 'associate', count: 2778 },
        { label: 'Principal', value: 'principal', count: 2220 },
        { label: 'Vice President', value: 'vice_president', count: 1956 },
        { label: 'Senior Associate', value: 'senior_associate', count: 1026 },
        { label: 'General Partner', value: 'general_partner', count: 958 },
        { label: 'Investment Manager', value: 'investment_manager', count: 950 },
        { label: 'Investment Director', value: 'investment_director', count: 948 },
        { label: 'Director', value: 'director', count: 929 },
        { label: 'CFO', value: 'cfo', count: 879 },
        { label: 'Analyst', value: 'analyst', count: 614 },
        { label: 'CEO', value: 'ceo', count: 495 },
        { label: 'Founding Partner', value: 'founding_partner', count: 421 },
        { label: 'Venture Partner', value: 'venture_partner', count: 400 },
        { label: 'Operating Partner', value: 'operating_partner', count: 387 },
        { label: 'President', value: 'president', count: 242 },
        { label: 'Chairman', value: 'chairman', count: 237 },
        { label: 'Senior Managing Director', value: 'senior_managing_director', count: 221 }
      ]
    }
  },
  investorCount: {
    range: { 
      type: 'range',
      label: 'Number of Investors',
      options: [
        { label: '1 - 10', value: '1_10', count: 19038 },
        { label: '10 - 20', value: '10_20', count: 11799 },
        { label: '20 - 30', value: '20_30', count: 5371 },
        { label: '30 - 40', value: '30_40', count: 1384 }
      ]
    }
  },
  gender: {
    gender: { 
      type: 'select',
      label: 'Gender',
      options: [
        { label: 'Male', value: 'male', count: 31454 },
        { label: 'Female', value: 'female', count: 4572 }
      ]
    }
  }
};

export const fundFilterSchema = {
  contactInfo: {
    hasEmail: { 
      type: 'boolean', 
      label: 'Has Email',
      options: [
        { label: 'Office email available', value: true, count: 7692 },
        { label: 'Office email unavailable', value: false, count: 750 }
      ]
    },
    hasPhone: { 
      type: 'boolean', 
      label: 'Has Phone',
      options: [
        { label: 'Office phone number available', value: true, count: 6804 },
        { label: 'Office phone number unavailable', value: false, count: 1638 }
      ]
    },
    hasAddress: { 
      type: 'boolean', 
      label: 'Has Address',
      options: [
        { label: 'Office address available', value: true, count: 8424 },
        { label: 'Office address unavailable', value: false, count: 18 }
      ]
    }
  },
  location: {
    city: { 
      type: 'text', 
      label: 'City',
      options: [
        { label: 'New York', value: 'new_york', count: 765 },
        { label: 'London', value: 'london', count: 492 },
        { label: 'San Francisco', value: 'san_francisco', count: 358 },
        { label: 'Chicago', value: 'chicago', count: 216 },
        { label: 'Boston', value: 'boston', count: 193 },
        { label: 'Paris', value: 'paris', count: 167 },
        { label: 'Palo Alto', value: 'palo_alto', count: 147 },
        { label: 'Shanghai', value: 'shanghai', count: 140 },
        { label: 'Toronto', value: 'toronto', count: 139 },
        { label: 'Menlo Park', value: 'menlo_park', count: 128 },
        { label: 'Dallas', value: 'dallas', count: 126 },
        { label: 'Tokyo', value: 'tokyo', count: 112 },
        { label: 'Beijing', value: 'beijing', count: 110 },
        { label: 'Los Angeles', value: 'los_angeles', count: 100 },
        { label: 'Houston', value: 'houston', count: 99 },
        { label: 'Munich', value: 'munich', count: 96 },
        { label: 'Stockholm', value: 'stockholm', count: 84 },
        { label: 'Mumbai', value: 'mumbai', count: 76 },
        { label: 'Cambridge', value: 'cambridge', count: 64 },
        { label: 'Austin', value: 'austin', count: 62 }
      ]
    },
    state: { 
      type: 'text', 
      label: 'State',
      options: [
        { label: 'California', value: 'ca', count: 1184 },
        { label: 'New York', value: 'ny', count: 836 },
        { label: 'Massachusetts', value: 'ma', count: 347 },
        { label: 'Texas', value: 'tx', count: 333 },
        { label: 'Illinois', value: 'il', count: 273 },
        { label: 'Ontario', value: 'on', count: 161 },
        { label: 'Connecticut', value: 'ct', count: 154 },
        { label: 'Florida', value: 'fl', count: 131 },
        { label: 'Pennsylvania', value: 'pa', count: 127 },
        { label: 'Colorado', value: 'co', count: 98 },
        { label: 'Michigan', value: 'mi', count: 96 },
        { label: 'Ohio', value: 'oh', count: 74 },
        { label: 'Georgia', value: 'ga', count: 73 },
        { label: 'Maryland', value: 'md', count: 72 },
        { label: 'Virginia', value: 'va', count: 69 },
        { label: 'New South Wales', value: 'nsw', count: 68 },
        { label: 'North Carolina', value: 'nc', count: 66 },
        { label: 'Washington', value: 'wa', count: 61 },
        { label: 'British Columbia', value: 'bc', count: 56 },
        { label: 'New Jersey', value: 'nj', count: 53 }
      ]
    },
    country: { 
      type: 'text', 
      label: 'Country',
      options: [
        { label: 'United States', value: 'us', count: 4509 },
        { label: 'United Kingdom', value: 'uk', count: 641 },
        { label: 'Germany', value: 'de', count: 328 },
        { label: 'Canada', value: 'ca', count: 314 },
        { label: 'China', value: 'cn', count: 287 },
        { label: 'France', value: 'fr', count: 238 },
        { label: 'India', value: 'in', count: 155 },
        { label: 'Israel', value: 'il', count: 139 },
        { label: 'Hong Kong', value: 'hk', count: 131 },
        { label: 'Japan', value: 'jp', count: 126 },
        { label: 'Singapore', value: 'sg', count: 121 },
        { label: 'Sweden', value: 'se', count: 115 },
        { label: 'Australia', value: 'au', count: 112 },
        { label: 'Netherlands', value: 'nl', count: 110 },
        { label: 'Spain', value: 'es', count: 90 },
        { label: 'Belgium', value: 'be', count: 83 },
        { label: 'Switzerland', value: 'ch', count: 75 },
        { label: 'Finland', value: 'fi', count: 73 },
        { label: 'Italy', value: 'it', count: 70 },
        { label: 'Korea', value: 'kr', count: 64 }
      ]
    },
    location_preferences: { 
      type: 'array', 
      label: 'Location Preferences',
      options: [
        { label: 'United States', value: 'united_states', count: 5209 },
        { label: 'Europe', value: 'europe', count: 1353 },
        { label: 'Canada', value: 'canada', count: 1084 },
        { label: 'United Kingdom', value: 'united_kingdom', count: 897 },
        { label: 'China', value: 'china', count: 746 },
        { label: 'Germany', value: 'germany', count: 665 },
        { label: 'United States (California)', value: 'us_california', count: 540 },
        { label: 'Asia', value: 'asia', count: 470 },
        { label: 'France', value: 'france', count: 470 },
        { label: 'United States (Mid-Atlantic)', value: 'us_mid_atlantic', count: 397 },
        { label: 'United States (Midwest)', value: 'us_midwest', count: 376 },
        { label: 'Israel', value: 'israel', count: 350 },
        { label: 'United States (Southwest)', value: 'us_southwest', count: 311 },
        { label: 'United States (Southeast)', value: 'us_southeast', count: 289 },
        { label: 'United States (Northeast)', value: 'us_northeast', count: 286 },
        { label: 'Switzerland', value: 'switzerland', count: 279 },
        { label: 'Sweden', value: 'sweden', count: 273 },
        { label: 'India', value: 'india', count: 250 },
        { label: 'Netherlands', value: 'netherlands', count: 245 },
        { label: 'Australia', value: 'australia', count: 240 }
      ]
    }
  },
  industry: {
    industries: { 
      type: 'array', 
      label: 'Industry Preferences',
      options: [
        { label: 'IT Services', value: 'it_services', count: 3350 },
        { label: 'Communications & Networking', value: 'communications_networking', count: 2854 },
        { label: 'Software', value: 'software', count: 2400 },
        { label: 'Healthcare Services', value: 'healthcare_services', count: 2329 },
        { label: 'Consumer Products & Services', value: 'consumer_services', count: 2297 },
        { label: 'Business Products & Services', value: 'business_services', count: 2138 },
        { label: 'Media & Entertainment', value: 'media_entertainment', count: 2100 },
        { label: 'Distribution/Retailing', value: 'distribution_retail', count: 2069 },
        { label: 'Financial Services', value: 'financial_services', count: 2041 },
        { label: 'Energy/Natural Resources', value: 'energy_resources', count: 1974 },
        { label: 'Diversified', value: 'diversified', count: 1955 },
        { label: 'Internet Technology', value: 'internet_technology', count: 1725 },
        { label: 'Chemicals & Materials', value: 'chemicals_materials', count: 1547 },
        { label: 'Manufacturing', value: 'manufacturing', count: 1490 },
        { label: 'Biotechnology', value: 'biotechnology', count: 1393 },
        { label: 'Electronics', value: 'electronics', count: 1392 },
        { label: 'Medical Devices & Equipment', value: 'medical_devices', count: 1389 },
        { label: 'Industrial Products & Services', value: 'industrial_products', count: 1134 },
        { label: 'Food Services & Products', value: 'food_services', count: 1068 },
        { label: 'Environment', value: 'environment', count: 1016 }
      ]
    }
  },
  fundType: {
    types: { 
      type: 'array', 
      label: 'Fund Type',
      options: [
        { label: 'Private Equity Fund', value: 'private_equity', count: 4230 },
        { label: 'Venture Capital Fund', value: 'venture_capital', count: 3850 },
        { label: 'Investment Bank', value: 'investment_bank', count: 98 },
        { label: 'Small Business Investment Company', value: 'sbic', count: 77 },
        { label: 'Startup Studio', value: 'startup_studio', count: 60 },
        { label: 'Government Organization', value: 'government', count: 33 }
      ]
    }
  },
  stages: {
    stages: { 
      type: 'array', 
      label: 'Stage Preferences',
      options: [
        { label: 'Expansion', value: 'expansion', count: 4040 },
        { label: 'MBO/LBO', value: 'mbo_lbo', count: 3029 },
        { label: 'Early Stage', value: 'early_stage', count: 2957 },
        { label: 'Startup', value: 'startup', count: 2460 },
        { label: 'Seed', value: 'seed', count: 2224 },
        { label: 'Acquisition', value: 'acquisition', count: 1335 },
        { label: 'Recapitalization', value: 'recapitalization', count: 1302 },
        { label: 'Later Stage', value: 'later_stage', count: 1181 },
        { label: 'Restructuring', value: 'restructuring', count: 424 },
        { label: 'Corporate Divestiture', value: 'corporate_divestiture', count: 413 },
        { label: 'Consolidation', value: 'consolidation', count: 355 },
        { label: 'Going Private', value: 'going_private', count: 286 },
        { label: 'Special Situations', value: 'special_situations', count: 284 },
        { label: 'Turnaround', value: 'turnaround', count: 279 },
        { label: 'PIPE', value: 'pipe', count: 244 },
        { label: 'Spinout', value: 'spinout', count: 234 },
        { label: 'Secondary Purchase', value: 'secondary_purchase', count: 156 },
        { label: 'Ownership Transition', value: 'ownership_transition', count: 141 },
        { label: 'Distressed Debt', value: 'distressed_debt', count: 89 },
        { label: 'Privatization', value: 'privatization', count: 80 }
      ]
    }
  },
  investmentRanges: {
    assetsUnderManagement: { 
      type: 'range',
      label: 'Assets Under Management',
      options: [
        { label: '$1B+', value: '1B_PLUS', count: 1631 },
        { label: '$100M - $500M', value: '100M_500M', count: 1532 },
        { label: '$500M - $1B', value: '500M_1B', count: 604 },
        { label: '$25M - $100M', value: '25M_100M', count: 578 },
        { label: '$0 - $25M', value: '0_25M', count: 180 }
      ]
    },
    minInvestment: {
      type: 'range', 
      label: 'Minimum Investment',
      options: [
        { label: '$5M - $20M', value: '5M_20M', count: 1276 },
        { label: '$1M - $5M', value: '1M_5M', count: 1105 },
        { label: '$250K - $1M', value: '250K_1M', count: 850 },
        { label: '$20M+', value: '20M_PLUS', count: 666 },
        { label: '$0 - $250K', value: '0_250K', count: 565 }
      ]
    },
    maxInvestment: {
      type: 'range',
      label: 'Maximum Investment',
      options: [
        { label: '$1M - $10M', value: '1M_10M', count: 1196 },
        { label: '$10M - $25M', value: '10M_25M', count: 1119 },
        { label: '$25M - $100M', value: '25M_100M', count: 1093 },
        { label: '$100M+', value: '100M_PLUS', count: 676 },
        { label: '$0 - $1M', value: '0_1M', count: 248 }
      ]
    }
  },
  investorCount: {
    range: { 
      type: 'range',
      label: 'Number of Investors',
      options: [
        { label: '1 - 10', value: '1_10', count: 6074 },
        { label: '10 - 20', value: '10_20', count: 1582 },
        { label: '20 - 30', value: '20_30', count: 647 },
        { label: '30 - 40', value: '30_40', count: 139 }
      ]
    }
  },
  genderRatio: {
    ratio: { 
      type: 'select',
      label: 'Gender Ratio',
      options: [
        { label: '0% female', value: 'female_0', count: 4373 },
        { label: '25% female', value: 'female_25', count: 386 },
        { label: '20% female', value: 'female_20', count: 330 },
        { label: '33% female', value: 'female_33', count: 315 },
        { label: '17% female', value: 'female_17', count: 279 },
        { label: '13% female', value: 'female_13', count: 269 },
        { label: '50% female', value: 'female_50', count: 229 },
        { label: '14% female', value: 'female_14', count: 199 },
        { label: '11% female', value: 'female_11', count: 192 },
        { label: '8% female', value: 'female_8', count: 160 },
        { label: '9% female', value: 'female_9', count: 146 },
        { label: '10% female', value: 'female_10', count: 134 },
        { label: '6% female', value: 'female_6', count: 113 },
        { label: '100% female', value: 'female_100', count: 111 },
        { label: '40% female', value: 'female_40', count: 107 },
        { label: '29% female', value: 'female_29', count: 94 },
        { label: '22% female', value: 'female_22', count: 78 },
        { label: '7% female', value: 'female_7', count: 75 },
        { label: '15% female', value: 'female_15', count: 74 },
        { label: '4% female', value: 'female_4', count: 72 }
      ]
    }
  }
};
       