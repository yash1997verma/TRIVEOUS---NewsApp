import { Outlet, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import { useAuthStatus } from '../hooks/useAuthStatus';
import { getAuth } from 'firebase/auth';
export default function Navbar() {
    const {loggedIn, checkingStatus} = useAuthStatus();
    const auth = getAuth();
    const navigate = useNavigate();
    const handleSignInSignOut =()=>{
        if(loggedIn){
            auth.signOut();
        }
        navigate('/signIn');
        
    }
  return (
    <>
        <div className='bg-white border-b-2 w-full shadow-md h-fit flex justify-between items-center px-4 py-4'>
            <div className='flex'>
                <img className='w-8 h-6' src="/icons/curiousMediaLogo.jpg" alt="" />
                <p className='font-sans font-extrabold italic '>Curious Media</p>
            </div>
            <div className='flex items-center gap-3'>
              <Link to='/home'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            </Link>
            <Link to='/favourites'>
                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
            </Link>
            <div onClick={handleSignInSignOut}  className='cursor-pointer select-none bg-blue-500 text-white p-2 rounded-md  text-sm  rounded-sm font-sans font-bold ml-3'>
                {loggedIn ? 'Sign Out': 'Sign In' }
            </div>
          
            </div>
        </div>
        <Outlet />
    </>
  )
}
