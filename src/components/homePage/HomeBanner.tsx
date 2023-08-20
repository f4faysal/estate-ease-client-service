// import Image from "next/image";

// const HomeBanner = () => {
//   return (
//     <div className="container mx-auto">
//       <div className="">
//         <Image
//           src="/assets/placeholder.png"
//           alt=""
//           width={1600}
//           height={784}
//           className=""
//         />
//       </div>

//       <div>
//         <h1 className="text-7xl font-bold text-white">
//           Find your way <br />
//           <span className="text-[#26aae1]">Home</span>
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default HomeBanner;

import Image from "next/image";
import { BsFillPlayCircleFill } from "react-icons/bs";

const HomeBanner = () => {
  return (
    <div className="relative container mx-auto">
      <div className="relative">
        {/* Linear gradient overlay */}
        <div
          className="absolute inset-0 rounded-3xl"
          style={{
            background:
              "linear-gradient(269deg, rgba(199, 202, 199, 0.00) 10.88%, rgba(38, 42, 52, 0.31) 67.19%)",
          }}
        ></div>

        {/* Image */}
        <Image
          src="/assets/placeholder.png"
          alt=""
          width={1600}
          height={784}
          className=""
        />
      </div>

      <div className="absolute top-36 left-10">
        <h1 className="text-7xl font-bold text-white">
          Find your way <br />
          <span className="text-[#A2DAC7]">Home</span>
        </h1>
        <p className="text-white text-xl mt-4">
          The most comfortable accommodation you can find in our <br />
          website, spread all over the world
        </p>
        <div className="mt-5 flex gap-10">
          <button className=" py-3 px-9 bg-[#A2DAC7] text-[#384652] font-semibold rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#26aae1]focus:ring-opacity-75">
            Get Start
          </button>
          <button className="text-xl py-3 px-9  border border-[#A2DAC7]  text-[#eef2f5] font-semibold rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#26aae1]focus:ring-opacity-75 flex items-center gap-4">
            <span className="">
              <BsFillPlayCircleFill />{" "}
            </span>{" "}
            Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
