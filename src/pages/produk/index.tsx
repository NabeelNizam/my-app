import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Windsurf: Refactor | Explain
type ProductType = {
  id: string;
  name: string;
  price: number;
  size: string;
  category: string;
};

const kategori = () => {
  // const [isLogin, setIsLogin] = useState(false);
  const { push } = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   if (isLogin) {
  //     push("/auth/login");
  //   }
  // }, []);
  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/produk");
      const data = await response.json();
      setProducts(data.data);
    } catch (error) {
      console.error("Error fetching produk:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts(); 
  }, []);


  return (
    <div>
      <h1>Daftar Produk</h1>

      <button onClick={getProducts} disabled={loading}>
        {loading ? "Loading..." : "Refresh Data"}
      </button>

      {products.map((product: ProductType) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Kategori: {product.category}</p>
          <p>Harga: {product.price}</p>
          <p>Ukuran: {product.size}</p> <br />
        </div>
      ))}
    </div>
  );
};

export default kategori;