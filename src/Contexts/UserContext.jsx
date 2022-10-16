import  {createContext, React, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/firebase-config';


export const AuthContext = createContext();
const auth = getAuth(app)
const UserContext = ({children}) => {     
    const [user, setUser] = useState({userName : "Omar" }) 
    const createUser = (email, password) => createUserWithEmailAndPassword(auth, email,password)

    const userInfo = {user, createUser}
    
    return (
        <section className='user-context-section'>
            <AuthContext.Provider value={userInfo}>
            {children}
            </AuthContext.Provider>
        </section>
    );
};

export default UserContext;