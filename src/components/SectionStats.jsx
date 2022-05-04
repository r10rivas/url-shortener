import IconBrandRecognition from "../assets/images/icon-brand-recognition.svg";
import IconDetailedRecords from "../assets/images/icon-detailed-records.svg";
import IconFullyCustomizable from "../assets/images/icon-fully-customizable.svg";

const SectionStats  = () => {
  return (
    <div className="grid grid-cols-3 gap-3 gap-y-16 lg:gap-6 mt-14 relative after:content-['*'] before:w-3 before:h-4/6 before:bg-cyan-500 before:bottom-1/2 md:before:bottom-2/3 before:left-1/2 before:transform before:translate-y-1/2 before:-translate-x-1/2 before:absolute md:before:w-5/6 md:before:h-3">
       <div className="col-span-3 md:col-span-1">
         <div className="p-10 pt-24 relative bg-white rounded-md">
            <div className="w-16 h-16 left-1/2 transform -translate-x-1/2 bg-purple-800 rounded-full absolute -top-7 flex justify-center items-center lg:w-20 lg:h-20">
              <img className="" src={IconBrandRecognition} alt="" />
            </div>
            <h3 className="mb-4 text-xl text-zinc-600 font-bold">
              Brand Recognition
            </h3>
            <p className="text-zinc-600">
              Boast your recognition with each click. Generic links don't mean a thing. Branded links hep instil confidence in your content.
            </p>
         </div>
       </div>
       <div className="col-span-3  md:col-span-1">
        <div className="p-10 pt-24 bg-white relative rounded-md md:mt-10">
          <div className="w-16 h-16 left-1/2 transform -translate-x-1/2 bg-purple-800 rounded-full absolute -top-7 flex justify-center items-center lg:w-20 lg:h-20">
            <img className="" src={IconDetailedRecords} alt="" />
          </div>
          <h3 className="mb-4 text-xl text-zinc-600 font-bold">
            Retailed Records
          </h3>
          <p className="text-zinc-600">
            Gain insights into who is clicking your links. Knowing when and where people engage with your consten helps inform better decisions.
          </p>
         </div>
       </div>
       <div className="col-span-3  md:col-span-1">
        <div className="p-10 pt-24 relative bg-white rounded-md md:mt-20">
            <div className="w-16 h-16 left-1/2 transform -translate-x-1/2 bg-purple-800 rounded-full absolute -top-7 flex justify-center items-center lg:w-20 lg:h-20">
              <img className="" src={IconFullyCustomizable} alt="" />
            </div>
            <h3 className="mb-4 text-xl text-zinc-600 font-bold">
              Fully Customizable
            </h3>
            <p className="text-zinc-600">
              Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
            </p>
         </div>
       </div>
    </div>
  )
}

export default SectionStats;


{/* <div className="w-full flex justify-between h-64">
<div className="w-36 pb-8 bg-white relative rounded-md top-10">
  <h3>Brand Recognition</h3>
  <p>Boast your recognition with each click. Generic links don't mean a thing. Branded links hep instil confidence in your content.</p>
</div>

<div className="w-24 h-7 bg-red-700 relative top-20">
</div>

<div className="w-24 h-7 bg-red-700 relative top-32">
</div>
</div> */}