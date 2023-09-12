import axios from "axios"
import { BsGithub } from "react-icons/bs"
import { Link, useNavigate } from "react-router-dom"

const Header = () => {
  const navigate = useNavigate()
  const logout = async () => {
    try {
      await axios.post('http://localhost:8000/api/users/logout')
      navigate('Login')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <header className="shadow-md p-3 flex justify-between items-center">
      <div className="flex w-full items-center justify-between max-w-[1400px] mx-auto">
        <div className="text-xl font-bold flex items-center gap-5">
          <a href="https://github.com/harsh661/mern-auth">
            <BsGithub size={25} />
          </a>
          MERN Auth
        </div>
        <div>
          <Link to={"/login"} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2">
            Login
          </Link>
          <button onClick={logout} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
