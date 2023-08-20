import HomeBanner from "@/components/homePage/HomeBanner";
import RootLayout from "@/components/rootLayout/RootLayout";
import { ReactElement } from "react";

export default function Home() {
  return (
    <div>
      <HomeBanner />
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
