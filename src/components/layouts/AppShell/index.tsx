import { useRouter } from "next/router";
import Navbar from "../navbar";
import Footer from "../footer";

const disableNavbarFooter = ["/auth/login", "/auth/register", "/404"];

type AppShellProps = {
  children: React.ReactNode;
};


const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();
    return (
    <main>
      {!disableNavbarFooter.includes(pathname) && <Navbar />}
      {children}
      {!disableNavbarFooter.includes(pathname) && <Footer />}
    </main>
  );
};

export default AppShell;
