import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCmQV4JuMTMSJbcfHVZijuArBpDGdv7M_Y",
    authDomain: "checkov-sh.firebaseapp.com",
    projectId: "checkov-sh",
    storageBucket: "checkov-sh.appspot.com",
    messagingSenderId: "318594315998",
    appId: "1:318594315998:web:f9193ed0740d51a163b44f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
