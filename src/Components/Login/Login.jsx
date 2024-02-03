import React from 'react'
import { Button } from 'react-bootstrap'

import {GoogleAuthProvider,getAuth,signInWithPopup} from 'firebase/auth'

// const provider = new GoogleAuthProvider()
// const auth = getAuth()

// const handleLogin = () => {
//     signInWithPopup(auth,provider).then((result) => {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
//         // The signed-in user info.
//         const user = result.user;
//         // IdP data available using getAdditionalUserInfo(result)
//         // ...
//       }).catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.customData.email;
//         // The AuthCredential type that was used.
//         const credential = GoogleAuthProvider.credentialFromError(error);
//         // ...
//       });  
// }
const Login = () => {
  return (
    <div>
        <Button onClick={handleLogin} className='btn-primary py-2 px-2'>
            Login
        </Button>
    </div>
  )
}

export default Login