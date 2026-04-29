import { ProductType } from "@/types/Product.type";
import { retrieveProductById } from "@/utils/db/servicefirebase";
import DetailProduk from "@/views/DetailProduk";
import { GetServerSideProps } from "next";

type DetailProdukSSRProps = {
  product: ProductType | null;
};

const HalamanDetailProdukSSR = ({ product }: DetailProdukSSRProps) => {
  if (!product) {
    return <p>Produk tidak ditemukan.</p>;
  }

  return <DetailProduk products={product} renderMode="SSR" />;
};

export default HalamanDetailProdukSSR;

export const getServerSideProps: GetServerSideProps<DetailProdukSSRProps> =
  async ({ params }) => {
    const produkParam = params?.produk;
    const produkId = Array.isArray(produkParam) ? produkParam[0] : produkParam;

    if (!produkId) {
      return { notFound: true };
    }

    const detailProduk = await retrieveProductById("products", produkId);

    if (!detailProduk) {
      return { notFound: true };
    }

    return {
      props: {
        product: {
          id: produkId,
          ...(detailProduk as Omit<ProductType, "id">),
        },
      },
    };
  };
