import React from 'react';
import FileUpload from '../components/FileUpload';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const P2PShare = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container py-12 px-4">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Options
        </Button>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Peer-to-Peer File Sharing
          </h1>
          <p className="text-lg text-gray-600">
            Share files directly with others - no storage needed
          </p>
        </div>
        
        <FileUpload />
        
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>Files are shared directly between peers • No storage limits</p>
        </div>
      </div>
    </div>
  );
};

export default P2PShare;