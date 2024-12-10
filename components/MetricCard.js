// components/MetricCard.js
const MetricCard = ({ label, value }) => {
    const formatCurrency = (amount) => {
      if (!amount || isNaN(amount)) return 'N/A';
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'EUR',
        notation: 'compact',
        maximumFractionDigits: 1
      }).format(amount);
    };
  
    return (
      <div className="bg-base-200 p-4 rounded-lg">
        <div className="text-sm text-base-content/70 mb-1">{label}</div>
        <div className="text-xl font-bold">{formatCurrency(value)}</div>
      </div>
    );
  };