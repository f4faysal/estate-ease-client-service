import RootLayout from "@/components/rootLayout/RootLayout";
import { ReactElement } from "react";

const Contact = () => {
  return <div>Contact</div>;
};

export default Contact;

Contact.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
