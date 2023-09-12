import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:8000/api/users/auth", {
        email,
        password,
      })
      .then(() => {
        navigate('/')
        console.log('User logged in')
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="shadow-md p-5 m-5 rounded-md flex flex-col items-center">
      <h1 className="text-xl font-medium">Login</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-10 py-5"
      >
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
          className="border border-zinc-400 py-2 px-5 rounded-md outline-none"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="border border-zinc-400 py-2 px-5 rounded-md outline-none"
        />
        <button
          type="submit"
          className="bg-zinc-400 py-2 px-5 rounded-md text-white"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Login
