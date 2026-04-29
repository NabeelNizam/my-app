import DetailProduk from "@/views/DetailProduk";
import { ProductType } from "@/types/Product.type";

type DetailProductResponse = {
  data: ProductType;
};

type Props = {
  product: ProductType | null;
};

export default function HalamanDetailProdukSSR({ product }: Props) {
  if (!product) {
    return <p>Produk tidak ditemukan.</p>;
  }

  return <DetailProduk products={product} renderMode="SSR" />;
}

export async function getServerSideProps(context: any) {
  const { params } = context;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API}/api/produk/${params?.produk}`
    );
    const response: DetailProductResponse = await res.json();

    return {
      props: {
        product: response.data || null,
      },
    };
  } catch (error) {
    return {
      props: {
        product: null,
      },
    };
  }
}