import { ProductType } from "@/types/Product.type";
import { retrieveProductById, retrieveProducts } from "@/utils/db/servicefirebase";
import DetailProduk from "@/views/DetailProduk";
import { GetStaticPaths, GetStaticProps } from "next";

type DetailProdukStaticProps = {
  product: ProductType | null;
};

type ProdukPathParams = {
  produk: string;
};

const HalamanDetailProdukStatic = ({ product }: DetailProdukStaticProps) => {
  if (!product) {
    return <p>Produk tidak ditemukan.</p>;
  }

  return <DetailProduk products={product} renderMode="SSG" />;
};

export default HalamanDetailProdukStatic;

export const getStaticPaths: GetStaticPaths<ProdukPathParams> = async () => {
  const products = (await retrieveProducts("products")) as ProductType[];
  const paths = products.map((product) => ({
    params: { produk: product.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  DetailProdukStaticProps,
  ProdukPathParams
> = async ({ params }) => {
  const produkId = params?.produk;

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
