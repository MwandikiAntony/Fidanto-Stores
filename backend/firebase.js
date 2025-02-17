import admin from 'firebase-admin';
import { readFileSync } from 'fs';  // Import readFileSync to read the JSON file

// Initialize Firebase Admin SDK with your service account credentials
const serviceAccount = JSON.parse(readFileSync('./config/fidanto-stores-firebase-adminsdk-fbsvc-4d6f713160.json', 'utf8'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // No need for databaseURL if you're using Firestore
});

// Initialize Firebase services
const auth = admin.auth(); // Firebase Authentication
const db = admin.firestore(); // Firestore

// Export Firebase services to use them elsewhere
export { auth, db };
