import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FRBS_APIK,
    authDomain: process.env.REACT_APP_FRBS_AUTH,
    projectId: process.env.REACT_APP_FRBS_PRID,
    storageBucket: process.env.REACT_APP_FRBS_STRG,
    messagingSenderId: process.env.REACT_APP_FRBS_MGID,
    appId: process.env.REACT_APP_FRBS_APID,
    measurementId: process.env.REACT_APP_FRBS_MSID
  };

  const firebase = initializeApp(firebaseConfig);
  console.log(firebase);
  export default firebase