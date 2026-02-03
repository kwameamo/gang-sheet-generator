// env-config.example.js
// Example configuration file for local development
// 
// SETUP INSTRUCTIONS:
// 1. Copy this file to env-config.js
// 2. Replace the placeholder values with your actual Firebase config
// 3. NEVER commit env-config.js to version control!

window.ENV = {
    FIREBASE_API_KEY: "AIzaSyDKrZjjyI32XMhFBj-12tpau-aZJsOZ8pg",
    FIREBASE_AUTH_DOMAIN: "gang-sheet-generator-ab17c.firebaseapp.com",
    FIREBASE_PROJECT_ID: "gang-sheet-generator-ab17c",
    FIREBASE_STORAGE_BUCKET: "gang-sheet-generator-ab17c.firebasestorage.app",
    FIREBASE_MESSAGING_SENDER_ID: "856756686451",
    FIREBASE_APP_ID: "1:856756686451:web:90373cc3f29764e6b26406"
};

console.log('✅ Firebase config loaded from env-config.js');
