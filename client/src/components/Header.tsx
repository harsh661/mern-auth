import { BsGithub } from "react-icons/bs"

const Header = () => {
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
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2">
            Login
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
