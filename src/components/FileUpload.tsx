import React, { useState } from 'react';
import DropZone from './DropZone';
import ProgressBar from './ProgressBar';
import FileInfo from './FileInfo';
import ShareLink from './ShareLink';
import { toast } from 'sonner';

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [shareLink, setShareLink] = useState<string | null>(null);

  const handleFileSelect = (selectedFile: File) => {
    if (selectedFile.size > 500 * 1024 * 1024) {
      toast.error('File size exceeds 500MB limit');
      return;
    }
    setFile(selectedFile);
    simulateUpload();
  };

  const simulateUpload = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Generate a temporary link (this would normally come from the server)
          setShareLink(`https://example.com/share/${Math.random().toString(36).substring(7)}`);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const handleRemoveFile = () => {
    setFile(null);
    setUploadProgress(0);
    setShareLink(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {!file && <DropZone onFileSelect={handleFileSelect} />}
      
      {file && (
        <div className="space-y-6">
          <FileInfo file={file} onRemove={handleRemoveFile} />
          
          {uploadProgress < 100 && (
            <div className="space-y-2">
              <ProgressBar progress={uploadProgress} />
              <p className="text-sm text-gray-500 text-center">
                Uploading... {uploadProgress}%
              </p>
            </div>
          )}
          
          {shareLink && <ShareLink link={shareLink} />}
        </div>
      )}
    </div>
  );
};

export default FileUpload;