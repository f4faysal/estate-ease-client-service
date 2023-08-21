const HomeBuying = () => {
  return (
    <div className="relative mx-auto w-full lg:w-[1500px] lg:h-[600px]">
      <div className="w-full h-full flex justify-center items-center flex-col lg:flex-row">
        <div className="w-1/2 ">
          <div className=" ">
            {/* <Image
            src=""
            alt=""
            hello=''
            height={50}
            width={50}
            className="rounded-full"
          /> */}
            <div className=" hidden md:block absolute top-2 left-[400px]  h-52 w-52 bg-slate-500 rounded-full"></div>
            <div className="lg:absolute top-[100px] h-96 w-96 bg-slate-500 rounded-full"></div>
            <div className="hidden  md:block absolute bottom-10 left-[500px] h-40 w-40 bg-slate-500 rounded-full"></div>
          </div>
        </div>
        <div className="w-1/2 ">
          <h1 className="text-5xl font-semibold ">
            Hassle free buying your <br />
            own property
          </h1>
          <p className="text-xl my-5">
            Embark on your home journey with us, where finding <br /> your dream
            home is an exciting adventure.
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Modern Property Exploration easy, efficient, and enjoyable.</li>
            <li>Intuitive Search, Faster Results.</li>
            <li>Virtual Tours Anywhere.</li>
            <li>Find your dream home.</li>
          </ul>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-[200px] bg-[#aad4f6] opacity-25 border "></div>
    </div>
  );
};

export default HomeBuying;
