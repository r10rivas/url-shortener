const Navbar = () => {

  return (
    <header className="p-4 flex justify-between container mx-auto">
      <div className="flex flex-row space-x-10 items-center">
        <span className="font-bold text-3xl">
          Shortly
        </span>
        <nav className="flex items-center">
          <ul className="flex space-x-4 text-lg font-semibold text-zinc-500">
            <li className="">Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
        </nav>
      </div>
      <div className="space-x-4">
        <button className="text-zinc-500 text-xl font-semibold">
          Login
        </button>
        <button className="px-4 py-2 text-white text-xl font-semibold bg-cyan-400 rounded-3xl">
          Sign ups
        </button>
      </div>

      {/* <button>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button> */}
    </header>
  )
}

export default Navbar;
