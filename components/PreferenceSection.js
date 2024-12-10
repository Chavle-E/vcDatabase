// components/PreferenceSection.js
const PreferenceSection = ({ title, items }) => {
    return (
      <div>
        <h3 className="text-sm font-medium text-base-content/70 mb-2">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {items?.map((item, index) => (
            <span key={index} className="badge badge-outline">
              {item.replace(/['"]/g, '')}
            </span>
          ))}
        </div>
      </div>
    );
  };