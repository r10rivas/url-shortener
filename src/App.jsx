import illustrationWorking from "./assets/images/illustration-working.svg";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { formValidate } from "./utils/formValidate";

import FormError from "./components/FormError";
import FormInput from "./components/FormInput";
import Button from "./components/Button";


const App = () => {
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
      const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
      const data = await response.json();
      console.log(data)

      const { code, short_link, original_link: complete } = data.result;

      const shortedLink = { code, short_link, complete }

      setUrls([ ...urls, shortedLink ]);

      resetField("url");
    } catch (error) {
      console.log(error);
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
                styleCustom="w-auto text-lg md:self-start md:ml-6 md:px-10"
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
                    styleCustom="rounded-md"
                    text="Shorten it!"
                    type="submit"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="mx-8">
            {
              urls.map(url => (
                <div className="w-full flex flex-col justify-between bg-white rounded-md md:flex-row" key={url.code}>
                  <div className="p-3 border-b border-green-500 md:border-0">
                    <span className="">{url.complete}</span>
                  </div>
                  <div className="p-3">
                    <span className="text-cyan-400 text-lg font-medium">{url.short_link}</span>
                  </div>
                </div>
              ))
            }
          </div>

          {/* <div className="pt-28 bg-red-400">
            URLS
          </div> */}
        </div>
      </div>

      <div className="py-8 bg-slate-200">
        <div className="container mx-auto">
          <h2 className="text-center mb-8 font-semibold text-3xl">
            Advanced Statistics
          </h2>
          <p className="text-center text-zinc-500 text-lg">
            Track how your links are performing across the web with our advanced statistics dashboard.
          </p>
        </div>
      </div>

      <div className="py-8 bg-[url('./assets/images/bg-boost-desktop.svg')] bg-no-repeat bg-cover bg-center bg-indigo-300">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className=" mb-6 text-center font-bold text-4xl text-white">
            Boost your links today
          </h2>
          <button className="py-2 px-8 text-white text-xl font-semibold bg-cyan-400 rounded-full md:py-4" type="button">
            Get started
          </button>
        </div>
      </div>

      <div className="py-12 bg-zinc-800">
        <div className="container mx-auto">
          <div className="text-white">
            Shortly
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
