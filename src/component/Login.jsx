import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f4f9]">
      <div className="bg-white w-[380px] p-8 rounded-3xl shadow-md">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="logo"
            className="w-24"
          />
        </div>

        <h2 className="text-2xl font-medium text-center mb-6">
          Sign in
        </h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Email or phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition"
          >
            Next
          </button>
        </form>

      </div>
    </div>
  );
}

export default Login;