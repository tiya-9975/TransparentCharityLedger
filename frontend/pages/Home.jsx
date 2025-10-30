import React, { useEffect, useState } from 'react';
import DonationCard from '../components/DonationCard';
import { getNGOs } from '../utils/api';

const Home = () => {
  const [ngos, setNgos] = useState([]);

  useEffect(() => {
    getNGOs().then((res) => setNgos(res.data));
  }, []);

  return (
    <div>
      <h1>Welcome to Transparent Charity Ledger</h1>
      <div className="grid">
        {ngos.map((ngo) => (
          <DonationCard key={ngo._id} ngo={ngo} />
        ))}
      </div>
    </div>
  );
};

export default Home;
