import auth from '@react-native-firebase/auth';

export const loginRequest = (email, password) =>
  auth().signInWithEmailAndPassword(email, password);

export const registrationRequest = (email, password) =>
  auth().createUserWithEmailAndPassword(email, password);
