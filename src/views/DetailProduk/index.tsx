// import { ProductType } from "@/types/Product.type";
import { ProductType } from "../../types/Product.type";
import styles from "../DetailProduk/detailProduk.module.scss";

const DetailProduk = ({
  products,
  renderMode,
}: {
  products: ProductType;
  renderMode?: "CSR" | "SSR" | "SSG";
}) => {
  return (
    <>
      <h1 className={styles.title}>Detail Produk</h1>
      {renderMode && (
        <p className={styles.badgeMode}>Render mode: {renderMode}</p>
      )}
      <div className={styles.produkdetail}>
        <div className={styles.produkdetail__image}>
          <img src={products.image && products.image} alt={products.name} />
        </div>

        <div className={styles.produkdetail__info}>
          <h1 className={styles.produkdetail__name}>{products.name}</h1>
          <p className={styles.produkdetail__category}>{products.category}</p>
          <p className={styles.produkdetail__price}>
            Rp {products.price && products.price.toLocaleString("id-ID")}
          </p>
        </div>
      </div>
    </>
  );
};

export default DetailProduk;
