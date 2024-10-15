import React from 'react';

interface AgencyPageProps {
 agencyId: string;
}

const AgencyPage: React.FC<AgencyPageProps> = ({ agencyId }) => {
 return (
  <div>
   <h1>Welcome to Agency {agencyId}</h1>
   <p>This is the agency page for agency with ID: {agencyId}</p>
  </div>
 );
};

export default AgencyPage;
