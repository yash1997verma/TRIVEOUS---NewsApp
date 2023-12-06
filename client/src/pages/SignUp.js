import React from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { db } from "../firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
export default function SignUp(){
    const navigate = useNavigate();

    //get status to check if user was created
    const submitForm =async (e)=>{
        e.preventDefault();
        const username = usernameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
      
        

        try {
            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await updateProfile(auth.currentUser ,{
                displayName: username
            });

            //save user in firestor db
            const userData = {name:username, email, timestamp: serverTimestamp()};
            await setDoc(doc(db,"users", user.uid), userData);
            //navigate to home
            navigate('/home');
            toast.success("Signed Up Successfully");
        } catch (error) {
            console.log(error);
            toast.error ("Unable to Signed Up");
        }   

    
        
   
    }
  
    
    

    //use Ref to get references from form
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();


    useEffect(() => {
        // Disable scroll when the component mounts
        document.body.style.overflow = "hidden";
    
        // Re-enable scroll when the component unmounts
        return () => {
          document.body.style.overflow = "auto";
        };
      }, []);
    return (
        <>  
         
            <div className=" flex  items-center justify-center h-screen w-screen ">
                <div className=" flex justify-between border-1 border-slate-300 rounded-xl gap-8 md:gap-20  shadow-lg p-6 mt-[-100px] md:w-[900px]">
                  
                <img className="h-fit w-[300px] hidden sm:inline my-auto " src="/illustrations/signUp.png" alt=" " />
                    <form onSubmit={submitForm} className="flex flex-col h-fit w-[300px] sm:h-auto sm:w-auto gap-2 text-2xl p-auto md:pr-10">
                        <div className="mx-auto mb-6 ">
                            <p className="text-xl font-bold  font-mySans  ">Sign Up</p> 
                        </div>
                        <label className="font-mySans" >Name</label>
                        <input required className="border-2 rounded-md h-[60px] p-4 " spellCheck="false" ref={usernameRef}  placeholder="John Doe" type="text"  />
                        <label className="font-mySans" >Email</label>
                        <input required className="border-2 rounded-md h-[60px] p-4 " spellCheck="false" ref={emailRef} placeholder="johndoe@gmail.com" type="email"  />
                        <label className="font-mySans" >Password</label>
                        <input required className="border-2 rounded-md h-[60px] p-4 font-mySans font-thin" ref={passwordRef} placeholder="Create a strong password" type="password" />
                        <div className="flex items-center justify-between  mb-3">
                            <p className=" text-lg">Already have an account ? </p>
                            <Link className="mt-[-4px]" to="/signIn"><span className=" text-lg text-blue-600 " href="/">Sign In</span></Link>
                        </div>
                        <button type="submit" className="border-2 rounded-md h-[40px] p-2   flex items-center justify-center bg-blue-500 text-white font-bold">Sign Up</button>                        
                        {/* <p className="text-center">or</p>
                        <button  className="border-2 rounded-md h-[40px] p-2   flex items-center justify-center bg-red-400 text-white font-bold">Continue with google</button>                     */}
                    </form>      
                </div>         
            </div>
        </>
    )
}