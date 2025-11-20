import React from 'react';
import './TrustedCompanies.css';

function TrustedCompanies({ companies }) {
  return (
    <div className="trusted">
      <p className="trusted__caption">
        Trusted by companies of all sizes
      </p>
      <div className="trusted__logos">
        {companies.map((company) => (
          <div key={company.id} className="trusted__logo">
            {company.logoText}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrustedCompanies;
