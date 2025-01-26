import React from 'react';
import { FileIcon, XIcon } from 'lucide-react';

interface FileInfoProps {
  file: File;
  onRemove: () => void;
}

const FileInfo = ({ file, onRemove }: FileInfoProps) => {
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg animate-fade-in">
      <div className="flex items-center space-x-4">
        <FileIcon className="w-8 h-8 text-primary" />
        <div>
          <p className="font-medium text-gray-900 truncate max-w-[200px]">
            {file.name}
          </p>
          <p className="text-sm text-gray-500">{formatFileSize(file.size)}</p>
        </div>
      </div>
      <button
        onClick={onRemove}
        className="p-1 hover:bg-gray-200 rounded-full transition-colors"
      >
        <XIcon className="w-5 h-5 text-gray-500" />
      </button>
    </div>
  );
};

export default FileInfo;