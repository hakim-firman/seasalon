import { auth, db, googleProvider } from "@/config/firebase";
import { signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      
      const userRef = doc(db, "Users", user.uid);
      const userDoc = await getDoc(userRef);
  
      if (!userDoc.exists()) {
        
        await setDoc(userRef, {
          userId:user.uid,
          fullName:user.displayName,
          Email:user.email,
          phoneNumber:user.phoneNumber,
          role: "customer"
        });
        console.log("Role 'customer' added to Firestore for user:", user.uid);

      } else {
        console.log("User already has a role in Firestore.");
      }
  
      toast.success("You have successfully logged in.");
    } catch (error) {
      console.error("Error signing in with Google:");
      toast.error(`Error signing in with Google:${error.code}`);
    }
  };


 
