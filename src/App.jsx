// import Navbar from './components/Navbar';
import illustrationWorking from "./assets/images/illustration-working.svg";

const App = () => {

  return (
    <div className="font-poppins overflow-x-hidden">
      {/* <Navbar /> */}

      <div className="container mx-auto">
        <div className="w-full flex flex-col md:flex-row">
          <div className="flex-1 md:order-last">
            <div className="w-full">
              <img
                alt="illustration-working"
                className="translate-x-16 sm:max-h-96 sm:translate-x-24"
                src={illustrationWorking}
              />
            </div>
          </div>

          <div className="p-10 flex-1 flex flex-col md:justify-center">
            <h1 className="w-full mb-8 font-bold text-3xl text-center lg:text-5xl">
              More than just shorter links
            </h1>
            <div className="flex flex-col items-center">
              <p className="mb-8 text-zinc-500 text-center text-lg">
                Build your brand's recognition and get detailed insights on how your links are performing.
              </p>
              <button className="px-4 py-2 text-white text-xl font-semibold bg-cyan-400 rounded-3xl">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
