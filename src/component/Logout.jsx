import { auth } from "../firebase";
import { signOut } from "firebase/auth";

function Logout() {
  const handleLogout = () => {
    signOut(auth)
      .then(() => alert("Logged out successfully!"))
      .catch((error) => alert(error.message));
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;