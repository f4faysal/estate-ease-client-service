import RootLayout from "@/components/rootLayout/RootLayout";
import { ReactElement } from "react";

export default function Home() {
  return (
    <>
      <p className="text-2xl bg-slate-800 text-red-50 ">Home</p>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
