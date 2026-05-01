import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVCLL7fIu9SuPOhqS5OzNotwwh5EOCcLU",
    authDomain: "bsite-e3e4d.firebaseapp.com",
      projectId: "bsite-e3e4d",
        storageBucket: "bsite-e3e4d.firebasestorage.app",
          messagingSenderId: "931743855419",
            appId: "1:931743855419:web:67d06947ab2e2ee4927d1e"
            };

            const app = initializeApp(firebaseConfig);
            export const db = getFirestore(app);
