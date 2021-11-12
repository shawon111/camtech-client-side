import initializeFirebase from "../firebase/firebase.initialize"
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initializeFirebase();
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //create user
    const handleCreateUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                alert('The user is registerd successfully!!')
            }).catch(error => {
                console.log(error.message)
            })
    }

    //handle user login
    const handleUserLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                setUser(userCredential.user);
                alert('Login Successfull');
            }).catch(error => {
                console.log(error.message)
            })
    }

    //get currently loggedin user 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({});
            }
        })
    }, []);

    const handleLogOut = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            
        });
    }

    return {
        user,
        setEmail,
        setPassword,
        handleCreateUser,
        handleUserLogin,
        handleLogOut
    }
}

export default useFirebase;