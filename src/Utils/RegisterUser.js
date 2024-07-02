import { Link, useNavigate } from 'react-router-dom'
import { signInWithGoogle } from '@/Utils/SignInWithGoogle';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '@/config/firebase'
import toast from 'react-hot-toast'
import { doc, getDoc, setDoc } from 'firebase/firestore'

export const RegisterUser= async (email,password,fullName,phone)=>{
    try {
      await createUserWithEmailAndPassword (auth,email,password)
      const user=auth.currentUser;
     const ref = doc(db,"Users",user.uid);
     const userDoc = await getDoc(ref);
     if (!userDoc.exists()) {
      await setDoc(ref,{
        Email:user.email,
        fullName:fullName,
        phoneNumber:phone,
        role:"customer",
        userId:user.uid
      })
      toast.success("Registration Successful! Welcome to Sea Salon.");
     }
    } catch (error) {
      toast.error(`Register failed : ${error.code}`)
    }
   
  }