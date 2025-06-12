// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TO DO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: "AIzaSyBgW7CTxgpuqPEjlUzQUCtglMTZ_pg14ys",
  // authDomain: "sellsmap-594f7.firebaseapp.com",
  // projectId: "sellsmap-594f7",
  // storageBucket: "sellsmap-594f7.firebasestorage.app",
  // messagingSenderId: "791461555694",
  // appId: "1:791461555694:web:bf788a6822f8b15612b2ff",
  // measurementId: "G-F5PVQ77SG1"
    apiKey: "AIzaSyAw13x406w8rJYE0tMiqobt5iEUZjk_1QQ",
    authDomain: "sellsmap-f2202.firebaseapp.com",
    projectId: "sellsmap-f2202",
    storageBucket: "sellsmap-f2202.firebasestorage.app",
    messagingSenderId: "690066693033",
    appId: "1:690066693033:web:57f0c9862d31315e4782b8",
    measurementId: "G-GRKLXDT75C",
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db =getFirestore(app);
export const storage = getStorage(app);
const analytics = getAnalytics(app);

export default app;
