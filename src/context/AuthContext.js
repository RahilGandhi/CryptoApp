import { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import {doc, setDoc } from 'firebase/firestore'

const UserContext = createContext()  

export const AuthContextProvider = ({ children  }) => {
    const [user, setUser] = useState({ })

    const signup = (email, password) => {
        console.log('Signing up', email, password)
        createUserWithEmailAndPassword(auth, email, password)
        return setDoc(doc(db, 'users', email), {
            watchList : [],
        });
    };

    const signin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    return(
        <UserContext.Provider value={{signup, signin, logout, user}}>
            {children}
        </UserContext.Provider>
    )

}

export const UserAuth = () => {
    return useContext(UserContext)
}