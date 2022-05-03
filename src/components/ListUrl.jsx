import { useState, } from "react";
import Button from "./Button";

const ListURl = ({ urls }) => {
  const [ copy, setCopy ] = useState({});

  const handleCopy = async ({ code, url }) => {
    await navigator.clipboard.writeText(url);

    setCopy(_prev => ({ [code]: true }))
  }

  return (
    <div className="mx-8 md:mx-0">
        {
          urls.map( ({ complete, short_link, code }) => (
            <div className="grid grid-cols-4 gap-3 bg-white rounded-md gap-y-1 md:gap-y-3 md:grid-cols-11 mb-4 last:mb-0" key={code}>
              <div className="col-start-1 col-span-4 md:col-span-7 md:flex md:items-center">
                <span className="block whitespace-nowrap text-ellipsis overflow-x-hidden p-3 border-b text-zinc-600 font-semibold border-green-500 md:text-lg md:border-0">
                  {complete}
                </span>
              </div>
              <div className="col-span-4 md:col-span-2 md:flex md:items-center">
                <span className="p-3 whitespace-nowrap text-ellipsis overflow-x-hidden text-cyan-400 text-lg font-medium block md:text-lg">
                  {short_link}
                </span>
              </div>
              <div className="p-3 col-span-4 md:col-span-2">
                <Button
                  onClick= {() => handleCopy({ code, url: short_link })}
                  styleCustom="rounded-md py-3 md:py-1"
                  text={copy[code] ? "Copied" : "Copy"}
                />
              </div>
            </div>
          ))
        }
    </div>
  )
}

export default ListURl;
