    import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js'
    import { getAuth } from 'https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js'

    const firebaseConfig = {
  apiKey: "AIzaSyDmBvUBGQXXFBNgRcxRVOKxUYpXi6DgrT0",
  authDomain: "website-51e7b.firebaseapp.com",
  projectId: "website-51e7b",
  storageBucket: "website-51e7b.firebasestorage.app",
  messagingSenderId: "164997522735",
  appId: "1:164997522735:web:6ddc57b571dc65f4bdadda"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)