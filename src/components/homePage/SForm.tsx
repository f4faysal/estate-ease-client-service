import Image from "next/image";

const SForm = () => {
  return (
    <div className="">
      <div className=" flex justify-center ">
        <div className="bg-white w-[132px] h-[60px] rounded-t-2xl flex items-center justify-center">
          <button className=" py-2 px-3  bg-[#A2DAC7] text-[#384652] font-semibold rounded-xl flex justify-start items-center gap-1">
            <Image src="/assets/rent-logo.png" alt="" height={30} width={30} />{" "}
            Rent
          </button>
        </div>
      </div>
      <div
        className="h-[80px] w-[1000px] border bg-white rounded-2xl text-center"
        style={{
          boxShadow: "0px 24px 50px 0px rgba(0, 0, 0, 0.10)",
        }}
      >
        <div className="w-full h-full flex justify-evenly items-center">
          <div className="w-full">1</div>
          <div className="w-full">2</div>
          <div className="w-full">3</div>
          <div className="w-full">4</div>
          <div className="w-full">
            <button className=" py-3 px-9 bg-[#A2DAC7] text-[#384652] font-semibold rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#26aae1]focus:ring-opacity-75">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SForm;

// import Image from "next/image";

// const SForm = () => {
//   return (
//     <div className="">
//       <div className="flex justify-center">
//         <div className="bg-white w-[132px] h-[60px] md:w-[150px] md:h-[70px] rounded-t-2xl flex items-center justify-center">
//           <button className="py-2 px-3 md:px-4 bg-[#A2DAC7] text-[#384652] font-semibold rounded-xl flex justify-start items-center gap-1">
//             <Image src="/assets/rent-logo.png" alt="" height={30} width={30} />{" "}
//             Rent
//           </button>
//         </div>
//       </div>
//       <div
//         className="mt-3 md:mt-5 h-[80px] md:h-[100px] w-full md:w-[600px] border bg-white rounded-2xl text-center md:text-left"
//         style={{
//           boxShadow: "0px 24px 50px 0px rgba(0, 0, 0, 0.10)",
//         }}
//       >
//         <div className="w-full h-full md:flex justify-evenly items-center">
//           <div className="w-full md:w-auto">1</div>
//           <div className="w-full md:w-auto">2</div>
//           <div className="w-full md:w-auto">3</div>
//           <div className="w-full md:w-auto">4</div>
//           <div className="w-full md:w-auto">
//             <button className="py-2 md:py-3 px-4 md:px-9 bg-[#A2DAC7] text-[#384652] font-semibold rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#26aae1] focus:ring-opacity-75">
//               Search
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SForm;
