import { useState } from "react";
import Logo from "../assets/images/logo.svg";
import Button from "./Button";

const Navbar = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-10">
      <div className="container mx-auto px-8 md:px-0">
        <div className="relative flex items-center justify-between h-20">
          <div className="absolute inset-y-0 left-0 flex items-center pr-2 sm:static md:inset-auto md:ml-6 md:pr-0">
            <img className="block h-8 w-auto" src={Logo} alt="Logo"/>
          </div>

          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden md:block md:ml-6">
              <div className="flex space-x-4">
                <a href="#" className="text-neutral-grayish-violet hover:text-primary-cyan px-3 py-2 rounded-md text-lg font-medium" aria-current="page">Features</a>

                <a href="#" className="text-neutral-grayish-violet hover:text-primary-cyan px-3 py-2 rounded-md text-lg font-medium">Pricing</a>

                <a href="#" className="text-neutral-grayish-violet hover:text-primary-cyan px-3 py-2 rounded-md text-lg font-medium">Resources</a>

              </div>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
            <div className="hidden md:block sm:ml-6">
              <div className="flex space-x-4 items-center">
                <a href="#" className="text-neutral-grayish-violet hover:text-primary-cyan px-3 py-2 rounded-md text-lg font-medium">
                  Login
                </a>
                <Button text="Sign up" styleCustom="rounded-full"/>
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={ () => setIsOpen(!isOpen) }>
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'container mx-auto md:hidden' : 'hidden'}`}>
        <div className="bg-primary-dark-violet rounded-lg p-4 mx-8 md:mx-0">
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
              Login
            </a>

            <Button text="Sign Out" styleCustom="rounded-full"/>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
