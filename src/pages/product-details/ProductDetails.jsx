import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {

    const product = useLoaderData();
    const { photo, name, brand, type, price, description, rating } = product;
    
    return (
        <div className="card bg-base-100 shadow-xl shadow-slate-700 mx-4 md:mx-auto w-full md:w-2/3 my-24">
            <figure><img className="h-96 w-full" src={photo} alt={`image of ${name} ${type}`} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">{type}</div>
                </h2>
                <p>A {type} by {brand}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Rating: {rating}</div>
                    <div className="badge badge-outline">Price: {price}</div>
                </div>
                <section className="flex justify-between items-center">
                    <div className="card-actions w-full">
                        <button className="w-full bg-slate-700 bg-opacity-50 hover:bg-opacity-100 hover:bg-gradient-to-br from-orange-400 to-red-700 hover:text-white rounded-xl px-4 py-2 font-semibold">Add to cart</button>
                    </div>
                    
                </section>
            </div>
        </div>
    );
};

export default ProductDetails;