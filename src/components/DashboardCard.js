import React from 'react';

const DashboardCard = ({ title, icon, data, color }) => {
  return (
    <div className="dashboard-card" style={{ borderTopColor: color }}>
      <div className="dashboard-card-header">
        <span className="dashboard-icon" style={{ color }}>
          {icon}
        </span>
        <h3>{title}</h3>
      </div>
      <div className="dashboard-card-body">
        {data.map((item, index) => (
          <div key={index} className="dashboard-item">
            <span className="item-label">{item.label}:</span>
            <span className="item-value">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCard;