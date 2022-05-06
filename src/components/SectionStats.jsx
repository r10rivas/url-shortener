import IconBrandRecognition from "../assets/images/icon-brand-recognition.svg";
import IconDetailedRecords from "../assets/images/icon-detailed-records.svg";
import IconFullyCustomizable from "../assets/images/icon-fully-customizable.svg";
import Card from "./Card";

const SectionStats = () => {
  return (
    <div className="py-8 bg-slate-200">
      <div className="container mx-auto">
        <div className="mx-8 md:mx-2">
          <h2 className="text-center mb-8 font-semibold text-3xl">
            Advanced Statistics
          </h2>
          <p className="text-center text-zinc-500 text-base">
            Track how your links are performing across the web with our advanced statistics dashboard.
          </p>
          <div className="grid grid-cols-3 gap-x-4 gap-y-16 lg:gap-6 mt-14 relative after:content-['*'] before:w-3 before:h-4/6 before:bg-cyan-500 before:bottom-1/2 md:before:bottom-2/3 before:left-1/2 before:transform before:translate-y-1/2 before:-translate-x-1/2 before:absolute md:before:w-5/6 md:before:h-3">
            <div className="col-span-3 md:col-span-1">
              <Card icon={IconBrandRecognition}>
                <>
                  <h3 className="mb-4 text-xl text-zinc-600 font-bold">
                    Brand Recognition
                  </h3>
                  <p className="text-zinc-600">
                    Boast your recognition with each click. Generic links don't mean a thing. Branded links hep instil confidence in your content.
                  </p>
                </>
              </Card>
            </div>
            <div className="col-span-3  md:col-span-1">
              <div className="md:mt-10">
                <Card icon={IconDetailedRecords}>
                  <>
                    <h3 className="mb-4 text-xl text-zinc-600 font-bold">
                      Retailed Records
                    </h3>
                    <p className="text-zinc-600">
                      Gain insights into who is clicking your links. Knowing when and where people engage with your consten helps inform better decisions.
                    </p>
                  </>
                </Card>
              </div>
            </div>
            <div className="col-span-3  md:col-span-1">
              <div className="md:mt-20">
                <Card icon={IconFullyCustomizable}>
                  <>
                    <h3 className="mb-4 text-xl text-zinc-600 font-bold">
                      Fully Customizable
                    </h3>
                    <p className="text-zinc-600">
                      Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
                    </p>
                  </>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionStats;
