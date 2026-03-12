import DetailProduk from "@/views/DetailProduk";
import { ProductType } from "@/types/Product.type";
import fetcher from "@/utils/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";

type DetailProductResponse = {
  data: ProductType;
};

const HalamanDetailProdukCSR = () => {
  const router = useRouter();
  const produkId =
    typeof router.query.produk === "string" ? router.query.produk : undefined;

  const { data, error, isLoading } = useSWR<DetailProductResponse>(
    router.isReady && produkId ? `/api/produk/${produkId}` : null,
    fetcher
  );

  if (!router.isReady || isLoading) {
    return <p>Memuat detail produk...</p>;
  }

  if (error) {
    return <p>Gagal memuat detail produk.</p>;
  }

  if (!data?.data) {
    return <p>Produk tidak ditemukan.</p>;
  }

  return <DetailProduk products={data.data} renderMode="CSR" />;
};

export default HalamanDetailProdukCSR;
