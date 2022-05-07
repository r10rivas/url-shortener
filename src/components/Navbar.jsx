import Logo from "../assets/images/logo.svg";

const Navbar = () => {

  return (
    <nav className="bg-white fixed w-full z-10">
      <div className="container mx-auto px-8 md:px-0">
        <div className="relative flex items-center justify-between h-20">
          <div className="absolute inset-y-0 left-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <img className="block h-8 w-auto" src={Logo} alt="Logo"/>
          </div>

          {/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>

              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div> */}

          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Features</a>

                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pricing</a>

                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Resources</a>

              </div>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Features</a>

                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>

              {/* <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg> */}
            </button>
          </div>
        </div>
      </div>
      

      <div className="container mx-auto sm:hidden" id="mobile-menu">
        <div className="bg-primary-dark-violet rounded-lg px-4 mx-8 md:mx-0">
          <div className="px-2 pt-2 pb-3 space-y-1 font-bold text-lg text-center border-b border-neutral-grayish-violet">
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md">
              Features
            </a>

            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md">
              Pricing
            </a>

            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md">
              Resources
            </a>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1 font-bold text-lg text-center">
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md">
              Features
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;


// <div className="w-full h-20 bg-white fixed z-10">
//       <header className="container mx-auto flex justify-between items-center w-full h-full">
//         <div className="flex flex-row space-x-10 items-center">
//           <span className="font-bold text-3xl">
//             Shortly
//           </span>
//           <nav className="flex items-center">
//             <ul className="flex space-x-4 text-lg font-semibold text-zinc-500">
//               <li className="">Features</li>
//               <li>Pricing</li>
//               <li>Resources</li>
//             </ul>
//           </nav>
//         </div>
//         <div className="space-x-4">
//           <button className="text-zinc-500 text-xl font-semibold">
//             Login
//           </button>
//           <button className="px-4 py-2 text-white text-xl font-semibold bg-cyan-400 rounded-3xl">
//             Sign ups
//           </button>
//         </div>

//         {/* <button>
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//             <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button> */}
//       </header>
//     </div>