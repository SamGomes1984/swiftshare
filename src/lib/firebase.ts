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
let firebaseConfig;

if (!storedConfig) {
  // Force prompts for all required Firebase config values
  const apiKey = prompt('Please enter your Firebase API Key:');
  if (apiKey) {
    const config = {
      apiKey,
      authDomain: prompt('Please enter your Firebase Auth Domain:'),
      projectId: prompt('Please enter your Firebase Project ID:'),
      storageBucket: prompt('Please enter your Firebase Storage Bucket:'),
      messagingSenderId: prompt('Please enter your Firebase Messaging Sender ID:'),
      appId: prompt('Please enter your Firebase App ID:')
    };
    
    // Only save if we have the minimum required fields
    if (config.apiKey && config.authDomain && config.projectId) {
      saveFirebaseConfig(config);
      firebaseConfig = config;
    }
  }
} else {
  firebaseConfig = storedConfig;
}

// If no valid config is available, show an error
if (!firebaseConfig || !firebaseConfig.apiKey || firebaseConfig.apiKey === "DEMO_MODE") {
  const errorMessage = 'Firebase configuration is required. Please refresh the page and enter your Firebase credentials.';
  console.error(errorMessage);
  alert(errorMessage);
  // Use an empty config that will trigger obvious errors rather than silent failures
  firebaseConfig = {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: ''
  };
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);