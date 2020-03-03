import firebase from 'firebase';

let config ={
    apiKey: "AIzaSyCDc5TKJD_-dEw0hnMoaeAf1GFrAswzi3c",
    authDomain: "myapp-ac026.firebaseapp.com",
    databaseURL: "https://myapp-ac026.firebaseio.com",
    projectId: "myapp-ac026",
    storageBucket: "myapp-ac026.appspot.com",
    messagingSenderId: "353399597926",
    appId: "1:353399597926:web:3d13f0741577b0ea"
};

const app = firebase.initializeApp(config);
export const db = app.database();
export const auth = firebase.auth();