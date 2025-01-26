import React, { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '@/lib/firebase';
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
    uploadFile(selectedFile);
  };

  const uploadFile = async (file: File) => {
    const storageRef = ref(storage, `uploads/${Date.now()}-${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        console.error('Upload error:', error);
        toast.error('Failed to upload file');
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setShareLink(downloadURL);
          toast.success('File uploaded successfully!');
        } catch (error) {
          console.error('Error getting download URL:', error);
          toast.error('Failed to generate share link');
        }
      }
    );
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
                Uploading... {Math.round(uploadProgress)}%
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