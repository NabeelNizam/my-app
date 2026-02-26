import Link from "next/link";
import { useRouter } from "next/router";
// import styles from "./login.module.css";
import styles from "./login.module.scss";

const TampilanLogin = () => {
  const {push} = useRouter();

  const handleLogin = () => {
    localStorage.setItem("isLogin", "true");
    push("/produk");
  }
  return (
    <div className={styles.login}>
      <h1 className="text-3xl font-bold text-blue-600 ">Halaman Login</h1>
      <button onClick={handleLogin}>Login</button>
      <h1 style={{ 
        color: "red",
        border: "2px solid red",
        borderRadius: "10px",
        padding: "10px"
      }}>
        Belum Punya Akun
        </h1>
      <Link href="/auth/register">Ke Halaman Register</Link>
    </div>
  );
}

export default TampilanLogin;