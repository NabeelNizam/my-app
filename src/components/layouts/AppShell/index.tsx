import { useRouter } from "next/router";
import Navbar from "../navbar";
import Footer from "../footer";
import { Roboto } from "next/font/google";



const disableNavbarFooter = ["/auth/login", "/auth/register", "/404"];

type AppShellProps = {
  children: React.ReactNode;
};
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();
    return (
    <main className={roboto.className}>
      {!disableNavbarFooter.includes(pathname) && <Navbar />}
      {children}
      {!disableNavbarFooter.includes(pathname) && <Footer />}
    </main>
  );
};

export default AppShell;
