import Link from "next/link";
import styles from "@/styles/404.module.scss";
import Image from "next/image";

const custom404 = () => {
    return (
        <>
        <head>
            <title>404 - Halaman Tidak Ditemukan</title>
            <meta name="description" content="Halaman yang dicari tidak ada" />
        </head>

        <div className={styles.error}>
            {/* <img src="/page-not-found.png" alt="404" className={styles.error__image} /> */}
            <Image
                src="/page-not-found.png"
                alt="404"
                className={styles.error__image}
                width={400}
                height={200}
                />
                
            <h1 className={styles.error__title}>
                404 - Halaman Tidak Ditemukan
            </h1>
            <p className={styles.error__description}>
                Maaf, halaman yang Anda cari tidak ada.
            </p>
            <Link href="/" className={styles.error__link}>
                Kembali ke Beranda
            </Link>
        </div>
        </>
    );
};

export default custom404;