import TampilanProduk from "../../views/produk";
import { ProductType } from "../../types/Product.type";

type Props = {
  products: ProductType[];
};

const HalamanProdukServer = ({ products }: Props) => {
  return (
    <div>
      <h1>Halaman Produk Server</h1>
      <TampilanProduk
        products={products}
        isLoading={false}
        detailBasePath="/produk/server"
      />
    </div>
  );
};

export default HalamanProdukServer;

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/produk`);
  const response = await res.json();

  return {
    props: {
      products: response.data || [],
    },
  };
}