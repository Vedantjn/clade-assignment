import React from 'react';
import '../styles/CompanyInfo.css';

const CompanyInfo = () => {
  return (
    <div className="company-info-container">
      <div className="logo-heading">
        <img src="./atlassian.png" alt="Atlassian logo" />Atlassian
      </div>
      <div className="details">
        <div className="first-column">
          <div className="item">
            <div className="item-heading">Company size</div>
            <div className="details">1k-2k Employees</div>
          </div>
          <div className="item">
            <div className="item-heading">Sector</div>
            <div className="details">Information Technology, Infrastructure</div>
          </div>
          <div className="item">
            <div className="item-heading">Founded in</div>
            <div className="details">2019</div>
          </div>
        </div>
        <div className="second-column">
          <div className="item">
            <div className="item-heading">Type</div>
            <div className="details">Private</div>
          </div>
          <div className="item">
            <div className="item-heading">Funding</div>
            <div className="details">Bootstrapped</div>
          </div>
          <div className="item">
            <div className="item-heading">Founded by</div>
            <div className="details">Scott Farquhar, Mike Cannon-Brookes</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyInfo;
