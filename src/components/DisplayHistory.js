import React from 'react'
import firebase from "firebase/app";
import "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

import HistoryLogs  from './HistoryLogs'

firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
});

const firestore = firebase.firestore();

const DisplayHistory = () => {

    const messagesRef = firestore.collection("calculations");
    const query = messagesRef.orderBy("createdAt", 'desc').limit(10);
  
    const [values] = useCollectionData(query, {
      idField: "id",
    });

    return (
        <>
            <HistoryLogs logs={values}/>
        </>
    )
}

export default DisplayHistory;