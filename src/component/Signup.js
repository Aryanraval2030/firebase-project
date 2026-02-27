import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => alert("Signup successful!"))
      .catch(error => alert(error.message));
  };

  return (
    <form onSubmit={handleSignup}>
      <h2>Sign Up</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required/>
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required/>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;