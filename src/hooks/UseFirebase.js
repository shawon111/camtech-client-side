import initializeFirebase from "../firebase/firebase.initialize"
import { getAuth, updateProfile , createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initializeFirebase();
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //create user
    const handleCreateUser = (name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                setUser(userCredential.user);
                //update display name
                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {
                    alert('name updated')
                  }).catch((error) => {
                    console.log(error.message)
                  });
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

    //handle logout
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