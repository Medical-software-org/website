import React, { useEffect, useState } from 'react';
import ContentBox from './contentBox';
import BoxesContentBox from './boxesContentBox';
import { whoAreWeP1, whoAreWeP2, goalP1, goalP2 } from './text';
import serversImage from '../images/servers.jpg';
import papersImage from '../images/papers.jpg';
import FormComponent from './formComponent';
import {globalColors} from './colors';

// firebase
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/database';

// TODO: frequently asked, termsOfUse, possible background image on sign up, possible cauresel


function Home() {
  // firebase storage API
  const [db, setDb] = useState(null);

  useEffect(() => {
    // Your web app's Firebase configuration
    const { 
      REACT_APP_apiKey, 
      REACT_APP_authDomain, 
      REACT_APP_databaseURL, 
      REACT_APP_projectId, 
      REACT_APP_storageBucket, 
      REACT_APP_messagingSenderId, 
      REACT_APP_appId 
    } = process.env;

    try {
      const firebaseConfig = {
        apiKey: REACT_APP_apiKey,
        authDomain: REACT_APP_authDomain,
        databaseURL: REACT_APP_databaseURL,
        projectId: REACT_APP_projectId,
        storageBucket: REACT_APP_storageBucket,
        messagingSenderId: REACT_APP_messagingSenderId,
        appId: REACT_APP_appId
      };
  
      // Initialize Firebase
      const app = firebase.initializeApp(firebaseConfig);
      setDb(firebase.database());
    } catch (error) {
      // do nothing
      console.log(error);
    }
  }, [])

  return (
    <div style={{width: '100%'}} >
        <ContentBox header='Who are we?' color='white' text1={whoAreWeP1} text2={whoAreWeP2} image={serversImage} />
        <ContentBox header='Our goal.' color={globalColors.grey} text1={goalP1} text2={goalP2} image={papersImage} reverse={true} />
        <FormComponent db={db} heading="Sign Up!" subHeading="Sign up to get updates and notifications of release and testing dates." color={globalColors.blue} buttonText="sign up" />
        <BoxesContentBox 
          heading="We care about your privacy!" 
          subHeading="We are dedicated to keeping your data safe and secured, for more information follow the links below." 
        />
    </div>
  );
}

export default Home;
