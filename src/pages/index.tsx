import HomeBanner from "@/components/homePage/HomeBanner";
import HomeBuying from "@/components/homePage/HomeBuying";
import RootLayout from "@/components/rootLayout/RootLayout";
import { ReactElement } from "react";

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <HomeBuying />
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
