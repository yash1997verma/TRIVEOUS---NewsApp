import React, { useRef } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default function SignIn({ onLogin }){
  
    const emailRef = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate();


    

    const handleSubmit = async(e)=>{
        e.preventDefault();
        
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const userData = { email, password};
        try {
             //signin with firebase
            const auth = getAuth();
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            if(userCredential.user){
                navigate('/privateRoutes/home');
            }
            toast.success("Signed In Successfully");
            } catch (error) {
            console.log(error)
        }
   
        

    }


      

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
       
            <div className=" flex flex-col  items-center justify-center h-screen w-screen ">
           
                <div className=" flex justify-between border-1 border-slate-300 rounded-xl gap-8 md:gap-20  shadow-lg p-6 mt-[-100px] md:w-[900px]">
                  
                    <img className="h-fit w-[300px] hidden sm:inline my-auto " src="/illustrations/signIn.png" alt="" />
                    <form onSubmit={handleSubmit} className="flex flex-col h-fit w-[300px] sm:h-auto sm:w-auto gap-2 text-2xl p-auto md:pr-10">
                        <div className="mx-auto mb-6 ">
                            <p className ="text-xl  font-bold  ">Sign In</p> 
                        </div>
                        <label className="font-mySans" >Email</label>
                        <input required ref={emailRef} className="border-2 rounded-md h-[60px] p-4 " spellCheck="false" placeholder="johndoe@gmail.com" type="email" />
                        <label className="font-mySans" >Password</label>
                    
                        <input required ref={passwordRef} className="border-2 rounded-md h-[60px] p-4  font-thin" placeholder="Enter your password" type="password" />
                        <div className="flex items-center justify-between  mb-3">
                            <p className=" text-lg">Don't have an account ? </p>
                            <Link className="mt-[-4px]" to="/signUp"><span className=" text-lg text-blue-600 " href="/">Sign Up</span></Link>
                        </div>
                        <button type="submit" className="border-2 rounded-md h-[40px] p-2   flex items-center justify-center bg-blue-500 text-white font-bold">Sign In</button>                        
                        {/* <p className="text-center">or</p>
                        <button type="submit" className="border-2 rounded-md h-[40px] p-2   flex items-center justify-center bg-red-400 text-white font-bold">Continue with google</button>                     */}
                    </form>      
                </div>         
            </div>
        </>
    )
}