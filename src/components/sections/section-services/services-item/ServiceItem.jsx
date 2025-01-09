import React from 'react';
import './ServiceItem.css';

const ServiceItem = ({ iconClass, title, description, colorClass }) => {
  return (
    <div className="service-item-container" data-aos="fade-up">
      <div className={`service-item ${colorClass} service-item-box`}>
        <i className={`bi ${iconClass} service-item-icon`}></i> 
        <div className="service-item-content">
          <h3 className="service-item-title">{title}</h3>
          <p className="service-item-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
