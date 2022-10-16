import { createContext, React, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase-config';


export const AuthContext = createContext();
const auth = getAuth(app)
const UserContext = ({ children }) => {
    const [users, setUser] = useState()
    console.log(users);
    const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)
    const userSingIn = (email, password) => signInWithEmailAndPassword(auth, email, password)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            if (currentUser) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = currentUser.uid;
                // ...
            } else {
                // User is signed out
                // ...
            }
            return () => unsubscribe()
        })
    }, [])

    

    const userInfo = { users, createUser, userSingIn }

    return (
        <section className='user-context-section'>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </section>
    );
};

export default UserContext;