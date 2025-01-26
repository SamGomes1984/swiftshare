import React from 'react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const SharingOptions = () => {
  const navigate = useNavigate();

  return (
    <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
      <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Peer-to-Peer Sharing</h2>
        <p className="text-gray-600 mb-6">
          Share files directly with others without storing them on a server. Perfect for quick, secure transfers.
        </p>
        <Button 
          onClick={() => navigate('/p2p')}
          className="w-full"
        >
          Start P2P Sharing
        </Button>
      </div>

      <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Temporary Storage</h2>
        <p className="text-gray-600 mb-6">
          Upload files that will be stored for 1 hour. Requires login for enhanced features.
        </p>
        <Button 
          onClick={() => navigate('/storage')}
          className="w-full"
        >
          Use Temporary Storage
        </Button>
      </div>
    </div>
  );
};

export default SharingOptions;