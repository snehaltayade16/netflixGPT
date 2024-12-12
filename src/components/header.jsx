import { signOut } from "firebase/auth";
import {auth} from '../firebase/firebase'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header=()=>{
    const navigate=useNavigate()
    const user=useSelector((store)=>store.user)
    console.log(user);
    const userSignOut=()=>{
        console.log('sign out');
        signOut(auth).then(() => {
            navigate('/')
          }).catch((error) => {
              navigate('/error')
            // An error happened.
          });
        
   
}
    
    return(
        
        <header className='px-20  w-full pb-6 z-20'>
            <div className='px-10 mx-auto flex items-center justify-between'>
                <img className='w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"></img>
                {/* <p>{user.}</p> */}
                <button onClick={userSignOut}>Sign Out</button>
            </div>
            
        </header>
        
        
    )
}
export default Header