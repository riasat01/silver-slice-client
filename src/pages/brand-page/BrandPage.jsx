import { Link, useLoaderData } from "react-router-dom";
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
                // console.log(info);
                setProducts(info);
            })
    }, [])
    return (
        <>
        {
            products?.length ?
            <div>
                <BrandBanner data={data}></BrandBanner>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-4 md:mx-12 lg:mx-24 my-16">
                    {
                        
                            products?.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                           
                    }
                </section>
            </div>
             :
             <section className="h-screen w-screen flex flex-col justify-center items-center gap-12">
                 <h1 className="text-2xl font-semibold">Currently no products available. Please stay with us for future updates</h1>
                 <Link className="bg-slate-700 bg-opacity-50 hover:bg-opacity-100 hover:bg-gradient-to-br from-orange-400 to-red-700 hover:text-white rounded-xl px-4 py-2 font-semibold" to={`/`}>Back to home</Link>
             </section>
        }
        </>
    );
};

export default BrandPage;