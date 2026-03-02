import { useState } from "react"
import { auth } from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { Link } from "react-router-dom"

function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSignup = async (e) => {
    e.preventDefault()
    setError("")

    try {
      await createUserWithEmailAndPassword(auth, email, password)
      alert("Account created successfully!")
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f4f9]">

      <div className="bg-white w-[900px] rounded-3xl shadow-lg flex overflow-hidden">

        {/* LEFT SIDE */}
        <div className="w-1/2 p-10 flex flex-col justify-center">

          <div>
            <img
              src="https://cdn.dribbble.com/userupload/17039932/file/original-983633d1f6de58f5d871f174ff34f057.jpg?format=webp&resize=400x300&vertical=center"
              alt="logo"
              className="w-28 mb-6"
            />
          </div>


          <h2 className="text-3xl font-medium mb-2">
            Create your account
          </h2>

          <p className="text-gray-600 mb-8">
            to continue to MyApp
          </p>

          <form onSubmit={handleSignup} className="flex flex-col gap-4">

            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition mt-2"
            >
              Next
            </button>

          </form>

          <p className="text-sm mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="w-1/2 bg-blue-50 flex items-center justify-center p-10">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">
              One account. All services.
            </h3>
            <p className="text-gray-600 text-sm">
              Sign up once and access everything easily and securely.
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Signup