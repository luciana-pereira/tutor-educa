import { initializeApp } from "firebase/app";
import { getEnvironment } from "../utils/ts/helpers";
// import { getAnalytics } from "firebase/analytics";

// const apiKey = getEnvironment().API_KEY;
// const authDomain = getEnvironment().AUTH_DOMAIN;
// const projectId = getEnvironment().PROJECT_ID;
// const storageBucket = getEnvironment().STORAGE_BUCKET;
// const messagingSenderId = getEnvironment().MSG_SENDER_ID;
// const appId = getEnvironment().APP_ID;
// const measurementId = getEnvironment().MEASUREMENT_ID;

export const initFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDNLz_VCw3HXxeufVbYbKQlPY3k9u9P6fw",
    authDomain: "tutor-educa-79f94.firebaseapp.com",
    projectId: "tutor-educa-79f94",
    storageBucket: "tutor-educa-79f94.appspot.com",
    messagingSenderId: "806222147074",
    appId: "1:806222147074:web:1b24abfdbdfec13528011b",
    measurementId: "G-XTHRJLXDL9"
  };

  const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  return app;
};