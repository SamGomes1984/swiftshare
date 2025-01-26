import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Store Firebase config in localStorage if not using environment variables
const getFirebaseConfig = () => {
  const storedConfig = localStorage.getItem('firebaseConfig');
  if (storedConfig) {
    return JSON.parse(storedConfig);
  }
  return null;
};

const saveFirebaseConfig = (config: any) => {
  localStorage.setItem('firebaseConfig', JSON.stringify(config));
};

// Initialize with stored config or prompt user
const storedConfig = getFirebaseConfig();
if (!storedConfig) {
  const config = {
    apiKey: prompt('Please enter your Firebase API Key:'),
    authDomain: prompt('Please enter your Firebase Auth Domain:'),
    projectId: prompt('Please enter your Firebase Project ID:'),
    storageBucket: prompt('Please enter your Firebase Storage Bucket:'),
    messagingSenderId: prompt('Please enter your Firebase Messaging Sender ID:'),
    appId: prompt('Please enter your Firebase App ID:')
  };
  
  if (config.apiKey && config.authDomain && config.projectId) {
    saveFirebaseConfig(config);
  }
}

const firebaseConfig = getFirebaseConfig() || {
  apiKey: "DEMO_MODE",
  authDomain: "DEMO_MODE",
  projectId: "DEMO_MODE",
  storageBucket: "DEMO_MODE",
  messagingSenderId: "DEMO_MODE",
  appId: "DEMO_MODE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);