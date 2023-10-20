import { useLoaderData } from "react-router-dom";
import BrandBanner from "../../components/brand-banner/BrandBanner";
import { useEffect, useState } from "react";
import ProductCard from "../../components/product-card/ProductCard";

const BrandPage = () => {
    const data = useLoaderData();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/products/${data.name}`)
        .then(res => res.json())
        .then(info => {
            console.log(info);
            setProducts(info);
        })
    },[])
    return (
        <div>
            <BrandBanner data={data}></BrandBanner>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-4 md:mx-12 lg:mx-24 my-16">
                {
                    products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </section>
        </div>
    );
};

export default BrandPage;