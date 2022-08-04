import {initializeApp} from "firebase/app";
import { getDatabase } from "firebase/database";
// const firebaseConfig = {
//   apiKey: "AIzaSyDzbKVHbsBruO2ICSxJtdlfMaQBNSWQ-Lw",
//   authDomain: "iot-based-smart-irrigati-a54b1.firebaseapp.com",
//   projectId: "iot-based-smart-irrigati-a54b1",
//   storageBucket: "iot-based-smart-irrigati-a54b1.appspot.com",
//   messagingSenderId: "231141652274",
//   appId: "1:231141652274:web:389892903d993f5e3f492b",
//   measurementId: "G-GWNQXE5SY7"
// };
const firebaseConfig = {
    apiKey: "AIzaSyBGr_XkeraLXvvpyTzZ2KDLG5Sn8fXNs54",
    authDomain: "irrygatedb.firebaseapp.com",
    databaseURL: "https://irrygatedb-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "irrygatedb",
    storageBucket: "irrygatedb.appspot.com",
    messagingSenderId: "238168381536",
    appId: "1:238168381536:web:92b625e7fa369582f78b05",
    measurementId: "G-D0F74NFMH0"
  };
const app=initializeApp(firebaseConfig);
export const db=getDatabase(app);
