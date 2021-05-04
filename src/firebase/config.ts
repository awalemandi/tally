import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../redux/store';

var firebaseConfig = {
	apiKey: 'AIzaSyD7G1oH731tSOLzwbRZ7fJ8ez1runfbTSI',
	authDomain: 'tally-3f9a1.firebaseapp.com',
	projectId: 'tally-3f9a1',
	storageBucket: 'tally-3f9a1.appspot.com',
	messagingSenderId: '348588221185',
	appId: '1:348588221185:web:cfd5ae363a03ed3ab6b100',
	measurementId: 'G-3NDXMC4KZS',
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

const db = fb.firestore();

// const { user } = useSelector((state: RootState) => state.auth);
// const dispatch = useDispatch();

// const userDocRef = db.collection('users').doc(`${user?.id}`);

export {firebase, db};
