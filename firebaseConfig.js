import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from 'firebase/auth';
// import {...} from 'firebase/database';
import { getFirestore }  from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDIF93bwxXMbmU8rrIQ4-L91nH5YGtHbiA',
  authDomain: 'gymdoorz.firebaseapp.com',
  databaseURL: 'https://gymdoorz.firebaseio.com',
  projectId: 'gymdoorz',
  storageBucket: 'gymdoorz.firebasestorage.app',
  messagingSenderId: '143353565028',
  appId: '1:143353565028:android:12c5906ca9b6e1a6e67471',
//   measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
