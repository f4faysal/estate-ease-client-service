import RootLayout from "@/components/rootLayout/RootLayout";
import { ReactElement } from "react";

const Login = () => {
  return <div>Login</div>;
};

export default Login;

Login.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};