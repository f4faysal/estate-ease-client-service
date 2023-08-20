import RootLayout from "@/components/rootLayout/RootLayout";
import { ReactElement } from "react";

const PackagesEE = () => {
  return <div>PackagesEE</div>;
};

export default PackagesEE;

PackagesEE.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
