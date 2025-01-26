import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import FileUpload from '@/components/FileUpload';
import { toast } from 'sonner';

const StorageShare = () => {
  const navigate = useNavigate();
  const { user, signInWithGoogle, signOut } = useAuth();

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
      toast.success('Successfully logged in!');
    } catch (error) {
      toast.error('Failed to log in');
    }
  };

  const handleLogout = async () => {
    try {
      await signOut();
      toast.success('Successfully logged out');
    } catch (error) {
      toast.error('Failed to log out');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container py-12 px-4">
        <div className="flex justify-between items-center mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Options
          </Button>
          {user && (
            <Button
              variant="outline"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          )}
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Temporary Storage Sharing
          </h1>
          <p className="text-lg text-gray-600">
            {user ? 'Upload files for 1-hour temporary storage' : 'Please log in to use temporary storage sharing'}
          </p>
        </div>
        
        {user ? (
          <FileUpload />
        ) : (
          <div className="max-w-md mx-auto text-center">
            <Button
              size="lg"
              className="w-full"
              onClick={handleLogin}
            >
              Sign in with Google
            </Button>
          </div>
        )}
        
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>Files are stored for 1 hour • Maximum file size: 500MB</p>
        </div>
      </div>
    </div>
  );
};

export default StorageShare;