import { useRouter } from "next/router";
import Navbar from "../navbar";
import Footer from "../footer";

const disableNavbarFooter = ["/auth/login", "/auth/register"];

type AppShellProps = {
  children: React.ReactNode;
};


const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();
    return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default AppShell;
