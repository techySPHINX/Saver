'use client'

import { useRouter ,useSearchParams} from 'next/navigation';
import { useEffect, useState } from 'react';

interface SubaccountProps {
 subaccountId: string;
}

const SubaccountPage: React.FC<SubaccountProps> = ({ subaccountId }) => {
 const [data, setData] = useState(null);
 const router = useRouter();

 useEffect(() => {
  // Fetch data for the subaccount
  const fetchData = async () => {
   const response = await fetch(`/api/subaccount/${subaccountId}`);
   const result = await response.json();
   setData(result);
  };

  fetchData();
 }, [subaccountId]);

 if (!data) {
  return <div>Loading...</div>;
 }

 return (
  <div>
   <h1>Subaccount: {subaccountId}</h1>
   <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
 );
};

const SubaccountPageWrapper: React.FC = () => {
 
 const searchParams = useSearchParams();
 const subaccountId = searchParams.get('subaccountId');

 if (!subaccountId || Array.isArray(subaccountId)) {
  return <div>Invalid subaccount ID</div>;
 }

 return <SubaccountPage subaccountId={subaccountId} />;
};

export default SubaccountPageWrapper;
