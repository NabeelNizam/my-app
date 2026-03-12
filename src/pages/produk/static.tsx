import TampilanProduk from "../../views/produk";
import { ProductType } from "../../types/Product.type";

const halamanProdukStatic = (props: {products:ProductType[]}) => {
    const { products } = props;
    return (
        <div>
            <h1>Halaman Produk Static</h1>
            <TampilanProduk
              products={products}
              loading={false}
              detailBasePath="/produk/static"
            />

        </div>
    );
};
export default halamanProdukStatic;

export async function getStaticProps() {   
    const res = await fetch('http://localhost:3000/api/produk');
    // const response: ProductType[] = await res.json();

    const response: { data: ProductType[] } = await res.json(); 

    return{
        props: {
            products: response.data, 
        },
    }

}
