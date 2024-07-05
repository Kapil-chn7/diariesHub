import React,{useState} from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword , signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { app } from '../../utilities/FirebaseInstance';
import { hashPassword } from '../../utilities/generateHashes/PasswordHash';


const changeValue=(vFun, vVar, vName, e)=>{
    vFun({...vVar, [vName]:e.target.value })
}


const Signin=()=> {
    const [userDataSignin, updateUserDataSignin]=useState({email:"", password:""})

    const handleSignInSubmit=async(e)=>{
      e.preventDefault(); 
      try{
        console.log("Signing up with data:", userDataSignin);
      const auth = getAuth();
      const signinData=await signInWithEmailAndPassword(auth, userDataSignin.email, userDataSignin.password)
      console.log("this is the signin data ", signinData)
  
      
      }
      catch(err){
        console.log("this is the error ", err)

      }
    
    }
  

    const handleSignInWithGoogle=()=>{
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
   signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log("this is the token ", token, user)
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    }
  return (
   <>
    <div>AuthComp</div>
    <form onSubmit={handleSignInSubmit}>
        <input type="text" placeholder="Enter you email" maxlength="30" value={userDataSignin.email} 
        
        onChange={(e)=>{changeValue(updateUserDataSignin, userDataSignin, "email", e)}}
        required></input>
        <br/>
        <input type="password" placeholder="Enter you password" maxlength="16" minlength="8" value={userDataSignin.password} 
        onChange={(e)=>{changeValue(updateUserDataSignin, userDataSignin, "password", e)}} required></input>
        <button>Signin</button>
        
    </form>
    <button onClick={handleSignInWithGoogle}>Google Authentication</button>
    </>
  )
}

const SignUp=()=> {
  const [userDataSignUp, updateUserDataSignUp]=useState({
    firstName:"", lastName:"", email:"", dob:"", password:"", confirmPassword:""
  })
  const handleSignUpSubmit = async(e) => {
    e.preventDefault(); 
    try{
      const auth = getAuth(app);
      const data =await createUserWithEmailAndPassword(auth, userDataSignUp.email, userDataSignUp.password);
      console.log("This is the data ",data.user)

    }
    catch(err){
      console.log("This is the error ", err)
    }
  };
return (
  <div>AuthComp
  <form onSubmit={handleSignUpSubmit}>
      <input
          type="text"
          placeholder="Enter your first name"
          maxLength="30"
          value={userDataSignUp.firstName}
          onChange={(e) => { changeValue(updateUserDataSignUp, userDataSignUp, "firstName", e) }}
          required
      />
      <br />
      <input
          type="text"
          placeholder="Enter your last name"
          maxLength="30"
          value={userDataSignUp.lastName}
          onChange={(e) => { changeValue(updateUserDataSignUp, userDataSignUp, "lastName", e) }}
          required
      />
      <br />
      <input
          type="text"
          placeholder="Enter your email"
          maxLength="30"
          value={userDataSignUp.email}
          onChange={(e) => { changeValue(updateUserDataSignUp, userDataSignUp, "email", e) }}
          required
      />
      <br />
      <input
          type="text"
          placeholder="Enter your date of birth"
          maxLength="10"
          value={userDataSignUp.dob}
          onChange={(e) => { changeValue(updateUserDataSignUp, userDataSignUp, "dob", e) }}
          required
      />
      <br />
      <input
          type="password"
          placeholder="Enter your password"
          maxLength="16"
          minLength="8"
          value={userDataSignUp.password}
          onChange={(e) => { changeValue(updateUserDataSignUp, userDataSignUp, "password", e) }}
          required
      />
      <br />
      <input
          type="password"
          placeholder="Confirm your password"
          maxLength="16"
          minLength="8"
          value={userDataSignUp.confirmPassword}
          onChange={(e) => { changeValue(updateUserDataSignUp, userDataSignUp, "confirmPassword", e) }}
          required
      />
      <br />
      <button type="submit">Sign Up</button>
  </form>
  </div>
)
}

export default function AuthComp(){

  return <div>
    <p>Authentication Component</p>
    {
      Signin()

      
    }
    {
      SignUp()
    }
  </div>
}

