import illustrationWorking from "./assets/images/illustration-working.svg";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { formValidate } from "./utils/formValidate";

import FormError from "./components/FormError";
import FormInput from "./components/FormInput";
import Button from "./components/Button";
import ListURl from "./components/ListUrl";

const App = () => {
  const [ loading, setLoading ] = useState(false);

  const {
    formState: { errors },
    handleSubmit,
    register,
    resetField,
  } = useForm();

  const {
    required,
    patternURL,
  } = formValidate();

  const [ urls, setUrls ] = useState([]);

  const onSubmit = async ({ url }) => {
    try {
      setLoading(true);

      const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
      const data = await response.json();
      console.log(data)

      const { code, short_link, original_link: complete } = data.result;

      const shortedLink = { code, short_link, complete }

      setUrls([ ...urls, shortedLink ]);

      resetField("url");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="font-poppins overflow-x-hidden">
      <div className="container mx-auto">
        <div className="w-full mt-10 mb-32 flex flex-col space-y-8 md:flex-row md:space-y-0">
          <div className="flex-1 md:order-last">
            <div className="w-full">
              <img
                alt="illustration-working"
                className="translate-x-16 sm:max-h-96 sm:translate-x-24"
                src={illustrationWorking}
              />
            </div>
          </div>

          <div className="mx-8 flex-1 flex flex-col md:justify-center md:mx-0">
            <h1 className="w-full mb-8 font-bold text-3xl text-center md:text-5xl">
              More than just shorter links
            </h1>
            <div className="flex flex-col items-center">
              <p className="mb-8 text-zinc-500 text-center text-lg">
                Build your brand's recognition and get detailed insights on how your links are performing.
              </p>
              <Button
                styleCustom="w-auto rounded-full text-lg md:self-start md:ml-6 md:px-10"
                text="Get started"
                type="button"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 bg-slate-200">
        <div className="container mx-auto">
          <div className="relative h-32 mx-8 md:mx-0 md:h-28">
            <div className="w-full p-6 md:p-12 absolute -top-24 bg-[url('./assets/images/bg-shorten-mobile.svg')] bg-no-repeat bg-cover bg-indigo-200 rounded-md md:bg-[url('./assets/images/bg-shorten-desktop.svg')]">
              <form
                className="flex flex-col space-y-5 md:space-y-0 md:flex-row md:space-x-4"
                onSubmit={handleSubmit(onSubmit)}
              >
                <FormInput
                  error={errors.url}
                  placeholder="Shorten link here..."
                  type="text"
                  { ...register("url",{
                    required,
                    pattern: patternURL,
                  })}
                >
                  <FormError error={errors.url}/>
                </FormInput>
                <div>
                  <Button
                    loading={loading}
                    styleCustom="rounded-md"
                    text="Shorten it!"
                    type="submit"
                  />
                </div>
              </form>
            </div>
          </div>
          <ListURl urls={urls}/>
        </div>
      </div>

      <div className="py-8 bg-slate-200">
        <div className="container mx-auto">
          <h2 className="text-center mb-8 font-semibold text-3xl">
            Advanced Statistics
          </h2>
          <p className="text-center text-zinc-500 text-base">
            Track how your links are performing across the web with our advanced statistics dashboard.
          </p>
        </div>
      </div>

      <div className="py-8 bg-[url('./assets/images/bg-boost-desktop.svg')] bg-no-repeat bg-cover bg-center bg-indigo-300">
        <div className="container mx-auto py-4 flex flex-col items-center">
          <h2 className=" mb-6 text-center font-bold text-3xl text-white">
            Boost your links today
          </h2>
          <Button
            styleCustom="w-auto rounded-full text-lg md:ml-6 md:px-10"
            text="Get started"
            type="button"
          />
        </div>
      </div>

      <div className="py-12 bg-zinc-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-8 gap-3 gap-y-6">
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <div className="text-white text-center text-3xl ml-3 font-bold md:text-left">
                Shortly
              </div>
            </div>
            <div className="col-span-1 md:col-span-4 lg:col-span-3">
              <div className="flex flex-col text-white text-base space-y-5 md:space-y-0 md:flex-row">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="mb-3 font-bold">Features</h3>
                  <ul className="text-zinc-500">
                    <li className="hover:text-cyan-500">Links Shortening</li>
                    <li className="hover:text-cyan-500">Branded links</li>
                    <li className="hover:text-cyan-500">Analytics</li>
                  </ul>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="mb-3 font-bold">Resources</h3>
                  <ul className="text-zinc-500">
                    <li className="hover:text-cyan-500">Blog</li>
                    <li className="hover:text-cyan-500">Developers</li>
                    <li className="hover:text-cyan-500">Support</li>
                  </ul>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="mb-3 font-bold">Company</h3>
                  <ul className="text-zinc-500">
                    <li className="hover:text-cyan-500">About</li>
                    <li className="hover:text-cyan-500">Our team</li>
                    <li className="hover:text-cyan-500">Careers</li>
                    <li className="hover:text-cyan-500">Contact</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2">
              <div className="flex justify-center space-x-4 mr-3 md:justify-end md:space-x-6">
                <svg className="w-6 h-6 fill-white hover:fill-cyan-500" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
                </svg>
                <svg className="w-6 h-6 fill-white hover:fill-cyan-500" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"/>
                </svg>
                <svg className="w-6 h-6 fill-white hover:fill-cyan-500" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
                <svg className="w-6 h-6 fill-white hover:fill-cyan-500" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
