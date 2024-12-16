import { signOut } from "firebase/auth";
import {auth} from '../firebase/firebase'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {onAuthStateChanged} from "firebase/auth";
import { addUser, removeUser } from "../redux/userSlice";
import {Logo} from '../assets/Images'


const Header=()=>{
    const dispatch =useDispatch()
    const navigate=useNavigate()
    // read data subscribing a store using a selector
    // selecting only needed portion of the user slices
    const user=useSelector((store)=>store.user) 
    // console.log(user);

    const userSignOut=()=>{
        console.log('sign out');
        signOut(auth).then(() => {
            }).catch((error) => {
            navigate('/error')
            // An error happened.
        });
    }

    useEffect(()=>{
        // console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
        //firbase/build/authentication/manage user
    const unsubscribe=onAuthStateChanged(auth, (user) => {
        console.log("eeeeeeeeeeeeeeeeeeeee");
        if (user) {
            // console.log(user);
            
            const {email,uid,displayName,photoURL}=user
            // action.payload
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL
            }))

            // redirect to browser page when user login
           navigate ('/browse')
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
        //   const uid = user.uid;
            // ...
        } else {
            dispatch(removeUser())
            navigate ('/')
        }
        });
        // unsubscribe to event when header component unload
        return () => unsubscribe()
    } ,[])

    return(
        
        <header className='px-20  w-full pb-6 z-20'>
            <div className='px-10 mx-auto flex items-center justify-between'>
                {/* <img className='w-44' src={Logo}></img> */}
                {/* <p>{user.}</p> */}
                {/* <img className='w-44' src={Logo}></img> */}
                <button onClick={userSignOut}>Sign Out</button>
                {/* <button onClick={()=>userSignOut()}>Sign Out</button>
                <button onClick={userSignOut()}>Sign Out</button> */}
            </div>
        </header>
    )
}
export default Header