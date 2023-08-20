import RootLayout from "@/components/rootLayout/RootLayout";
import { ReactElement } from "react";

export default function Home() {
  return <main></main>;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
