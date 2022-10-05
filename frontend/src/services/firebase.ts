import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import config from '@config/index';

const firebaseApp = initializeApp(config.firebase);
const firebaseDatabase = getFirestore(firebaseApp);
const firebaseCreateDbIns = (collectionName: string) => collection(firebaseDatabase, collectionName);
const googleProvider = new GoogleAuthProvider();

const logInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(getAuth(), googleProvider);
    return {
      username: result.user.email!,
      token: GoogleAuthProvider.credentialFromResult(result)!.accessToken!
    }

  } catch (error) {
    let message = 'Unknown Error'
    if (error instanceof Error) message = error.message
    throw new Error(message)
  }
};

const logOutWithGoogle = async () => {
  try {
    await signOut(getAuth());
  } catch (error) {
    let message = 'Unknown Error'
    if (error instanceof Error) message = error.message
    throw new Error(message)
  }
};
export { firebaseApp, firebaseDatabase, firebaseCreateDbIns, addDoc, logInWithGoogle, logOutWithGoogle };

