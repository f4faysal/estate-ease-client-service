import Image from "next/image";
import { BsFillPlayCircleFill } from "react-icons/bs";
import SForm from "./SForm";

const HomeBanner = () => {
  return (
    <div className="relative container mx-auto mb-16">
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
          className="  "
        />
      </div>
      <div className="absolute top-5 md:top-36 left-10 ">
        <h1 className="text-2xl md:text-7xl font-bold text-white">
          Find your way <br />
          <span className="text-[#A2DAC7]">Home</span>
        </h1>
        <p className="text-white md:text-xl mt-1 md:mt-4 hidden md:block">
          The most comfortable accommodation you can find in our <br />
          website, spread all over the world
        </p>
        <div className="mt-2 md:mt-5 flex gap-3 md:gap-10">
          <button className=" text-sm py-1 px-2 md:py-3 md:px-9 bg-[#A2DAC7] text-[#384652] font-semibold rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#26aae1]focus:ring-opacity-75">
            Get Start
          </button>
          <button className="text-sm py-1 px-2 md:text-xl md:py-3 md:px-9  border border-[#A2DAC7]  text-[#eef2f5] font-semibold rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#26aae1]focus:ring-opacity-75 flex items-center gap-4">
            <span className="">
              <BsFillPlayCircleFill />{" "}
            </span>{" "}
            Watch Video
          </button>
        </div>
      </div>
      <div className="absolute top-[590px] left-0 right-0 lg:flex justify-center hidden ">
        <SForm />
      </div>
    </div>
  );
};

export default HomeBanner;

// import Image from "next/image";
// import { BsFillPlayCircleFill } from "react-icons/bs";
// import SForm from "./SForm";

// const HomeBanner = () => {
//   return (
//     <div className="relative container mx-auto mb-16">
//       <div className="relative">
//         {/* Linear gradient overlay */}
//         <div
//           className="absolute inset-0 rounded-3xl"
//           style={{
//             background:
//               "linear-gradient(269deg, rgba(199, 202, 199, 0.00) 10.88%, rgba(38, 42, 52, 0.31) 67.19%)",
//           }}
//         ></div>

//         {/* Image */}
//         <Image
//           src="/assets/placeholder.png"
//           alt=""
//           width={1600}
//           height={784}
//           className=""
//         />
//       </div>
//       <div className="absolute top-36 left-10 text-center md:text-left">
//         {" "}
//         {/* Modified */}
//         <h1 className="text-4xl md:text-7xl font-bold text-white">
//           {" "}
//           {/* Modified */}
//           Find your way <br />
//           <span className="text-[#A2DAC7]">Home</span>
//         </h1>
//         <p className="text-white text-base md:text-xl mt-4">
//           {" "}
//           {/* Modified */}
//           The most comfortable accommodation you can find in our <br />
//           website, spread all over the world
//         </p>
//         <div className="mt-5 flex flex-col md:flex-row gap-3 md:gap-10">
//           {" "}
//           {/* Modified */}
//           <button className="py-2 md:py-3 px-6 md:px-9 bg-[#A2DAC7] text-[#384652] font-semibold rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#26aae1] focus:ring-opacity-75">
//             Get Started
//           </button>
//           <button className="text-base md:text-xl py-2 md:py-3 px-6 md:px-9 border border-[#A2DAC7] text-[#eef2f5] font-semibold rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#26aae1] focus:ring-opacity-75 flex items-center gap-2 md:gap-4">
//             {" "}
//             {/* Modified */}
//             <span className="">
//               <BsFillPlayCircleFill />
//             </span>{" "}
//             Watch Video
//           </button>
//         </div>
//       </div>
//       <div className="absolute top-[500px] md:top-[auto] left-0 right-0 md:flex justify-center">
//         {/* Modified */}
//         <SForm />
//       </div>
//     </div>
//   );
// };

// export default HomeBanner;
