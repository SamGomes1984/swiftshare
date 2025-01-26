import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { toast } from 'sonner';

interface ShareLinkProps {
  link: string;
}

const ShareLink = ({ link }: ShareLinkProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      toast.success('Link copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy link');
    }
  };

  return (
    <div className="w-full p-4 bg-gray-50 rounded-lg space-y-2 animate-fade-in">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-700">Share link</p>
        <button
          onClick={copyToClipboard}
          className="flex items-center space-x-1 text-primary hover:text-primary/80 transition-colors"
        >
          {copied ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
          <span className="text-sm">{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
      <p className="text-sm text-gray-500 break-all bg-white p-2 rounded border">
        {link}
      </p>
      <p className="text-xs text-gray-400">
        This link will expire in 1 hour
      </p>
    </div>
  );
};

export default ShareLink;