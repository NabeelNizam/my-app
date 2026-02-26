import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProdukView from "";

const ProdukPage = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState<boolean | null>(null);

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLogin");

    if (!loginStatus) {
      router.push("/auth/login");
    } else {
      setIsLogin(true);
    }
  }, [router]);

  if (!isLogin) return null; 

  return <ProdukView />;
};

export default ProdukPage;