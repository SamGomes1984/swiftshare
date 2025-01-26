import React from 'react';
import FileUpload from '../components/FileUpload';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            SwiftShare
          </h1>
          <p className="text-lg text-gray-600">
            Fast, Secure, and Effortless File Sharing
          </p>
        </div>
        
        <FileUpload />
        
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>Upload files up to 500MB • Files automatically delete after 1 hour</p>
        </div>
      </div>
    </div>
  );
};

export default Index;